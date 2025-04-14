import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Enable __dirname in ES module context
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Explicitly tell dotenv where to find the .env file
dotenv.config({ path: path.join(__dirname, '.env') });

//dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('📬 Incoming contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  if (!name || !email || !message) {
    console.warn('⚠️ Missing fields in contact form');
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('🔐 Email transporter created');

    const mailOptions = {
      from: email,
      to: ['alexis.246.menendez@gmail.com', 'alexis.menendez@austincc.edu', 'menendez.alex.d@gmail.com'],
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    console.log('📨 Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (err) {
    console.error('❌ Failed to send email:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// ---- Serve React Frontend ----

// Path to the built client files
const clientPath = path.join(__dirname, '..', 'client', 'dist');

// Serve static files from the React app
app.use(express.static(clientPath));

// Fallback: serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
