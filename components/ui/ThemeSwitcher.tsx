"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import IconButton from "./IconButton";
import { MoonStar, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton>
        <Sun />
      </IconButton>
    );
  }

  return (
    <IconButton handleOnClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="text-zinc-500" />
      ) : (
        <MoonStar className="text-zinc-700" />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
