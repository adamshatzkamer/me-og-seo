"use client";

import { useTheme } from "@/app/lib/use-theme";

const THEME_LABELS = { dark: "escuro", light: "claro" } as const;

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Mudar para o tema claro" : "Mudar para o tema escuro"
      }
      className="border border-(--border) px-3.5 py-2 font-mono text-xs text-(--text) transition-colors hover:border-(--accent) hover:text-(--accent) active:border-(--accent) active:text-(--accent)"
    >
      [{THEME_LABELS[theme]}]
    </button>
  );
}
