import dbConnect from '../../lib/mongodb';
import SiteSetting from '../../models/SiteSetting';

export default async function handler(req, res) {
  // Only allow GET method for public access
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Connect to the database
    await dbConnect();
    
    // Extract query parameters
    const { key, category } = req.query;
    
    // Handle single key request
    if (key) {
      const setting = await SiteSetting.findOne({ key }).lean();
      
      if (!setting) {
        return res.status(404).json({ error: `Setting with key "${key}" not found` });
      }
      
      // For security, only return certain fields
      const { value, category, description } = setting;
      return res.status(200).json({ value, category, description });
    }
    
    // Handle category request or all public settings
    let filter = {};
    if (category) {
      filter.category = category;
    }
    
    // Add a filter for public-only settings if needed
    // filter.isPublic = true; // Uncomment if you have an isPublic field
    
    const settings = await SiteSetting.find(filter).lean();
    
    // Transform to a more friendly format
    const formattedSettings = settings.reduce((acc, setting) => {
      if (!acc[setting.category]) {
        acc[setting.category] = {};
      }
      
      acc[setting.category][setting.key] = {
        value: setting.value,
        description: setting.description
      };
      
      return acc;
    }, {});
    
    return res.status(200).json(formattedSettings);
  } catch (error) {
    console.error('Error fetching public settings:', error);
    return res.status(500).json({ error: 'Failed to fetch settings' });
  }
} 