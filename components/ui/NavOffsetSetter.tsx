"use client";
import { useEffect } from "react";

export default function NavOffsetSetter() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const setOffset = () => {
      const nav = document.getElementById("floating-nav");
      if (nav) {
        const height = nav.offsetHeight;
        // add a small buffer in case of shadows/padding
        document.documentElement.style.setProperty("--nav-offset", `${height + 8}px`);
      } else {
        // fallback default
        document.documentElement.style.setProperty("--nav-offset", `6rem`);
      }
    };

    // initial set and after a small delay for fonts/images
    setOffset();
    const timeout = setTimeout(setOffset, 500);

    // update on resize
    window.addEventListener("resize", setOffset);

    // observe mutations in case navbar changes size
    let ro: MutationObserver | null = null;
    const navEl = document.getElementById("floating-nav");
    if (navEl) {
      ro = new MutationObserver(setOffset);
      ro.observe(navEl, { attributes: true, childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", setOffset);
      if (ro) ro.disconnect();
    };
  }, []);

  return null;
}
