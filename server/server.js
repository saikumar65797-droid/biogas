import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Sri Aiswarya Lakshmi Green Energies Contact API',
    timestamp: new Date().toISOString()
  });
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { fullName, companyName, email, phone, category, message, honeypot } = req.body;

  // Spam protection: honeypot field
  if (honeypot) {
    return res.status(400).json({ error: 'Spam detected.' });
  }

  // Backend input validation
  const errors = {};

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.fullName = 'Full name is required and must be at least 2 characters.';
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
  if (!phone || !phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
    errors.phone = 'A valid 10-digit telephone number is required.';
  }

  const allowedCategories = [
    'General business enquiry',
    'Product enquiry',
    'Napier grass supply or agricultural partnership',
    'Plant technology or project enquiry',
    'Other'
  ];

  if (!category || !allowedCategories.includes(category)) {
    errors.category = 'A valid enquiry category is required.';
  }

  if (!message || typeof message !== 'string' || message.trim().length < 15) {
    errors.message = 'Message must be at least 15 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed.',
      errors
    });
  }

  // Lead payload logging / forwarding
  const leadPayload = {
    receivedAt: new Date().toISOString(),
    fullName: fullName.trim(),
    companyName: companyName ? companyName.trim() : 'N/A',
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    category,
    message: message.trim()
  };

  console.log('[New Lead Received]', leadPayload);

  return res.status(200).json({
    success: true,
    message: 'Your enquiry has been successfully logged. Our representative will contact you shortly.',
    leadId: `LEAD-${Date.now()}`
  });
});

// Serve frontend static assets if dist exists (Render / production)
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Sri Aiswarya Lakshmi Green Energies API running on port ${PORT}`);
});
