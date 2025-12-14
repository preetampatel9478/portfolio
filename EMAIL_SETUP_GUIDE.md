# Email Contact Form Setup Guide

Your contact form is now integrated with **EmailJS** to send emails directly to `shivpujankumar02002@gmail.com`. Follow these steps to activate it:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up For Free"**
3. Sign up with your email address (you can use `shivpujankumar02002@gmail.com`)
4. Verify your email

## Step 2: Get Your Public Key

1. After logging in, go to **Account** (top right)
2. Copy your **Public Key** (it looks like `abc123xyz...`)
3. Keep this safe - you'll need it in Step 4

## Step 3: Set Up Email Service

1. In the EmailJS dashboard, click **"Add Service"**
2. Choose **"Gmail"** (or your preferred email service)
3. Click **"Connect Account"**
4. Select your Gmail account (`shivpujankumar02002@gmail.com`)
5. Authorize EmailJS to send emails from your account
6. Copy the **Service ID** (you'll need this)

## Step 4: Create Email Template

1. In the EmailJS dashboard, go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use these settings:

   **Template Name:** `Contact Form Template`
   
   **Email Subject:** `New Message from {{from_name}}`
   
   **Email Content:** Copy this exactly:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

4. Click **"Save"**
5. Copy the **Template ID** (you'll need this)

## Step 5: Update Your Portfolio Code

1. Open `src/components/Contact.tsx`
2. Find this line (around line 10-11):
   ```typescript
   emailjs.init('YOUR_PUBLIC_KEY_HERE')
   ```
   Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key

3. Find these lines (around line 43-44):
   ```typescript
   await emailjs.send(
     'service_v6hj7a8', // Your Service ID
     'template_oaq3i0u', // Your Template ID
   ```
   - Replace `'service_v6hj7a8'` with your **Service ID**
   - Replace `'template_oaq3i0u'` with your **Template ID**

4. Save the file

## Step 6: Test the Contact Form

1. Run your portfolio: `npm run dev`
2. Scroll to the **"Get In Touch"** section
3. Fill in the contact form with test data
4. Click **"Send Message"**
5. You should receive an email at `shivpujankumar02002@gmail.com`
6. The form will show a success message

## Troubleshooting

**Issue:** "Failed to send message"
- **Solution:** Check that your Public Key, Service ID, and Template ID are correct
- Make sure you authorized Gmail in EmailJS
- Check the browser console for detailed error messages

**Issue:** Emails not arriving
- **Solution:** Check your Gmail spam folder
- Make sure EmailJS service is active in your dashboard
- Verify the template email content is correct

**Issue:** Rate limiting (after sending many emails)
- **Solution:** EmailJS free plan has limits. Upgrade if needed

## What Users Will See

✅ **When they submit the form:**
- Loading spinner appears
- Button shows "Sending..."

✅ **If successful:**
- Green success message: "Thank you! Your message has been sent successfully."
- Form clears automatically
- You receive an email at `shivpujankumar02002@gmail.com`

✅ **If there's an error:**
- Red error message with instructions to try again
- Button becomes clickable again

## Your Credentials (Save these safely)

After setup, you'll have:
- **Public Key:** (from Account settings)
- **Service ID:** (from Email Services)
- **Template ID:** (from Email Templates)

These are already in your code, just fill in the actual values!

---

**Questions?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
