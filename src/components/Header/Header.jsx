import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

const navLinks = ["Projects", "Skills", "Experience", "Contact"];
const CV_URL = "https://drive.google.com/uc?export=download&id=TU_FILE_ID_AQUI";

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

  const handleCVDownload = (e) => {
    e.preventDefault();
    window.open(CV_URL, "_blank", "noopener,noreferrer");
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
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="header__link"
            onClick={handleCVDownload}
          >
            CV
          </a>
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
