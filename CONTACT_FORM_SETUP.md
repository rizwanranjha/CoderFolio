# Contact Form Setup Guide

## ✅ Current Implementation: FormSubmit

The contact form is now configured to use **FormSubmit** - a free service that requires no account setup!

### How It Works:
- FormSubmit receives the form submission
- Sends you an email notification
- Optionally sends an auto-reply to the sender
- Works immediately - no configuration needed!

---

## Quick Setup (2 Steps)

### Step 1: Add Your Email

Open `_config.yml` and update the email:

```yaml
email: "your-email@example.com"  # Replace with your actual email
```

**OR** directly edit `assets/js/scripts.js` line 12:
```javascript
const recipientEmail = 'your-email@example.com';  // Replace with your email
```

### Step 2: Test It!

1. Fill out the contact form on your site
2. Click "Send Message"
3. Check your email inbox (and spam folder) for the submission

**That's it!** No sign-ups, no API keys, no configuration needed.

---

## Alternative: EmailJS with Gmail (More Control)

If you want to use Gmail directly with more customization options:

### Setup Steps:

1. **Sign up for EmailJS** (free tier):
   - Go to: https://www.emailjs.com
   - Create a free account
   - Free tier: 200 emails/month

2. **Connect Gmail**:
   - Go to Email Services → Add New Service
   - Choose "Gmail"
   - Follow the setup wizard
   - This connects your Gmail account securely

3. **Create Email Template**:
   - Go to Email Templates → Create New Template
   - Use variables like: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Save and note your Template ID

4. **Get Your Credentials**:
   - Public Key (from Account → General)
   - Service ID (from Email Services)
   - Template ID (from Email Templates)

5. **Update the Code**:

   Add to `_includes/head.html` (before closing `</head>`):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

   Replace the form handler in `assets/js/scripts.js` with:
   ```javascript
   // Initialize EmailJS
   (function() {
       emailjs.init("YOUR_PUBLIC_KEY");
   })();

   // Contact Form Handler
   (function() {
       const contactForm = document.getElementById('contactForm');
       if (!contactForm) return;

       contactForm.addEventListener('submit', async function(e) {
           e.preventDefault();
           
           const submitBtn = document.getElementById('submitBtn');
           const spinner = submitBtn.querySelector('.spinner-border');
           const formStatus = document.getElementById('formStatus');
           
           submitBtn.disabled = true;
           spinner.classList.remove('d-none');
           formStatus.innerHTML = '';
           
           try {
               await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm);
               formStatus.innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';
               contactForm.reset();
           } catch (error) {
               formStatus.innerHTML = '<div class="alert alert-danger">Error sending message. Please try again.</div>';
           } finally {
               submitBtn.disabled = false;
               spinner.classList.add('d-none');
           }
       });
   })();
   ```

---

## Comparison

| Feature | FormSubmit (Current) | EmailJS with Gmail |
|---------|----------------------|-------------------|
| Setup Time | 2 minutes | 10-15 minutes |
| Account Required | No | Yes |
| Free Tier | Unlimited | 200/month |
| Customization | Basic | Advanced |
| Auto-reply | Yes | Yes |
| Spam Protection | Basic | Advanced |
| Best For | Quick setup | More control |

---

## Current Status

✅ **FormSubmit is implemented and ready!**

Just add your email address in `_config.yml` and it will work immediately.

---

## Troubleshooting

### Form not sending:
- Check browser console (F12) for errors
- Verify email is set correctly in `_config.yml`
- Check spam folder for test submissions

### No email received:
- Wait a few minutes (FormSubmit may have delays)
- Check spam/junk folder
- Verify email address is correct

### JavaScript errors:
- Ensure `scripts.js` is loaded (check footer.html)
- Clear browser cache
- Check browser console for specific errors

---

## Security Notes

- FormSubmit includes basic spam protection
- Consider adding reCAPTCHA for additional security
- Never expose sensitive information in client-side code
- FormSubmit uses HTTPS for secure transmission

---

## Need Help?

If you want to switch to EmailJS or need help with setup, let me know!
