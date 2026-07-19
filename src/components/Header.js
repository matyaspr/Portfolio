import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const navLinks = ["Projects", "Skills", "Experience", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <span className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {"<dev>"}
        </span>
        <nav className="header__nav">
          {navLinks.map((link) => (
            <button
              key={link}
              className={`header__link ${active === link ? "header__link--active" : ""}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
          <button
            className="header__theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  );
}
