# Complete EmailJS Setup for Contact Form

Your contact form is failing because EmailJS needs proper credentials. Follow these exact steps:

## Step 1: Go to EmailJS Website

1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up For Free"**
3. Sign up using your Gmail: `shivpujankumar02002@gmail.com`
4. Verify your email

## Step 2: Get Your Public Key

1. After login, click your **profile icon** (top right) → **Account**
2. You'll see your **Public Key** (looks like: `abc123xyz_def456...`)
3. **Copy and save it** - you'll need this

## Step 3: Add Gmail Service

1. In the left sidebar, click **"Email Services"**
2. Click **"Add Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Choose your Gmail account (`shivpujankumar02002@gmail.com`)
6. Click **"Select"** and authorize
7. You'll get a **Service ID** (looks like: `service_abc123xyz...`)
8. **Copy and save it**

## Step 4: Create Email Template

1. In the left sidebar, click **"Email Templates"**
2. Click **"Create New Template"**
3. Fill in as follows:

### Template Settings:
- **Template Name:** `Contact Form Template`
- **Template ID:** Keep the auto-generated one (looks like: `template_abc123xyz...`)

### Email Settings Tab:
- **To Email:** `{{to_email}}`
- **From Email:** `{{from_email}}`
- **Subject:** `New Message from {{from_name}}`

### Template Content:
Copy this exactly into the **HTML** section:

```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<h3>Message:</h3>
<p>{{message}}</p>
```

4. Click **"Save"**
5. **Copy and save the Template ID**

## Step 5: Update Your Portfolio Code

Open `src/components/Contact.tsx` and find these two lines:

### Line ~11 (Initialize EmailJS):
```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```

Replace with:
```typescript
emailjs.init('YOUR_ACTUAL_PUBLIC_KEY')
```

### Lines ~49-50 (Send email):
```typescript
await emailjs.send(
  'service_v6hj7a8',
  'template_oaq3i0u',
```

Replace with:
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
```

### Example (filled in):
```typescript
emailjs.init('RjN_3mK9xL2pQwR4sT5uVwX6yZ7aB8c')

await emailjs.send(
  'service_abc123xyz',
  'template_def456uvw',
```

## Step 6: Test Your Form

1. Run: `npm run dev`
2. Scroll to "Get In Touch" section
3. Fill in the form:
   - Name: Your test name
   - Email: Your email
   - Subject: Test message
   - Message: Testing contact form
4. Click "Send Message"
5. You should receive an email at `shivpujankumar02002@gmail.com`

## Important Notes

⚠️ **Do NOT share your credentials publicly:**
- Keep Service ID secret
- Keep Template ID private
- Keep Public Key somewhat private

✅ **EmailJS Free Plan:**
- 200 emails per month
- Unlimited templates
- Perfect for portfolio sites

❌ **Common Issues & Fixes:**

| Issue | Solution |
|-------|----------|
| "Failed to send message" | Check Public Key is correct |
| Email not arriving | Verify Service ID and Template ID |
| "Invalid email format" | Check the email format in template |
| Rate limited | Upgrade plan if sending >200/month |

## Verification Checklist

Before testing, verify you have:

- [ ] EmailJS account created
- [ ] Gmail service connected and authorized
- [ ] Email template created with correct variable names
- [ ] Public Key copied
- [ ] Service ID copied
- [ ] Template ID copied
- [ ] Code updated with all three credentials
- [ ] Variables in code match template exactly:
  - `{{to_email}}` - recipient email
  - `{{from_name}}` - sender name
  - `{{from_email}}` - sender email
  - `{{subject}}` - email subject
  - `{{message}}` - email body

## Debug Mode

If it still doesn't work, add this to see the error:

In `src/components/Contact.tsx`, in the catch block, change:
```typescript
catch (err) {
  console.error('Error sending email:', err)
  // This shows the error in browser console
```

Then open your browser's DevTools (F12) → Console tab and look for the error message.

## Contact Form Variables

Your form sends these variables to EmailJS:
- `to_email`: 'shivpujankumar02002@gmail.com'
- `from_name`: User's name
- `from_email`: User's email
- `subject`: User's subject
- `message`: User's message

These MUST match your template exactly (including braces).

---

**Need help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
