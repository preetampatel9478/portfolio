# Shivpujan Kumar - Personal Portfolio

A modern, responsive single-page portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS** to showcase technical skills, projects, and entrepreneurial ventures.

## 🎨 Features

- **Modern Dark Theme** - Clean, professional design with teal accent colors
- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Animations** - Powered by Framer Motion and React Intersection Observer
- **Dynamic Content** - Component-based architecture for easy updates
- **SEO Optimized** - Built-in Next.js metadata and performance optimizations
- **Type Safe** - Full TypeScript support throughout the project

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Type Animation**: React Type Animation
- **Scroll Detection**: React Intersection Observer

## 📁 Project Structure

```
/src
├── app
│   ├── layout.tsx          # Root layout with Poppins font
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global Tailwind CSS imports
├── components
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Tech stack showcase
│   ├── Projects.tsx        # Featured projects grid
│   ├── Startups.tsx        # Entrepreneurial ventures
│   └── Contact.tsx         # Contact form and info

Configuration Files:
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/preetampatel9478/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

## 🏗️ Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📝 Component Overview

### **Navbar**
- Sticky navigation with smooth scroll links
- Mobile-responsive hamburger menu
- Quick access CTA button

### **Hero**
- Animated title and typed subtitle
- Dual CTA buttons for projects and contact
- Social media links (LinkedIn, GitHub, Twitter)

### **About**
- Personal introduction and background
- Statistics cards (projects, clients, startups)
- Visual element with rotating animations

### **Skills**
- Tech stack organized by categories (Languages, Frameworks, Databases, AI/ML)
- Interactive skill badges
- Deployment and tools section

### **Projects**
- Dynamic project cards with hover effects
- Project descriptions and technology tags
- Fully responsive grid layout

### **Startups**
- Entrepreneurial ventures timeline
- Status indicators (Active/In Development)
- Key metrics and achievements

### **Contact**
- Contact information cards
- Functional contact form
- Link to schedule a call

## 🎨 Customization

### Update Personal Information
- **Hero Section**: Edit `src/components/Hero.tsx` - Update name and social links
- **About Section**: Edit `src/components/About.tsx` - Update bio and stats
- **Projects**: Edit `src/components/Projects.tsx` - Modify `projectData` array
- **Skills**: Edit `src/components/Skills.tsx` - Update skill categories
- **Startups**: Edit `src/components/Startups.tsx` - Add your ventures
- **Contact**: Edit `src/components/Contact.tsx` - Update contact links

### Color Customization
Modify colors in `tailwind.config.ts`:
```typescript
colors: {
  teal: {
    400: '#14b8a6',  // Primary accent
    500: '#0d9488',
  },
  // ... other colors
}
```

### Font Customization
Change the font in `src/app/layout.tsx`:
```typescript
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy with optimal settings

### Deploy on Other Platforms

- **Netlify**: Requires `next export` (not recommended for App Router)
- **Docker**: Create a Dockerfile for containerized deployment
- **Traditional Server**: Use `npm run build` and `npm start`

## 📊 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind for minimal bundle
- Scroll-triggered animations for better performance

## 🔐 Environment Variables

Create a `.env.local` file if needed:
```bash
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact & Support

- **Email**: hello@shivpujan.dev
- **LinkedIn**: [linkedin.com/in/shivpujan](https://linkedin.com/in/shivpujan)
- **GitHub**: [github.com/shivpujan](https://github.com/shivpujan)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
