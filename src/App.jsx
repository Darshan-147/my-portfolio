import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import LazySection from "./components/LazySection";
import BackToTop from "./components/BackToTop";

// Lazy load components for better performance
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Technologies = lazy(() => import("./components/Technologies"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden text-neutral-900 dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-transparent">
        <Navbar />
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#e0e7ff_80%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63f_80%)]"></div>
        </div>
        <div className="container mx-auto px-8 mt-32">
          <Suspense
            fallback={
              <div className="h-96 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
            }
          >
            <Hero />
          </Suspense>

          <Suspense
            fallback={
              <div className="h-96 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
            }
          >
            <About />
          </Suspense>

          <Suspense
            fallback={
              <div className="h-96 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
            }
          >
            <Technologies />
          </Suspense>

          <Suspense
            fallback={
              <div className="h-96 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-lg" />
            }
          >
            <Experience />
          </Suspense>

          <Suspense
            fallback={
              <div className="h-96 animate-pulse bg-neutral-800 rounded-lg" />
            }
          >
            <Projects />
          </Suspense>

          <Suspense
            fallback={
              <div className="h-96 animate-pulse bg-neutral-800 rounded-lg" />
            }
          >
            <Contact />
          </Suspense>

          <div className="text-center mt-16 mb-12 italic">
            Made with 💖 by Darshan
          </div>
        </div>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
