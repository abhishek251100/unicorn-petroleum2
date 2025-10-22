# Email Service Integration Guide for Unicorn Petroleum

## Current Implementation
The contact form is currently set up with a professional structure that simulates email sending. For production deployment, you'll need to integrate with a real email service.

## Recommended Email Services

### 1. EmailJS (Easiest - No Backend Required)
```bash
npm install @emailjs/browser
```

**Setup:**
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your service ID, template ID, and public key

**Integration:**
```javascript
import emailjs from '@emailjs/browser';

const sendEmail = async (formData) => {
  const templateParams = {
    from_name: formData.fullName,
    from_email: formData.email,
    company: formData.companyName,
    phone: formData.mobileNumber,
    country: formData.countryName,
    subject: formData.subject,
    message: formData.message,
    to_email: 'info@unicornpetro.co.in'
  };

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID', 
      templateParams,
      'YOUR_PUBLIC_KEY'
    );
    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};
```

### 2. Formspree (Simple Form Handling)
1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Get your form endpoint

**Integration:**
```javascript
const sendEmail = async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName,
        phone: formData.mobileNumber,
        country: formData.countryName,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Contact Request from ${formData.fullName}`
      })
    });
    
    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    return { success: false, error };
  }
};
```

### 3. Netlify Forms (If hosting on Netlify)
Add `netlify` attribute to your form:
```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

### 4. Custom Backend API
Create a Node.js/Express backend with Nodemailer:

```javascript
// backend/routes/contact.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, companyName, mobileNumber, countryName, subject, message } = req.body;
    
    const mailOptions = {
      from: email, // Sender's email
      to: 'info@unicornpetro.co.in, manan@unicornpetro.co.in',
      subject: `Contact Request from ${fullName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobileNumber}</p>
        <p><strong>Country:</strong> ${countryName}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
```

## Production Checklist

### ✅ Completed Features:
1. **Favicon**: Set to company logo (`/assets/logo 1.png`)
2. **404 Page**: Professional error page with navigation
3. **Meta Tags**: Dynamic titles and descriptions for SEO
4. **Form Structure**: Professional contact/quote form with validation
5. **Email Format**: Properly formatted email content with sender detection
6. **Loading States**: Submit button shows loading state
7. **Success/Error Messages**: User feedback for form submission
8. **Form Reset**: Clears form after successful submission

### 🔧 Next Steps for Production:
1. **Choose Email Service**: Select one of the options above
2. **Environment Variables**: Set up API keys securely
3. **Email Templates**: Create professional email templates
4. **Spam Protection**: Add reCAPTCHA or honeypot fields
5. **Analytics**: Track form submissions
6. **Testing**: Test email delivery to both addresses

## Security Considerations
- Validate all form inputs on both client and server
- Implement rate limiting to prevent spam
- Use HTTPS for all form submissions
- Sanitize user inputs before sending emails
- Consider implementing CSRF protection

## Email Template Example
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Request - Unicorn Petroleum</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #E99322;">New Contact Request</h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #E99322;">Contact Details</h3>
            <p><strong>Name:</strong> {{fullName}}</p>
            <p><strong>Company:</strong> {{companyName}}</p>
            <p><strong>Email:</strong> {{email}}</p>
            <p><strong>Phone:</strong> {{mobileNumber}}</p>
            <p><strong>Country:</strong> {{countryName}}</p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #E99322;">Message</h3>
            <p>{{message}}</p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
            This email was sent from the Unicorn Petroleum website contact form.<br>
            Reply directly to this email to respond to the customer.
        </p>
    </div>
</body>
</html>
```

## Testing Checklist
- [ ] Test form submission with valid data
- [ ] Test form validation with invalid data
- [ ] Test email delivery to both recipient addresses
- [ ] Test email formatting and readability
- [ ] Test mobile responsiveness of form
- [ ] Test loading states and error handling
- [ ] Verify sender email is captured correctly
- [ ] Test with different email providers (Gmail, Outlook, etc.)
