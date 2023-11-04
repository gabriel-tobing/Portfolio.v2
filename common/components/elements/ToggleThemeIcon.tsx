"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { BsCloudMoon, BsCloudSun } from "react-icons/bs";

import useHasMounted from "@/hooks/useHasMounted";

export default function ToggleThemeIcon() {
  const { setTheme, resolvedTheme } = useTheme();

  const mounted = useHasMounted();

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="bg-white dark:bg-neutral-800 p-2 rounded-xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onClick={toggleTheme}
      id="dark-mode-switche"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "light" ? <BsCloudSun /> : <BsCloudMoon />}
    </motion.button>
  );
}
