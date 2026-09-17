import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

// Simple in-memory store for rate limiting
const rateLimit = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per window

  const requestLog = rateLimit.get(ip) || [];
  const windowStart = now - windowMs;

  // Remove old requests
  const recentRequests = requestLog.filter(timestamp => timestamp > windowStart);

  if (recentRequests.length >= maxRequests) {
    return true;
  }

  // Add current request
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  return false;
};

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const sanitizeMessage = (message) => {
  return sanitizeHtml(message, {
    allowedTags: [], // Strip all HTML tags
    allowedAttributes: {} // Strip all attributes
  });
};

// Create a reusable transporter
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email configuration is missing');
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Apply rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (isRateLimited(ip)) {
    return res.status(429).json({ message: 'Too many requests, please try again later' });
  }

  let transporter;
  try {
    const { name, email, message, subject } = req.body;

    // Enhanced validation
    if (!name || !email || !message) {
      console.log('Validation failed:', { name, email, message });
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    if (!validateEmail(email)) {
      console.log('Invalid email:', email);
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }

    // Sanitize inputs
    const sanitizedMessage = sanitizeMessage(message);
    const sanitizedName = sanitizeHtml(name);
    const sanitizedSubject = sanitizeHtml(subject || '');

    // Create and verify transporter
    transporter = createTransporter();
    await transporter.verify();
    console.log('Email transporter verified successfully');

    // Set default subject if not provided
    const emailSubject = sanitizedSubject || `New Contact Form Submission from ${sanitizedName}`;

    // Set up email data with sanitized content
    const mailOptions = {
      from: `"${sanitizedName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      replyTo: email,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      text: `
        Name: ${sanitizedName}
        Email: ${email}
        
        Message:
        ${sanitizedMessage}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003478;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3 style="color: #003478;">Message:</h3>
          <p style="white-space: pre-wrap;">${sanitizedMessage.split('\n').join('<br/>')}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>
        </div>
      `,
    };

    console.log('Attempting to send email...');
    // Send the email with retries
    const maxRetries = 3;
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Attempt ${attempt} of ${maxRetries}`);
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
        lastError = error;
        if (attempt < maxRetries) {
          const delay = Math.pow(2, attempt) * 1000;
          console.log(`Waiting ${delay}ms before retry...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError;
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    if (error.message === 'Email configuration is missing') {
      console.error('Email configuration missing:', {
        hasUser: !!process.env.EMAIL_USER,
        hasPass: !!process.env.EMAIL_PASS
      });
      return res.status(500).json({ message: 'Email service is not properly configured. Please contact support.' });
    }
    if (error.code === 'ECONNREFUSED') {
      console.error('Connection refused:', error);
      return res.status(500).json({ message: 'Failed to connect to email server. Please try again later.' });
    }
    if (error.code === 'ETIMEDOUT') {
      console.error('Connection timed out:', error);
      return res.status(500).json({ message: 'Email server connection timed out. Please try again later.' });
    }
    if (error.code === 'EAUTH') {
      console.error('Authentication failed:', error);
      return res.status(500).json({ message: 'Email authentication failed. Please contact support.' });
    }
    
    return res.status(500).json({ 
      message: 'Error sending email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  } finally {
    // Close the transporter connection
    if (transporter) {
      transporter.close();
    }
  }
} 