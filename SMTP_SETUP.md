# SMTP Email Setup Guide

The contact form has been configured to use your SMTP email server instead of Web3Forms. Follow these steps to configure it with your email provider.

## Quick Setup

1. **Edit the `.env.local` file** with your SMTP settings
2. **Restart your development server**
3. **Test the contact form**

## Configuration Steps

### 1. Gmail Setup (Recommended)

If you want to use Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Update `.env.local`**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   SMTP_FROM_EMAIL=your-email@gmail.com
   SMTP_TO_EMAIL=your-email@gmail.com
   ```

### 2. Outlook/Hotmail Setup

```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
SMTP_FROM_EMAIL=your-email@outlook.com
SMTP_TO_EMAIL=your-email@outlook.com
```

### 3. Custom SMTP Server

```
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587 (or 465 for SSL)
SMTP_SECURE=false (true if using port 465)
SMTP_USER=your-username
SMTP_PASS=your-password
SMTP_FROM_EMAIL=your-email@yourdomain.com
SMTP_TO_EMAIL=where-you-want-to-receive@emails.com
```

## Environment Variables Explanation

- `SMTP_HOST`: Your email provider's SMTP server
- `SMTP_PORT`: Usually 587 (TLS) or 465 (SSL)
- `SMTP_SECURE`: Set to "true" for port 465, "false" for port 587
- `SMTP_USER`: Your email username (usually your email address)
- `SMTP_PASS`: Your email password (use app password for Gmail)
- `SMTP_FROM_EMAIL`: The email address that will appear as sender
- `SMTP_TO_EMAIL`: Your email where contact form submissions will be sent

## Testing

After configuration:

1. **Restart the development server**:
   ```bash
   npm run dev
   ```

2. **Test the contact form** on your website
3. **Check your email** for the contact form submission

## Troubleshooting

### Common Issues:

1. **"Invalid login"** - Check username and password
2. **"Connection timeout"** - Verify SMTP host and port
3. **"Self signed certificate"** - Some providers need additional SSL config

### Gmail Specific:
- Must use App Password, not regular password
- Enable 2-Factor Authentication first
- Use smtp.gmail.com with port 587

### Security Note:
- Never commit `.env.local` to version control
- Use strong passwords/app passwords
- Consider using environment variables in production

## Email Template

The contact form will send emails with this format:
- **Subject**: New Contact Form Submission from [Name]
- **Content**: Name, Email, Message in a nicely formatted HTML template
- **Reply-To**: Set to the sender's email for easy replies
