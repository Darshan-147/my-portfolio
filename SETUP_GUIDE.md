# 🚀 Complete Setup Guide

This guide will walk you through setting up the portfolio with all new features.

---

## ✅ Step 1: Prerequisites Check

Before starting, ensure you have:

```bash
# Check Node.js (must be v16+)
node --version

# Check npm (comes with Node)
npm --version

# Or use pnpm (faster alternative)
pnpm --version
```

If you need to install Node.js, download from [nodejs.org](https://nodejs.org/)

---

## ✅ Step 2: Installation

### Option A: Using npm

```bash
# Navigate to project
cd my-portfolio

# Install all dependencies
npm install

# This installs:
# - React 18.3
# - Vite (build tool)
# - Tailwind CSS
# - Framer Motion
# - React Icons
# - EmailJS (@emailjs/browser)
# - ESLint + other dev tools
```

### Option B: Using pnpm (faster)

```bash
cd my-portfolio
pnpm install
```

---

## ✅ Step 3: Environment Configuration

### Create `.env` file

1. Create new file: `.env` in project root
2. Add these variables:

```bash
VITE_EMAILJS_SERVICE_ID=service_oal8vrh
VITE_EMAILJS_TEMPLATE_ID=template_obua41r
VITE_EMAILJS_PUBLIC_KEY=0BDPM-bbM5R31OkEd
```

**⚠️ Important**: Never commit `.env` file to git

- `.gitignore` already includes it ✅

### Or use `.env.example`

```bash
# Copy example template
cp .env.example .env

# Then edit .env with your EmailJS credentials
```

---

## ✅ Step 4: Resume Setup

### Add Your Resume

1. Get/create your resume as PDF
2. Save to: `public/Resume.pdf`
3. Rename download button text in `CVDownload.jsx` if needed

```javascript
// In CVDownload.jsx
cvLink.download = "Your-Name_Resume.pdf";
```

---

## ✅ Step 5: Development Server

### Start Local Server

```bash
npm run dev
# or
pnpm dev
```

**Output:**

```
  VITE v5.0.0  ready in 450 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

Open browser: http://localhost:5173

---

## ✅ Step 6: Test All Features

### 🌙 Dark Mode

```
1. Look for sun/moon icon in navbar (top right)
2. Click it
3. Page switches to dark mode
4. Refresh page - mode is remembered!
```

**What's happening**:

- ThemeContext manages state
- localStorage saves preference
- System preference detected on first visit

### 📄 CV Download

```
1. Click purple "Download CV" button in navbar
2. Check your Downloads folder
3. File: Darshan-Soni_Resume.pdf
```

### ⬆️ Back-to-Top Button

```
1. Scroll down the page ~300px
2. See purple button appear in bottom-right
3. Click it - smooth scroll back up
4. Button disappears at top
```

### 🔗 Navigation

```
1. Click "About" in navbar → scrolls to About section
2. Click "Tech" → scrolls to Technologies
3. Click "Projects" → scrolls to Projects
4. Click "Contact" → scrolls to Contact form
5. Click logo → back to top
```

### 🔍 Project Filtering

```
1. Scroll to Projects section
2. Click "All Projects" button (purple) → shows all
3. Click "React" badge → shows only React projects
4. Click tech badge on project card → filters by that tech
5. Auto-hides projects without selected tech
```

### 💬 Contact Form

**Successful submission**:

```
1. Fill Name, Email, Message
2. Click "Send Message"
3. See spinning icon while sending
4. Green ✅ message appears
5. Form resets
6. Message auto-disappears after 5s
```

**Error handling**:

```
1. Form submits with invalid EmailJS config
2. Red ❌ error message appears
3. User can try again
4. Error auto-disappears after 5s
```

---

## ✅ Step 7: Verify Console (No Errors)

Open browser DevTools:

- **Windows/Linux**: `Ctrl + Shift + I` or `F12`
- **Mac**: `Cmd + Option + I`

Check Console tab:

- Should see no red errors
- May see warnings (OK)
- May see info messages (OK)

---

## ✅ Step 8: Build for Production

### Create Optimized Build

```bash
npm run build
# or
pnpm build
```

**Output:**

```
dist/
├── index.html
├── assets/
│   ├── index-xyz.js      (main bundle ~150KB)
│   ├── react-modules-abc.js (React chunk)
│   ├── framer-def.js     (Framer Motion chunk)
│   └── icons-ghi.js      (Icons chunk)
└── Resume.pdf
```

### Preview Build Locally

```bash
npm run preview
```

Opens production build at http://localhost:4173

---

## ✅ Step 9: Deployment Options

### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# 1. Login to Vercel
# 2. Select "my-portfolio" project
# 3. Select root directory: . (current)
# 4. Build command: npm run build
# 5. Output directory: dist
```

Your site is live! 🎉

### Option B: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Select your repo
5. Set build: `npm run build`
6. Set publish: `dist`
7. Deploy!

### Option C: GitHub Pages

```bash
# Add to package.json
"homepage": "https://username.github.io/my-portfolio"

# Deploy
npm run build
# Push dist folder to gh-pages branch
```

---

## ✅ Step 10: Customize Content

### Edit Your Information

File: `src/constants/index.js`

```javascript
// Update these constants:

export const HERO_CONTENT = "Your intro text here";

export const ABOUT_TEXT = "About yourself here";

export const TECHNOLOGIES = [
  // Your tech stack
];

export const EXPERIENCES = [
  // Your experience history
];

export const PROJECTS = [
  // Your projects
];

export const CONTACT = {
  phone_number: "+91 your-number",
  email: "your-email@example.com",
};
```

### Edit Images

Replace these files:

- `src/assets/images/darshanSoni_logo.png` – Your logo
- `src/assets/images/about.jpg` – Your photo
- `src/assets/images/profile-pic.png` – Profile picture
- `src/assets/projects/*.png` – Project screenshots

---

## ✅ Step 11: Customize Styling

### Change Colors

File: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Change Theme

File: `src/context/ThemeContext.jsx`

Modify color classes for dark/light mode

---

## ✅ Step 12: Enable All Form Fields

### For Production

Make sure `.env` has valid EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=your_real_service_id
VITE_EMAILJS_TEMPLATE_ID=your_real_template_id
VITE_EMAILJS_PUBLIC_KEY=your_real_public_key
```

Get these from [EmailJS Dashboard](https://dashboard.emailjs.com/)

---

## 🎯 Common Troubleshooting

### Issue: "npm: command not found"

**Solution**: Install Node.js from nodejs.org

### Issue: "Module not found"

**Solution**: `npm install` (re-run after git pull)

### Issue: Port 5173 already in use

**Solution**: `npm run dev -- --port 3000`

### Issue: Dark mode not working

**Solution**: Clear localStorage: `localStorage.clear()`

### Issue: Contact form not sending emails

**Solution**: Check `.env` has valid EmailJS credentials

### Issue: Resume not downloading

**Solution**: Make sure `public/Resume.pdf` exists

### Issue: Images not loading

**Solution**: Check image paths in `src/constants/index.js`

---

## 🎉 You're All Set!

Your portfolio is ready to:

- ✅ Impress recruiters
- ✅ Showcase your work
- ✅ Collect inquiries
- ✅ Demonstrate modern web skills

**Next Steps**:

1. Deploy to Vercel/Netlify/GitHub Pages
2. Share with recruiters
3. Keep projects updated
4. Monitor contact form submissions

---

## 📞 Need Help?

Refer to:

- [QUICK_START.md](./QUICK_START.md) – 5-minute setup
- [OPTIMIZATION_GUIDE.md](./OPTIMIZATION_GUIDE.md) – Technical details
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) – Feature overview
