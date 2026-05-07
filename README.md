# Business Landing Page with Contact Form API

A modern, responsive SaaS-style landing page built with React + Vite and a Node.js Express backend for handling contact form submissions with email functionality.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Scroll-triggered animations
- **React Hook Form** - Form validation and state management
- **React Icons** - Icon library
- **Axios** - HTTP client for API calls

### Backend
- **Node.js + Express** - Server framework
- **Nodemailer** - Email sending via Gmail SMTP
- **express-validator** - Request validation
- **express-rate-limit** - Rate limiting middleware
- **cors** - Cross-origin resource sharing
- **helmet** - Security headers
- **dotenv** - Environment variable management

## 📁 Project Structure

```
landing-page/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/    # Navbar, Footer
│   │   │   ├── sections/  # Hero, Features, Pricing, etc.
│   │   │   └── ui/        # Button, AnimatedSection, WhatsAppButton
│   │   ├── hooks/         # useContactForm
│   │   ├── utils/         # api.js
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Tailwind imports
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
└── server/                # Backend Express API
    ├── middleware/        # rateLimiter, validate
    ├── routes/            # contact.routes.js
    ├── services/          # email.service.js
    ├── app.js             # Express app setup
    ├── server.js          # Server entry point
    ├── package.json
    └── .env.example
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Gmail account with App Password (for email functionality)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd landing-page
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```bash
cp .env.example .env
```

Configure your `.env` file:
```env
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
TO_EMAIL=your-email@gmail.com

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

**Important: Generate Gmail App Password**
1. Go to Google Account settings
2. Enable 2-factor authentication
3. Go to Security → App Passwords
4. Create a new app password
5. Use this password in `EMAIL_PASS`

Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:
```bash
cp .env.example .env
```

Configure your `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend dev server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📦 Deployment

For complete deployment instructions with domain setup, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

### Quick Start

### Frontend (Vercel)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Set the root directory to `client`
4. Add environment variable: `VITE_API_URL` (your deployed backend URL)
5. Deploy

### Backend (Railway/Render)

#### Option 1: Railway
1. Go to [Railway](https://railway.app)
2. Create a new project from GitHub
3. Set the root directory to `server`
4. Add environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `TO_EMAIL`
   - `FRONTEND_URL` (your deployed frontend URL)
5. Deploy

#### Option 2: Render
1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set build command: `npm install`
5. Set start command: `node server.js`
6. Add environment variables
7. Deploy

### Live URL
**[Your Live URL Here](https://yourdomain.com)** - Update with your deployed URL

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Smooth Animations**: Framer Motion scroll-triggered fade-up effects
- **Contact Form**: Server-side validation with email notifications
- **Rate Limiting**: 5 requests per hour per IP to prevent spam
- **Auto-reply**: Automatic email confirmation to form submitters
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **SEO Optimized**: Meta tags, semantic HTML, and Lighthouse-friendly
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Security**: Helmet.js headers, CORS configuration, input sanitization

## 🎨 Customization

### Brand Colors

Edit `client/tailwind.config.js` to customize brand colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### Content

Update content in the section components:
- `Hero.jsx` - Headline, subheading, CTAs
- `Features.jsx` - Feature cards
- `Testimonials.jsx` - Customer quotes
- `Pricing.jsx` - Pricing plans
- `FAQ.jsx` - Frequently asked questions

## 🧪 Testing

### Test Contact Form Locally
1. Start both frontend and backend servers
2. Fill out the contact form on the landing page
3. Check your email for both the notification and auto-reply

### Test Rate Limiting
Submit the form more than 5 times within an hour to see the rate limit error message.

## 📊 Lighthouse Scores

This project is optimized for:
- **Performance**: ≥90
- **Accessibility**: ≥85
- **SEO**: 100

Run Lighthouse in Chrome DevTools to verify scores.

## 🔧 Troubleshooting

### Email Not Sending
- Verify Gmail App Password is correct
- Check if 2-factor authentication is enabled
- Ensure `EMAIL_USER` and `TO_EMAIL` are set correctly
- Check server logs for error messages

### CORS Errors
- Verify `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check that CORS middleware is configured correctly

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (v18+ recommended)

## 📝 License
## 📚 Additional Documentation

- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Complete deployment instructions with domain setup
- [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - How to customize for different clients

## 🎯 Lighthouse Scores

This project is optimized for:
- **Performance**: ≥90
- **Accessibility**: ≥90
- **SEO**: 100

Run Lighthouse in Chrome DevTools to verify scores.


ISC

## 🤝 Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using React, Node.js, and modern web technologies.
