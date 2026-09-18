"use client";

import { useEffect } from "react";

export function ForceDarkTheme() {
  useEffect(() => {
    const previous = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "dark");
    return () => {
      if (previous) {
        document.documentElement.setAttribute("data-theme", previous);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    };
  }, []);

  return null;
}
