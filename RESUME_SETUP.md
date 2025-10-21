# 📄 Resume Upload & Management Guide

## 🎯 Overview

Your portfolio now includes a dedicated **Resume & Documents** section where visitors can:
- View your professional summary
- Download multiple resume formats
- See your experience and certifications

---

## 📁 File Structure

```
public/
├── resume/
│   ├── Shivpujan_Kumar_Resume.pdf        ← Add your main resume (1-2 pages)
│   ├── Shivpujan_Kumar_CV.pdf            ← Add your full CV (2-3 pages)
│   └── Shivpujan_Kumar_Technical_Resume.pdf ← Add technical resume (1 page)
```

---

## 📝 Step-by-Step: How to Add Your Resumes

### Step 1: Prepare Your Resume Files
1. Create or update your resume in Word, Google Docs, or any editor
2. Export/Save as PDF format
3. Name the files exactly as shown:
   - `Shivpujan_Kumar_Resume.pdf`
   - `Shivpujan_Kumar_CV.pdf`
   - `Shivpujan_Kumar_Technical_Resume.pdf`

### Step 2: Upload to Portfolio
1. Navigate to: `g:\portfolio\portfolio\public\resume\`
2. Copy your PDF files into this folder
3. Make sure filenames match exactly (case-sensitive on some servers)

### Step 3: Test Locally
```bash
npm run dev
```
- Visit `http://localhost:3000`
- Scroll to "Resume & Documents" section
- Click download buttons to verify files work

### Step 4: Deploy
```bash
npm run build
npm start
```

---

## 📄 Customizing Resume Section

### Change Resume File Names

Edit `src/components/Resume.tsx` and update the `resumeFiles` array:

```typescript
const resumeFiles = [
  {
    title: 'Full Resume',
    description: 'Complete professional resume with full work history and achievements',
    fileSize: '250 KB',
    format: 'PDF',
    downloadUrl: '/resume/YOUR_FILENAME.pdf',  // ← Change this
  },
  // ... more files
]
```

### Add More Resume Formats

```typescript
const resumeFiles = [
  // ... existing files
  
  {
    title: 'Executive Summary',
    description: 'One-page executive overview of skills and achievements',
    fileSize: '150 KB',
    format: 'PDF',
    downloadUrl: '/resume/Shivpujan_Kumar_Executive_Summary.pdf',
  },
]
```

### Change Section Descriptions

Find this section in `src/components/Resume.tsx`:

```typescript
// Update the professional summary
<div>
  <h4 className="text-teal-400 font-semibold mb-2">Experience</h4>
  <p className="text-gray-300">
    5+ years of full-stack development experience...  // ← Edit this
  </p>
</div>
```

### Customize Statistics

Find the stats section and update:

```typescript
{[
  { label: 'Years Experience', value: '5+' },      // ← Change to your years
  { label: 'Projects Completed', value: '50+' },   // ← Change to your count
  { label: 'Technologies', value: '20+' },         // ← Update
  { label: 'Certifications', value: '5+' },        // ← Update
]
```

### Update Key Competencies

```typescript
{['Full-Stack Dev', 'Cloud Arch', 'AI/ML', 'DevOps', 'Leadership', 'Startups'].map(
  // Change these skills to match your expertise
)}
```

---

## 🎨 Styling Customization

### Change Button Color
Find the download button in `Resume.tsx`:

```typescript
className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900 font-semibold"
// Change 'teal' to: blue, purple, green, pink, etc.
```

### Modify Card Layout
```typescript
// Grid columns
className="grid md:grid-cols-3 gap-6 mb-12"
// Change 'md:grid-cols-3' to 'md:grid-cols-2' for 2 columns, etc.
```

---

## 📋 Different Resume Types Explained

### 1. **Full Resume** (Standard)
- **Purpose**: Most common format for job applications
- **Length**: 1-2 pages
- **Content**: 
  - Summary
  - Work experience (last 10 years)
  - Education
  - Key skills
  - Certifications
- **Use For**: General job applications

### 2. **Curriculum Vitae (CV)**
- **Purpose**: Comprehensive professional history
- **Length**: 2-3+ pages
- **Content**:
  - Everything from resume
  - Full publication list
  - Detailed project descriptions
  - Complete certifications
  - Awards and honors
- **Use For**: Academic positions, research roles

### 3. **Technical Resume**
- **Purpose**: Emphasize technical skills
- **Length**: 1 page
- **Content**:
  - Technical skills summary
  - Prominent technologies
  - Technical projects
  - Coding certifications
- **Use For**: Tech company interviews, developer roles

---

## 💡 Pro Tips

1. **File Size**: Keep PDFs under 5 MB for fast downloads
2. **Quality**: Use high-quality PDFs (300 DPI)
3. **Naming**: Use consistent naming convention
4. **Updates**: Update resumes when you have new achievements
5. **Version Control**: Keep old versions in a backup folder
6. **Test Downloads**: Always verify files download correctly

---

## 🔗 Resume URLs

Once deployed, your resume links will be:

```
https://yourportfolio.com/resume/Shivpujan_Kumar_Resume.pdf
https://yourportfolio.com/resume/Shivpujan_Kumar_CV.pdf
https://yourportfolio.com/resume/Shivpujan_Kumar_Technical_Resume.pdf
```

---

## 🆘 Troubleshooting

### Problem: Download button doesn't work
**Solution**: 
1. Check file exists in `public/resume/` folder
2. Verify filename matches exactly (including capitalization)
3. Ensure file is a valid PDF

### Problem: File size shows wrong
**Solution**: 
Update the `fileSize` in the `resumeFiles` array:
```typescript
fileSize: '250 KB',  // Update this to actual size
```

### Problem: Can't access on mobile
**Solution**:
1. PDFs work on mobile browsers
2. Some PDFs may open in browser instead of downloading
3. Add `download` attribute to link (already included)

---

## 📱 Mobile Optimization

The Resume section is fully responsive:
- ✅ Mobile: Single column layout
- ✅ Tablet: 2-3 columns
- ✅ Desktop: Full 3-column grid

---

## 📊 Monitoring Downloads

To track who downloads your resume:

### Option 1: Google Analytics (Recommended)
1. Add Google Analytics to your portfolio
2. Track file downloads as events
3. Monitor which resume format is most popular

### Option 2: Alternative Services
- Use bit.ly or similar shortener with tracking
- Create download landing pages
- Set up email capture before download

---

## ✅ Checklist Before Deploying

- [ ] Created 3 resume files (or however many you want)
- [ ] Files named correctly and placed in `public/resume/`
- [ ] Files are in PDF format
- [ ] Tested downloads locally
- [ ] Updated professional summary text
- [ ] Updated statistics to match your experience
- [ ] Updated key competencies with your skills
- [ ] Build succeeds: `npm run build`
- [ ] Tested on mobile and desktop
- [ ] Ready to deploy!

---

## 🚀 Next Steps

1. **Create Your Resumes** - Prepare your PDF files
2. **Upload to Portfolio** - Copy files to `public/resume/`
3. **Customize Text** - Update descriptions and stats
4. **Test Locally** - Run `npm run dev` and test
5. **Deploy** - Push to production
6. **Monitor** - Track downloads and engagement

---

**Your resume section is ready! Add your files and let potential clients and employers download them easily! 📥**
