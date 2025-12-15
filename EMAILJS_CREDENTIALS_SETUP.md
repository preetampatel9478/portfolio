# How to Get Your EmailJS Credentials

## Step 1: Get Your Public Key
1. Go to [emailjs.com](https://www.emailjs.com)
2. Login to your account
3. Click on **Account** in the left sidebar
4. Copy your **Public Key** (it looks like: `0fh290fG-PvuUuzSY`)

## Step 2: Get Your Service ID
1. From your dashboard, click on **Email Services** in the left sidebar
2. Find your email service (Gmail, Outlook, etc.)
3. Copy the **Service ID** (it looks like: `service_xxxxx`)

## Step 3: Get Your Template ID
1. Click on **Email Templates** in the left sidebar
2. Find the template you created
3. Copy the **Template ID** (it looks like: `template_xxxxx`)

## Step 4: Create .env.local File
Create a new file in your project root called `.env.local` with:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the values with your actual credentials.

## Step 5: Restart Development Server
After creating .env.local:
1. Stop the dev server (Ctrl+C)
2. Run `npm run dev` again
3. Test the contact form

**Important:** 
- Don't commit .env.local to git (it's already in .gitignore)
- Public Key starting with NEXT_PUBLIC_ is safe to expose
- Service ID and Template ID should not be shared publicly
