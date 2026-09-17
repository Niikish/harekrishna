import nodemailer from 'nodemailer';

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get email from request body
  const { email } = req.body;

  // Enhanced validation
  if (!email || !validateEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to the admin about new subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to your newsletter: ${email}`,
      html: `
        <h3>New Newsletter Subscription</h3>
        <p>A new user has subscribed to your newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Date: ${new Date().toLocaleString()}</p>
      `,
    });

    // Confirmation email to the subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank You for Subscribing to Hare Krishna Newsletter',
      text: `Thank you for subscribing to our newsletter. We'll keep you updated with our latest news and events.`,
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>Dear Devotee,</p>
        <p>Thank you for subscribing to the Hare Krishna newsletter. We're blessed to have you join our spiritual community!</p>
        <p>We'll keep you updated with:</p>
        <ul>
          <li>Upcoming spiritual events and festivals</li>
          <li>Daily devotional activities</li>
          <li>Community gatherings and programs</li>
          <li>Special announcements and initiatives</li>
        </ul>
        <p>Hare Krishna Hare Krishna, Krishna Krishna Hare Hare<br/>Hare Rama Hare Rama, Rama Rama Hare Hare</p>
        <p>Your servants,<br/>Hare Krishna Home Deccor & Developers
 Team</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Failed to process subscription', details: error.message });
  }
} 