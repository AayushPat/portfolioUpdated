# Aayush Patel's Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, interactive 3D elements, and a clean, professional design.

##  Features

- **Modern Tech Stack**: React 19, Vite 7, Tailwind CSS 4
- **Performance Optimized**: Code splitting, lazy loading, optimized images
- **Accessible**: ARIA labels, keyboard navigation, focus management
- **SEO Friendly**: Comprehensive meta tags, Open Graph, Twitter cards
- **Error Handling**: Error boundaries for graceful error handling
- **Responsive Design**: Mobile-first approach with breakpoint-based scaling
- **3D Graphics**: Three.js integration for interactive visualizations
- **Smooth Animations**: GSAP animations and scroll triggers

##  Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolioUpdated
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your Web3Forms access key
# Get your key from https://web3forms.com
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

##  Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **GSAP** - Animation library
- **Three.js** - 3D graphics
- **Web3Forms** - Form submission service
- **Vercel Analytics** - Analytics and performance monitoring

##  Project Structure

```
portfolioUpdated/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── index.html       # HTML template
└── vite.config.js   # Vite configuration
```

##  Key Components

- **NavBar** - Navigation with accessibility features
- **ErrorBoundary** - Error handling component
- **LazyImage** - Performance-optimized image component
- **ContactForm** - Contact form with validation
- **ScrollToTop** - Auto-scroll on route changes

## 🔧 Configuration

### Environment Variables

- `VITE_WEB3FORMS_ACCESS_KEY` - Web3Forms API access key (optional, has fallback)

### Build Configuration

The project uses Vite with optimized chunk splitting for better caching:
- React vendor chunks
- Three.js vendor chunks
- GSAP vendor chunks
- UI library chunks

##  Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

##  Accessibility

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader support
- Skip to content link

##  Performance Optimizations

- Code splitting with React.lazy
- Image lazy loading
- Throttled resize handlers
- Optimized bundle chunks
- Preconnect for external resources

##  License

This project is private and personal.

##  Author

**Aayush Patel**
- Computer Science Major at James Madison University
- GitHub: [@AayushPat](https://github.com/AayushPat)
- LinkedIn: [Aayush Patel](https://www.linkedin.com/in/aayush-patel-zegoat)

---

Built with ❤️ using React and Vite
