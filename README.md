# Agency.AI - Next.js

This is a Next.js application converted from the original React/Vite project.

## Features

- **Modern UI**: Beautiful and responsive design with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Working contact form integration with Web3Forms
- **Toast Notifications**: User feedback with React Hot Toast
- **Custom Cursor**: Interactive custom cursor effects

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
agency.ai-next.js/
├── components/          # React components
├── pages/              # Next.js pages
├── public/             # Static assets (images, icons, etc.)
├── styles/             # CSS styles
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Technologies Used

- **Next.js** - React framework for production
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Hot Toast** - Toast notifications
- **EmailJS/Web3Forms** - Contact form handling

## Deployment

The app can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

## Migration from React/Vite

This project was migrated from a React/Vite application to Next.js with the following changes:

1. Converted from `.jsx` to `.js` files
2. Updated import paths for assets (now in `/public` folder)
3. Implemented Next.js page structure with `_app.js`
4. Configured Tailwind CSS for Next.js
5. Updated animations from `motion/react` to `framer-motion`
6. Added Next.js optimizations and configurations
# agency.ai
