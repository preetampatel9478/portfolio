# EmailJS Setup Guide - How to Fix Your Contact Form

## Problem
Your contact form is showing "Failed to send message" because your EmailJS credentials are not properly configured.

## Solution - Follow These Steps:

### Step 1: Get Your EmailJS Credentials

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign in to your account (or create one if you don't have)
3. Go to **Dashboard**

### Step 2: Get Your Public Key

1. In Dashboard, click **Account** (left sidebar)
2. Look for **API Keys** section
3. Copy your **Public Key** (looks like: `abc123def456...`)

### Step 3: Get Your Service ID

1. In Dashboard, click **Email Services** (left sidebar)
2. Select or create an email service
3. Copy the **Service ID** (usually starts with `service_...`)

### Step 4: Get Your Template ID

1. In Dashboard, click **Email Templates** (left sidebar)
2. Select or create an email template
3. Copy the **Template ID** (usually starts with `template_...`)

**IMPORTANT:** Make sure your email template has these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message body
- `{{to_email}}` - Your email address

### Step 5: Add Credentials to Your Project

1. Open the `.env.local` file in your project root (if it doesn't exist, it was just created)
2. Replace the values:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE
```

Example:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456xyz789
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123def456
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789abc123
```

### Step 6: Restart Your Development Server

1. Stop the dev server (Ctrl + C in terminal)
2. Run `npm run dev` again
3. Test the contact form

## Troubleshooting

If you still get an error, check the browser console (F12 → Console) for detailed error messages:

- **"Missing EmailJS credentials"** → You didn't add the keys to .env.local
- **"Invalid EmailJS credentials (Unauthorized)"** → Public Key is wrong
- **"Authentication failed"** → Public Key doesn't match your EmailJS account
- **"Bad request"** → Service ID or Template ID is wrong
- **"Network error"** → Check your internet connection

## Important Notes

⚠️ **SECURITY:** The `.env.local` file is listed in `.gitignore` and won't be uploaded to GitHub - your keys are safe!

✓ All environment variables must start with `NEXT_PUBLIC_` to be accessible in the browser

✓ After changing `.env.local`, restart your dev server for changes to take effect

## Still Having Issues?

1. Check your EmailJS template has the correct variable names
2. Verify your email address is verified in EmailJS
3. Make sure the Service ID and Template ID match what's in your EmailJS dashboard
4. Open browser console (F12) and share the exact error message
