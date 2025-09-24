import { useEffect, useState } from "react";
import { Button } from "primereact/button";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem("isDark") === "true";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("isDark", "true");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDark", "false");
    }
  }, [isDark]);

  return (
    <Button
      icon={isDark ? "pi pi-moon" : "pi pi-sun"}
      severity={isDark ? "secondary" : "warning"}
      tooltip={isDark ? "light mode" : "dark mode"}
      text
      onClick={() => setIsDark((prev: boolean) => !prev)}
    />
  );
};

export default ThemeToggle;
