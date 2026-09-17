import dbConnect from '../../lib/mongodb';
import Announcement from '../../models/Announcement';

export default async function handler(req, res) {
  // Only allow GET method for public access
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Connect to the database
    await dbConnect();
    
    // Get current date
    const now = new Date();
    
    // Build query for active announcements within date range
    const query = {
      isActive: true,
      startDate: { $lte: now },
      $or: [
        { endDate: null },
        { endDate: { $gte: now } }
      ]
    };
    
    // Extract query parameters
    const { type, limit = 3 } = req.query;
    
    // Filter by type if provided
    if (type && type !== 'all') {
      query.type = type;
    }
    
    // Get announcements sorted by most recent first, with limit
    const announcements = await Announcement.find(query)
      .sort({ startDate: -1 })
      .limit(parseInt(limit))
      .lean();
    
    // Transform data for public consumption
    const publicAnnouncements = announcements.map(announcement => ({
      id: announcement._id,
      title: announcement.title,
      content: announcement.content,
      type: announcement.type,
      startDate: announcement.startDate,
      endDate: announcement.endDate,
    }));
    
    return res.status(200).json(publicAnnouncements);
  } catch (error) {
    console.error('Error fetching public announcements:', error);
    return res.status(500).json({ error: 'Failed to fetch announcements' });
  }
} 