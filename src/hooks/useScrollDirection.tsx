const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

import { useState, useEffect } from "react";

const useScrollDirection = (
  initialDirection: "init" | "down" | "up",
  thresholdPixels: number = 0
) => {
  const [scrollDir, setScrollDir] = useState<"init" | "down" | "up">(
    initialDirection
  );

  useEffect(() => {
    const threshold = thresholdPixels;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        scrollY <= threshold ? "init" : scrollY > lastScrollY ? "down" : "up"
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir, thresholdPixels]);

  return scrollDir;
};

export default useScrollDirection;
