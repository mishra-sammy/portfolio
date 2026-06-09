# 🚀 Samiksha Mishra — Developer Portfolio

A premium, modern, recruiter-focused developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0066?style=flat-square)

## ✨ Features

- 🎨 **Premium Design** — Apple/Stripe-inspired glassmorphism UI
- 🌓 **Dark/Light Theme** — Smooth animated theme switching with localStorage persistence
- 🎬 **Rich Animations** — Framer Motion scroll reveals, typewriter, floating icons, parallax
- 📱 **Fully Responsive** — Mobile-first design supporting 320px to ultra-wide screens
- 📬 **Working Contact Form** — Backend API with MongoDB storage and validation
- ⚡ **Optimized Performance** — Lazy loading, code splitting, optimized assets
- 🔍 **SEO Ready** — Meta tags, semantic HTML, Open Graph tags

## 🏗️ Tech Stack

### Frontend
- React 19 + Vite 6
- Tailwind CSS 4
- Framer Motion 12
- React Icons
- React Router DOM

### Backend
- Node.js + Express 5
- MongoDB Atlas + Mongoose 8
- express-validator

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- MongoDB Atlas account (for contact form)

### Frontend Setup

```bash
cd portfolio-frontend
npm install
npm run dev
```

The frontend will start at `http://localhost:5173`.

### Backend Setup

```bash
cd portfolio-backend
cp .env.example .env
# Edit .env with your MongoDB connection string
npm install
npm run dev
```

The backend will start at `http://localhost:5000`.

## 📝 Customization

All profile data is centralized in `src/utils/data.js`. Search for `TODO` comments to find all items that need updating:

- **GitHub URL** — Add your GitHub profile link
- **LeetCode Stats** — Update problem-solving statistics
- **Resume PDF** — Place your resume in `public/resume.pdf`
- **Profile Photo** — Update `avatarUrl` in personalInfo
- **Project Links** — Add GitHub repos and live demo URLs
- **Certification Links** — Add verification URLs
- **CGPA/Percentage** — Add academic scores

## 🌐 Deployment

### Frontend → Vercel

```bash
cd portfolio-frontend
npm run build
# Deploy the `dist` folder to Vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Backend → Render/Railway

1. Push `portfolio-backend` to a GitHub repo
2. Connect to [Render](https://render.com) or [Railway](https://railway.app)
3. Set environment variables:
   - `MONGODB_URI` — Your MongoDB Atlas connection string
   - `PORT` — 5000
   - `FRONTEND_URL` — Your Vercel frontend URL

### Environment Variables

#### Frontend (`.env`)
```
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

#### Backend (`.env`)
```
MONGODB_URI=mongodb+srv://...
PORT=5000
FRONTEND_URL=https://your-portfolio.vercel.app
```

## 📁 Project Structure

```
samiksha-portfolio/
├── portfolio-frontend/       # React frontend
│   ├── src/
│   │   ├── animations/       # Framer Motion variants
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # Theme context
│   │   ├── hooks/            # Custom React hooks
│   │   ├── sections/         # Page sections
│   │   ├── services/         # API services
│   │   └── utils/            # Data & utilities
│   └── public/               # Static assets
├── portfolio-backend/        # Express backend
│   ├── config/               # Database config
│   ├── controllers/          # Route handlers
│   ├── middleware/            # Validation
│   ├── models/               # Mongoose models
│   └── routes/               # API routes
└── README.md
```

## 📄 License

© 2025 Samiksha Mishra. All rights reserved.
