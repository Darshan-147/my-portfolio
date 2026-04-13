import { Suspense } from "react";
import { motion } from "framer-motion";

// Loading skeleton component
const LoadingSkeleton = () => (
  <motion.div
    className="w-full h-96 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse"
    initial={{ opacity: 0.5 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, repeat: Infinity }}
  />
);

// Wrapper component for lazy loading
export const LazySection = ({ children, fallback = <LoadingSkeleton /> }) => (
  <Suspense fallback={fallback}>{children}</Suspense>
);

export default LazySection;
