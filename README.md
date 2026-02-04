# UGC Creator Portfolio

A stunning, honest portfolio website for UGC creators built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Honest & Authentic**: No fake metrics or made-up brand logos
- **Cinematic Design**: Beautiful animations and smooth transitions
- **Fully Responsive**: Works perfectly on all devices
- **Modern Stack**: React + Vite for fast development and performance

## Tech Stack

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Google Fonts** (Playfair Display + Inter)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the subheading

2. **Philosophy Section** (`src/components/Philosophy.tsx`):
   - Update your unique angle/background
   - Customize your philosophy text

3. **Portfolio** (`src/components/Portfolio.tsx`):
   - Replace portfolio items with your actual work
   - Update video/thumbnail paths

4. **Skills & Setup** (`src/components/Skills.tsx`):
   - Update your experience and equipment

5. **Pricing** (`src/components/WorkingTogether.tsx`):
   - Adjust package prices and features

6. **Contact** (`src/components/Contact.tsx`):
   - Update social media links
   - Configure form submission (Formspree, Web3Forms, etc.)

7. **Footer** (`src/components/Footer.tsx`):
   - Update your name and location

### Add Your Media

Place your files in the `public` folder:
- Hero background video: `public/hero-background.mp4`
- Portfolio videos: `public/portfolio-1.mp4`, etc.
- Portfolio thumbnails: `public/portfolio-1.jpg`, etc.

## Color Palette

- **Cream**: `#FAF7F2`
- **Terracotta**: `#E07A5F`
- **Charcoal**: `#1A1A1A`
- **Warm Gray**: `#6B6B6B`
- **Gold**: `#D4AF37` (accent only)

## Project Structure

```
src/
  components/
    Hero.tsx
    Philosophy.tsx
    Portfolio.tsx
    Skills.tsx
    WorkingTogether.tsx
    Contact.tsx
    Footer.tsx
  App.tsx
  main.tsx
  index.css
```

## License

Private and proprietary.
