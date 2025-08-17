import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Validate environment variables
  const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM_EMAIL', 'SMTP_TO_EMAIL']
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar])
  
  if (missingEnvVars.length > 0) {
    console.error('Missing environment variables:', missingEnvVars)
    return res.status(500).json({ message: 'Server configuration error' })
  }

  console.log('SMTP Configuration:')
  console.log('Host:', process.env.SMTP_HOST)
  console.log('Port:', process.env.SMTP_PORT || 587)
  console.log('User:', process.env.SMTP_USER)
  console.log('From:', process.env.SMTP_FROM_EMAIL)
  console.log('To:', process.env.SMTP_TO_EMAIL)

  // Create transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false // This helps with self-signed certificates
    }
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL, // sender address
      to: process.env.SMTP_TO_EMAIL, // your email where you want to receive contact form submissions
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5044E5;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #5044E5;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">This email was sent from your agency.ai contact form.</p>
        </div>
      `,
      replyTo: email, // Set reply-to as the sender's email
    })

    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({ success: false, message: 'Failed to send email' })
  }
}
