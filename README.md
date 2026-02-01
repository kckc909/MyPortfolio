# 💼 Portfolio - Chu Đức Minh

A modern, cyberpunk-themed portfolio website showcasing my journey as a Full-stack Developer.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff0055?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Cyberpunk Design** - Dark theme with neon cyan/violet accents and glassmorphism
- ⚡ **Blazing Fast** - Built with Next.js 15 and optimized for performance
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 🎭 **Smooth Animations** - Eye-catching transitions powered by Framer Motion
- 🔍 **SEO Optimized** - Meta tags, semantic HTML, and optimal structure
- 🎯 **Interactive UI** - Hover effects, smooth scrolling, and dynamic components

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library

### Icons & Assets
- **React Icons** - Professional icon library (Font Awesome, Simple Icons, Heroicons)
- **Simple Icons CDN** - Tech stack logos
- **Devicon CDN** - Additional tech icons

### Deployment
- **Vercel** - Optimized hosting for Next.js

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kckc909/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
Portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About me section
│   ├── Projects.tsx         # Projects showcase
│   ├── TechStack.tsx        # Tech stack grid
│   ├── Contact.tsx          # Contact section
│   └── Navigation.tsx       # Navigation bar
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Customization

### Personal Information

**Contact Details** (`components/Contact.tsx`)
```typescript
const email = "your-email@gmail.com";
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  // ...
];
```

**Projects** (`components/Projects.tsx`)
```typescript
const projects: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    // ...
  },
];
```

**Tech Stack** (`components/TechStack.tsx`)
```typescript
const techStack: TechItem[] = [
  { name: 'React', slug: 'react', color: '61DAFB', url: 'https://react.dev' },
  // ...
];
```

### Theme Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'neon-cyan': '#00ffff',      // Primary accent
  'neon-violet': '#b794f4',    // Secondary accent
  'cyber-dark': '#0a0e27',     // Background
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kckc909/portfolio)

## � Preview

Visit the live site: [Your Portfolio URL]

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- **Email:** chuducminh253261@gmail.com
- **GitHub:** [@kckc909](https://github.com/kckc909)
- **LinkedIn:** [kckc909](https://www.linkedin.com/in/kckc909/)
- **Facebook:** [minh.chu.612600](https://www.facebook.com/minh.chu.612600)
- **Zalo:** 0934.206.983

## 💡 Acknowledgments

- Design inspiration from cyberpunk aesthetics
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

<div align="center">
  <p>Made with ❤️ by Chu Đức Minh</p>
  <p>Powered by Next.js, Tailwind CSS & Framer Motion</p>
</div>
