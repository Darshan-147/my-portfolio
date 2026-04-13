import { useEffect, useState } from "react";

const NAVBAR_OFFSET = 80;

const getNavbarOffset = () =>
  document.querySelector("nav")?.offsetHeight ?? NAVBAR_OFFSET;

const getBaseUrl = () => `${window.location.pathname}${window.location.search}`;

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(() => window.scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
};

export const scrollToTop = () => {
  if (window.location.hash) {
    window.history.replaceState(null, "", getBaseUrl());
  }

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const targetTop =
    element.getBoundingClientRect().top + window.scrollY - getNavbarOffset();

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: "smooth",
  });
};
