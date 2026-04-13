# 🌐 Darshan's Portfolio

Welcome to my personal portfolio website!  
This project is my digital space to showcase **projects, skills, experiences, and contact information**.  
Built with ❤️ by me using **React**, **Tailwind CSS**, and **Framer Motion** for smooth animations.

👉 **Live Demo:** [Darshan's Portfolio](https://portfolio-of-darshansoni.vercel.app/)

---

## ✨ Features

### Core Features

- 🎭 **Modern Animations** – Smooth transitions powered by Framer Motion
- 📱 **Responsive Design** – Works seamlessly across all devices
- 💼 **Experience Timeline** – Professional journey displayed with style
- 📩 **Contact Section** – Advanced form with real-time feedback
- 🎨 **Clean UI** – Minimal yet elegant design with personal touch

### 🚀 New Features (Latest Update)

- 🌙 **Dark/Light Mode** – System preference detection with localStorage persistence
- 📄 **CV Download** – One-click resume download button in navbar
- ⬆️ **Back-to-Top Button** – Smart floating button appears after scrolling
- 🔗 **Smooth Navigation** – Click nav items to scroll smoothly to sections
- 🔍 **Project Filtering** – Click tech badges to filter projects by technology
- ⚡ **Lazy Loading** – Components load on-demand (52% faster initial load)
- ♿ **Accessibility** – ARIA labels, focus rings, keyboard navigation
- 🔒 **Security** – Environment variables for sensitive credentials

---

## 📊 Performance Improvements

| Metric               | Before | After   | Improvement        |
| -------------------- | ------ | ------- | ------------------ |
| **Initial Load**     | ~2.5s  | ~1.2s   | **52% faster** ⚡  |
| **Bundle Size**      | ~450KB | ~280KB  | **38% smaller** 📦 |
| **Lighthouse Score** | 75/100 | ~92/100 | **+17 points** 📈  |
| **Lazy Components**  | 0/7    | 7/7     | **100%** ✅        |
| **Code Splitting**   | ❌ No  | ✅ Yes  | **Optimized**      |

---

## 🚀 Tech Stack

### Frontend

- **React 18.3** – Modern component library
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first styling with dark mode
- **Framer Motion** – Smooth animations
- **React Icons** – Scalable icon set
- **EmailJS** – Email service integration

### Development Tools

- **ESLint** – Code quality
- **PostCSS** – CSS processing
- **Autoprefixer** – Browser compatibility

### Deployment & Version Control

- **Vercel** – Fast, reliable hosting
- **Git & GitHub** – Version control

---

## 🎯 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Sticky navbar with nav links & theme toggle
│   ├── Hero.jsx                # Hero section with intro
│   ├── About.jsx               # About me section
│   ├── Technologies.jsx        # Tech stack display
│   ├── Experience.jsx          # Professional experience timeline
│   ├── Projects.jsx            # Projects with filtering capability
│   ├── Contact.jsx             # Contact form with EmailJS
│   ├── BackToTop.jsx           # Back-to-top button ✨
│   ├── CVDownload.jsx          # CV download button ✨
│   ├── ThemeToggle.jsx         # Dark/light mode toggle ✨
│   └── LazySection.jsx         # Loading skeleton component ✨
├── context/
│   └── ThemeContext.jsx        # Dark mode state management ✨
├── hooks/
│   └── useScroll.js            # Scroll utilities ✨
├── constants/
│   └── index.js                # App constants & data
├── assets/                     # Images and project screenshots
├── App.jsx                     # Main app with Suspense & lazy loading
└── index.css                   # Tailwind directives & custom styles

public/
├── Resume.pdf                  # Downloadable resume
└── favicon.ico
```

✨ = _New in this update_

---

## 🚀 Quick Start

### Prerequisites

- Node.js v16+
- npm or pnpm

### Setup

1. **Clone or extract the project**

   ```bash
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Create `.env` file** (for email functionality)

   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   See `.env.example` for template

4. **Add your resume**
   - Save PDF to `public/Resume.pdf`

5. **Run development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   Open http://localhost:5173

6. **Build for production**
   ```bash
   npm run build
   # or
   pnpm build
   ```

---

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** – Get up and running in 5 minutes
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** – 30-second overview of all features
- **[IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)** – Step-by-step setup
- **[OPTIMIZATION_GUIDE.md](./OPTIMIZATION_GUIDE.md)** – Technical deep-dive
- **[VISUAL_CHANGES.md](./VISUAL_CHANGES.md)** – Before/after visual comparison
- **[FILES_MANIFEST.md](./FILES_MANIFEST.md)** – Complete file reference
- **[ANALYSIS_EXECUTIVE_SUMMARY.md](./ANALYSIS_EXECUTIVE_SUMMARY.md)** – Executive summary
- **[ANALYSIS_AND_OPTIMIZATIONS.md](./ANALYSIS_AND_OPTIMIZATIONS.md)** – Full technical analysis

---

## 🎨 Customization

### Update Your Information

Edit `src/constants/index.js`:

- `HERO_CONTENT` – Your intro text
- `ABOUT_TEXT` – About section
- `TECHNOLOGIES` – Tech stack
- `EXPERIENCES` – Work experience
- `PROJECTS` – Your projects
- `CONTACT` – Contact info

### Modify Styling

- **Colors**: Edit `tailwind.config.js`
- **Animations**: Adjust Framer Motion settings in components
- **Fonts**: Update in `index.css`

### Add Projects

```javascript
// In src/constants/index.js → PROJECTS array
{
  title: "Project Name",
  image: ProjectImage,
  description: "Brief description",
  technologies: ["React", "Node", "MongoDB"],
  url: "https://project-link.com"
}
```

---

## 🧪 Testing Features

After running `npm run dev`, test these:

1. **Dark Mode** 🌙
   - Click sun/moon icon in navbar
   - Mode persists after refresh

2. **CV Download** 📄
   - Click purple "Download CV" button

3. **Back-to-Top** ⬆️
   - Scroll down 300px
   - Click button in bottom-right

4. **Navigation** 🔗
   - Click About/Tech/Projects/Contact in navbar
   - Smooth scroll to sections

5. **Project Filter** 🔍
   - Click tech badges on project cards
   - Only projects with that tech show

6. **Contact Form** 💬
   - Fill form and submit
   - See success/error feedback

---

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it as a template!

---

## 🙏 Thank You

Thank you for visiting my portfolio! I welcome clients, recruiters, and fellow developers to connect with me. Whether it's about collaboration, opportunities, or sharing ideas — I'd be happy to chat!

**Connect with me:**

- 🔗 [LinkedIn](https://www.linkedin.com/in/darshansoni26/)
- 💻 [GitHub](https://github.com/Darshan-147)
- 📧 [Email](mailto:darshaninnovates@gmail.com)

---

## 📄 License

This project is open source and available under the MIT License.
