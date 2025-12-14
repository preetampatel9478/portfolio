# Quick Setup: Fix Your Contact Form Email 🚀

Your contact form is ready but needs EmailJS credentials. **This takes 10 minutes!**

## Quick Start (Copy & Paste Steps)

### Step 1️⃣: Create EmailJS Account (2 min)
- Go to: https://www.emailjs.com/
- Click "Sign Up For Free"
- Use email: `shivpujankumar02002@gmail.com`
- Verify email and login

### Step 2️⃣: Get Your Public Key (1 min)
1. Click your profile icon (top right) → **Account**
2. Copy the **Public Key** shown on this page
3. Save it somewhere (looks like: `abc123xyz...`)

### Step 3️⃣: Add Gmail Service (2 min)
1. Left sidebar → **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Click **Connect Account**
5. Choose your Gmail: `shivpujankumar02002@gmail.com`
6. Click **Select** and authorize
7. Copy the **Service ID** (looks like: `service_abc123...`)

### Step 4️⃣: Create Email Template (3 min)
1. Left sidebar → **Email Templates**
2. Click **Create New Template**
3. Fill these fields:
   - **Template Name:** `Contact Form Template`
   - **To Email:** `{{to_email}}`
   - **From Email:** `{{from_email}}`
   - **Subject:** `New Message from {{from_name}}`

4. In the HTML content area, paste:
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<h3>Message:</h3>
<p>{{message}}</p>
```

5. Click **Save**
6. Copy the **Template ID** (looks like: `template_abc123...`)

### Step 5️⃣: Add Credentials to Your Code (2 min)

In your portfolio folder, create a file named `.env.local`:

**Windows PowerShell:**
```powershell
# Run this to create the file:
"NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE" | Out-File -FilePath ".env.local" -Encoding utf8
```

**Or manually:**
1. Create a new file named `.env.local` in your project root (same folder as package.json)
2. Paste this:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE
```

3. Replace the three values with what you copied from EmailJS

**Example (filled in):**
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=RjN_3mK9xL2pQwR4sT5uVwX6yZ7aB8c
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_def456uvw
```

### Step 6️⃣: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 7️⃣: Test Your Form

1. Go to http://localhost:3000
2. Scroll to "Get In Touch" section
3. Fill the form with test data
4. Click "Send Message"
5. Check your email `shivpujankumar02002@gmail.com`

## ✅ Success Checklist

- [ ] EmailJS account created
- [ ] Public Key copied
- [ ] Gmail service connected
- [ ] Service ID copied
- [ ] Email template created with correct variables
- [ ] Template ID copied
- [ ] `.env.local` file created with all 3 credentials
- [ ] Dev server restarted
- [ ] Test email received in inbox

## 🐛 Troubleshooting

**Problem:** "Failed to send message"
- **Solution:** Check that `.env.local` file exists and has correct values
- Open browser DevTools (F12) → Console tab for error messages

**Problem:** Email not arriving
- **Solution 1:** Check spam folder in Gmail
- **Solution 2:** Verify Service ID and Template ID are correct
- **Solution 3:** Make sure Gmail service is "Active" in EmailJS dashboard

**Problem:** "Invalid email format"
- **Solution:** Your template variable names must match exactly:
  - `{{to_email}}` - recipient
  - `{{from_name}}` - sender name
  - `{{from_email}}` - sender email
  - `{{subject}}` - subject
  - `{{message}}` - message body

**Problem:** Still not working?
1. Check browser console (F12 → Console) for error
2. Search the error in [EmailJS Docs](https://www.emailjs.com/docs/)
3. Verify all credentials one more time

## 📧 What Happens When Form is Submitted

1. User fills form with: Name, Email, Subject, Message
2. Clicks "Send Message"
3. Button shows "Sending..." (loading state)
4. EmailJS sends the email
5. Two things happen:
   - **You receive email** at `shivpujankumar02002@gmail.com`
   - **User sees success message** on your website
6. Form clears automatically

## 🔒 Security Notes

✅ **Safe to share:**
- Public Key (it's meant to be public)

⚠️ **Keep private:**
- Service ID
- Template ID
- `.env.local` file (add to `.gitignore`)

## Free Plan Limits

- **200 emails/month** (plenty for a portfolio)
- **Unlimited** templates
- **Unlimited** forms

Upgrade to "Flex Plan" if you need more emails.

---

**Questions?**
- Read full guide: `EMAILJS_COMPLETE_SETUP.md`
- EmailJS Help: https://www.emailjs.com/docs/
- Common Issues: See troubleshooting above
