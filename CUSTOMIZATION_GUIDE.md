# 💡 Customization Examples & Code Snippets

This guide provides practical examples for customizing your portfolio.

---

## 🎨 Color Customization

### Change Primary Accent Color

**File**: `tailwind.config.ts`

```typescript
// Current: Teal
colors: {
  teal: {
    400: '#14b8a6',
    500: '#0d9488',
    600: '#0f766e',
  },
}

// Alternative: Blue
colors: {
  blue: {
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
  },
}

// Alternative: Purple
colors: {
  purple: {
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
  },
}

// Alternative: Green
colors: {
  green: {
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
  },
}
```

### Dark Background Variations

```typescript
// Current: Slate (default)
bg-gray-900: '#0f172a',

// Alternative: True Black
bg-gray-950: '#030712',

// Alternative: Warm Dark
bg-slate-900: '#0f172a',

// Alternative: Cool Dark
bg-zinc-900: '#09090b',
```

---

## 👤 Update Hero Section

**File**: `src/components/Hero.tsx`

### Change Name
```typescript
// Current
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
  Shivpujan Kumar
</h1>

// Change to your name
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
  Your Name Here
</h1>
```

### Change Typing Animation Sequence
```typescript
// Current
sequence={[
  'Developer',
  2000,
  'Founder',
  2000,
  'Innovator',
  2000,
]}

// Change to your roles
sequence={[
  'Full-Stack Engineer',
  2000,
  'UI/UX Designer',
  2000,
  'Tech Lead',
  2000,
]}
```

### Update Social Links
```typescript
// LinkedIn
href="https://linkedin.com/in/your-username"

// GitHub
href="https://github.com/your-username"

// Twitter
href="https://twitter.com/your-handle"
```

### Customize Description
```typescript
// Current
<p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
  Building innovative solutions and scaling startups. Specializing in full-stack development, AI/ML, and entrepreneurial ventures.
</p>

// Your description
<p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
  Your custom description here...
</p>
```

---

## 🛠️ Update Projects

**File**: `src/components/Projects.tsx`

### Add a New Project
```typescript
const projectData: Project[] = [
  // ... existing projects
  
  {
    title: 'Your Project Name',
    description: 'Brief description of what the project does and its impact.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/your-username/project-name'
  },
]
```

### Edit Existing Project
```typescript
{
  title: 'AI Vision Analytics Platform',
  description: 'Your updated description here...',
  tags: ['Python', 'YOLOv8', 'FastAPI', 'React', 'PostgreSQL'],
  link: 'https://your-project-link.com'
}
```

### Full Project Example
```typescript
{
  title: 'E-Commerce Mobile App',
  description: 'Full-featured e-commerce app with payment integration, real-time inventory, and admin dashboard. 10K+ daily active users.',
  tags: ['React Native', 'Firebase', 'Stripe', 'Redux'],
  link: 'https://github.com/example/ecommerce-app'
}
```

---

## 🎯 Update Skills

**File**: `src/components/Skills.tsx`

### Add Skill Category
```typescript
const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C++'],
  },
  
  // Add new category
  {
    name: 'Cloud Platforms',
    skills: ['AWS', 'Google Cloud', 'Azure', 'Firebase', 'Vercel'],
  },
]
```

### Customize Skill Badges
```typescript
// Current
{
  name: 'Languages',
  skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C++'],
}

// Your skills
{
  name: 'Languages',
  skills: ['Rust', 'Go', 'Elixir', 'Kotlin', 'Swift'],
}
```

### Add Deployment Tools Section
```typescript
{
  label: 'CI/CD Tools',
  value: 'GitHub Actions, Jenkins, CircleCI, GitLab CI'
}
```

---

## 📱 Update About Section

**File**: `src/components/About.tsx`

### Change Bio
```typescript
// Current
<p className="text-gray-300 text-lg leading-relaxed">
  I'm a passionate developer and entrepreneur with a deep interest in building scalable applications...
</p>

// Your bio
<p className="text-gray-300 text-lg leading-relaxed">
  Your personalized bio here...
</p>
```

