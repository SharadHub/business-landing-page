import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async ({ name, email, message }) => {
  // Email to business owner
  const ownerMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>This message was sent from the ProjectFlow contact form.</em></p>
    `,
  };

  // Auto-reply to sender
  const autoReplyMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting ProjectFlow',
    html: `
      <h2>Thank you for reaching out!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for your message. We have received it and will get back to you within 24 hours.</p>
      <p>Here is a copy of your message:</p>
      <blockquote style="border-left: 3px solid #4C4BF5; padding-left: 16px; margin: 16px 0;">
        ${message}
      </blockquote>
      <p>Best regards,<br>The ProjectFlow Team</p>
    `,
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    console.log('Owner notification email sent');
    
    await transporter.sendMail(autoReplyMailOptions);
    console.log('Auto-reply email sent');
  } catch (error) {
    console.error('Email service error:', error);
    throw new Error('Failed to send email');
  }
};
