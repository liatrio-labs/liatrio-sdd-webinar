"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (t: Theme) => void;
}>({ theme: "system", resolvedTheme: "light", setTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
      setResolvedTheme(stored);
    } else {
      setResolvedTheme(getSystemTheme());
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    function apply(t: Theme) {
      const resolved = t === "system" ? getSystemTheme() : t;
      root.classList.toggle("dark", resolved === "dark");
      setResolvedTheme(resolved);
    }

    apply(theme);

    if (theme === "system") {
      const mq = matchMedia("(prefers-color-scheme: dark)");
      const handler = () => apply("system");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme, mounted]);

  function setTheme(t: Theme) {
    setThemeState(t);
    if (t === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", t);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
