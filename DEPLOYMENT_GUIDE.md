# Deployment Guide

This guide will walk you through deploying the landing page to production with a live URL on your domain.

## Prerequisites

- GitHub account with the repository pushed
- Gmail account with 2-factor authentication enabled
- Vercel account (free tier is sufficient)
- Railway or Render account for backend deployment

## Step 1: Deploy Backend to Railway

### Option A: Railway (Recommended)

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your landing-page repository
4. Configure the project:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`

5. Add Environment Variables:
   ```
   PORT=5000
   NODE_ENV=production
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   TO_EMAIL=your-email@gmail.com
   FRONTEND_URL=https://your-frontend-domain.vercel.app
   ```

6. Click "Deploy"
7. Wait for deployment to complete (2-3 minutes)
8. Copy your backend URL (e.g., `https://your-project.railway.app`)

### Option B: Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment**: Node

5. Add the same environment variables as above
6. Click "Create Web Service"
7. Copy your backend URL

## Step 2: Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-factor authentication if not already enabled
3. Search for "App Passwords" in the security settings
4. Click "Create" → Select "Mail" and "Other (Custom name)"
5. Name it "Landing Page" → Click "Generate"
6. Copy the 16-character password (use this as `EMAIL_PASS`)

## Step 3: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Output Directory**: `dist`

5. Add Environment Variable:
   ```
   VITE_API_URL=https://your-backend-url.railway.app
   ```

6. Click "Deploy"
7. Wait for deployment (1-2 minutes)
8. Copy your frontend URL

## Step 4: Point Your Custom Domain

### On Vercel:

1. Go to your project settings in Vercel
2. Click "Domains" → "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Vercel will show you DNS records to add

### On Your Domain Provider (GoDaddy, Namecheap, etc.):

1. Go to your DNS management
2. Add these records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. Wait for DNS propagation (usually 5-30 minutes)
4. Vercel will automatically issue SSL certificate

## Step 5: Test Everything

1. Visit your live domain
2. Test all sections and navigation
3. Fill out the contact form
4. Check your email for:
   - Notification email (to you)
   - Auto-reply email (to sender)
5. Test on mobile device
6. Run Lighthouse audit in Chrome DevTools

## Step 6: Lighthouse Audit

1. Open your live site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
5. Click "Analyze page load"
6. Take a screenshot of the results
7. Expected scores:
   - Performance: 90+
   - Accessibility: 90+
   - SEO: 100

## Step 7: Mobile Screenshots

1. Open your live site on your phone
2. Scroll to Hero section → Take screenshot
3. Scroll to Contact section → Take screenshot
4. Add these to your portfolio

## Troubleshooting

### Email Not Sending
- Verify Gmail App Password is correct
- Check if 2-factor authentication is enabled
- Ensure `EMAIL_USER` and `TO_EMAIL` are set correctly
- Check backend logs for error messages

### CORS Errors
- Verify `FRONTEND_URL` in backend matches your Vercel domain
- Check that CORS middleware is configured correctly

### Build Errors
- Ensure all dependencies are installed
- Check Node.js version (v18+ recommended)
- Clear cache and redeploy

### Domain Not Pointing
- Wait longer for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check Vercel domain settings for errors

## Environment Variables Reference

### Backend (.env)
```
PORT=5000
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
TO_EMAIL=your-email@gmail.com
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.railway.app
```

## Cost Summary

- **Vercel (Frontend)**: Free (Hobby plan)
- **Railway (Backend)**: Free ($5 free credit/month, then ~$5/month)
- **Domain**: ~$10-15/year
- **Total**: ~$10-15/year after free credits

## Next Steps

After deployment:
1. Update README with your live URL
2. Add Lighthouse screenshot to portfolio
3. Add mobile screenshots to portfolio
4. Customize for client projects (see CUSTOMIZATION_GUIDE.md)
