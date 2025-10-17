# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build            # Build for production
npm start               # Start production server

# Quality
npm run lint            # Run ESLint

# Node Modules
npm install             # Install dependencies
npm install <package>   # Add new package
```

---

## 📂 Key Files to Edit

| File | Purpose | Edit To |
|------|---------|---------|
| `src/components/Hero.tsx` | Hero section | Update name, tagline, social links |
| `src/components/About.tsx` | About section | Update bio, stats, achievements |
| `src/components/Skills.tsx` | Skills showcase | Add/edit your tech stack |
| `src/components/Projects.tsx` | Projects grid | Add your project portfolio |
| `src/components/Startups.tsx` | Startups section | Update your ventures |
| `src/components/Contact.tsx` | Contact form | Update contact information |
| `tailwind.config.ts` | Styling | Change colors, fonts, theme |
| `src/app/layout.tsx` | Metadata | Update SEO information |

---

## 🎨 Quick Color Changes

### Teal Accent (Default)
```typescript
// In components: text-teal-400, bg-teal-500, border-teal-400/20
// Color: #14b8a6
```

### Change All Teal References
1. Find: `teal-` (in all files)
2. Replace with: `blue-` or `purple-` or `green-`
3. Update `tailwind.config.ts` color definitions

### Quick Color Codes
- **Teal**: #14b8a6
- **Blue**: #3b82f6
- **Purple**: #a855f7
- **Green**: #22c55e
- **Pink**: #ec4899

---

## 📝 Common Edits Checklist

- [ ] Change name in Hero section
- [ ] Update social media links
- [ ] Add your projects to Projects array
- [ ] Update skills categories
- [ ] Change contact email
- [ ] Update metadata in layout.tsx
- [ ] Customize about bio
- [ ] Add/edit startup ventures
- [ ] Update profile statistics
- [ ] Change accent color (if desired)

---

## 🎯 File Modification Order

1. **First Priority**
   - Hero section name & links
   - Social media URLs

2. **Second Priority**
   - Projects (main portfolio showcase)
   - Skills (tech stack)
   - About bio

3. **Third Priority**
   - Contact information
   - Startups section
   - Metadata

4. **Optional**
   - Color scheme
   - Fonts
   - Animations

---

## 📊 Statistics to Update

In `src/components/About.tsx`:
- Number of projects
- Number of clients
- Number of startups

In `src/components/Startups.tsx`:
- Funding raised
- Active customers
- Team members
- Years of experience

---

## 🔗 Important Links

| Resource | URL |
|----------|-----|
| Next.js Docs | https://nextjs.org/docs |
| Tailwind CSS | https://tailwindcss.com/docs |
| Framer Motion | https://www.framer.com/motion |
| React Docs | https://react.dev |
| TypeScript | https://www.typescriptlang.org |

---

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Projects showcase is complete
- [ ] Skills are accurately listed
- [ ] Contact information is correct
- [ ] Links are not broken
- [ ] Images optimized (if any)
- [ ] Built successfully (`npm run build`)
- [ ] Tested locally (`npm run dev`)
- [ ] No console errors
- [ ] Mobile responsive verified

---

## 🚀 Deployment Checklist

### Before Deploy
```bash
npm run build    # Ensure build succeeds
npm run lint     # Check for linting errors
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Environment Variables
- Create `.env.local` for local secrets
- Add to deployment platform settings
- Never commit `.env` files

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm install` then `npm run build` |
| Style not applied | Check Tailwind class names |
| Component not showing | Check import in page.tsx |
| Animation glitchy | Verify Framer Motion installed |
| TypeScript errors | Run `npm run lint` for details |

---

## 📱 Responsive Testing

Test on:
- [ ] Mobile (320px, 375px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px, 1440px)
- [ ] Extra wide (1920px)

Use browser DevTools:
- F12 → Toggle Device Toolbar (Ctrl+Shift+M)

---

## 💡 Pro Tips

1. **Git & Version Control**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Backup Before Major Changes**
   ```bash
   git branch backup/before-redesign
   ```

3. **Test Changes Locally First**
   ```bash
   npm run dev
   # Make changes
   # Test thoroughly
   # Then commit
   ```

4. **Keep Build Lean**
   - Optimize images
   - Remove unused components
   - Check bundle size: `npm install size-limit`

---

## 📞 Getting Help

### Documentation Files
- **README.md** - Full documentation
- **SETUP_GUIDE.md** - Getting started
- **BUILD_SUMMARY.md** - Project overview
- **CUSTOMIZATION_GUIDE.md** - Detailed examples

### Online Resources
- GitHub Issues for dependencies
- Next.js discussions
- Stack Overflow
- React Discord community

---

## 🎉 You're Ready!

Your portfolio is set up and ready to customize. Start with the Hero section, then move through the checklist above.

### Quick Start
```bash
cd g:\portfolio\portfolio
npm run dev
```

Open browser: http://localhost:3000

**Happy coding! 🚀**