### Update Statistics
```typescript
// Current
<div className="grid grid-cols-3 gap-4 pt-6">
  <div className="bg-gray-700/50 rounded-lg p-4 text-center">
    <div className="text-3xl font-bold text-teal-400">50+</div>
    <div className="text-sm text-gray-400">Projects</div>
  </div>
  ...
</div>

// Change numbers
<div className="text-3xl font-bold text-teal-400">75+</div>
<div className="text-sm text-gray-400">Projects</div>
```

---

## 🚀 Update Startups

**File**: `src/components/Startups.tsx`

### Add New Startup
```typescript
const startupData: Startup[] = [
  // ... existing startups
  
  {
    name: 'Your Startup Name',
    description: 'Brief description of what your startup does.',
    status: 'Active', // or 'In Development'
    details: ['Market', 'Achievement 1', 'Achievement 2'],
  },
]
```

### Edit Existing Startup
```typescript
{
  name: 'DataFlow Analytics',
  description: 'Updated description of your AI analytics platform...',
  status: 'Active',
  details: ['B2B SaaS', 'Series B Funded', '100+ Enterprise Clients'],
}
```

### Change Status Indicator
```typescript
// Active (Green)
status: 'Active'

// In Development (Yellow)
status: 'In Development'

// Acquired
status: 'Acquired'
```

---

## 📧 Update Contact Section

**File**: `src/components/Contact.tsx`

### Change Contact Email
```typescript
{
  icon: '✉️',
  label: 'Email',
  value: 'your.email@example.com',
  link: 'mailto:your.email@example.com'
}
```

### Update Calendly Link
```typescript
// Current
href="https://calendly.com/shivpujan"

// Your calendar
href="https://calendly.com/your-username"
```

### Add WhatsApp Contact (Optional)
```typescript
{
  icon: '💬',
  label: 'WhatsApp',
  value: '+1 234-567-8900',
  link: 'https://wa.me/1234567890'
}
```

---

## 🎨 Update Navigation

**File**: `src/components/Navbar.tsx`

### Change Brand Logo Text
```typescript
// Current
<span className="text-lg font-bold text-teal-400 hidden sm:inline">Shivpujan</span>

// Your name
<span className="text-lg font-bold text-teal-400 hidden sm:inline">Your Name</span>
```

### Add New Navigation Link
```typescript
// Current links
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  // ... etc
]

// Add new link
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },  // New
  { label: 'Projects', href: '#projects' },
  // ... etc
]
```

---

## 🎨 Typography Customization

**File**: `tailwind.config.ts`

### Change Font Family
```typescript
// Current (Poppins)
fontFamily: {
  poppins: ['var(--font-poppins)', 'sans-serif'],
}

// Add additional fonts in layout.tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

// Use in tailwind
fontFamily: {
  inter: ['var(--font-inter)', 'sans-serif'],
  display: ['var(--font-playfair)', 'serif'],
}
```

### Change Font Sizes
```typescript
// Tailwind default sizes
text-xs    // 12px
text-sm    // 14px
text-base  // 16px
text-lg    // 18px
text-xl    // 20px
text-2xl   // 24px
text-3xl   // 30px
text-4xl   // 36px
text-5xl   // 48px
text-6xl   // 60px
text-7xl   // 72px

// Use in components
<h1 className="text-6xl sm:text-7xl font-bold">
```

---

## 🔧 Advanced Customization

### Add Custom CSS
**File**: `src/app/globals.css`

```css
/* Add custom gradient */
@keyframes custom-gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.custom-gradient {
  background-size: 200% 200%;
  animation: custom-gradient 3s ease infinite;
}
```

### Add New Component
```typescript
// Create: src/components/Blog.tsx

'use client'

import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-teal-400 mb-12">Latest Articles</h2>
        {/* Add blog content */}
      </div>
    </section>
  )
}

export default Blog
```

### Add Custom Animation
```typescript
import { motion } from 'framer-motion'

const customVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const MyComponent = () => (
  <motion.div variants={customVariants} initial="hidden" animate="visible">
    Your content
  </motion.div>
)
```

---

## 📊 Metadata Updates

**File**: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional tagline and description',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Your Name - Your Title',
    description: 'Your description',
  },
}
```

---

## 🚀 Ready to Deploy?

After customizing, deploy with:

```bash
# Build locally first
npm run build

# Deploy to Vercel
vercel deploy
```

---

**Happy Customizing! 🎉**
