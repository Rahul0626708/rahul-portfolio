import { useEffect, useState } from "react";

const LINKS = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "services", label: "Skill" },
  { href: "skills", label: "Portfolio" },
  { href: "contact", label: "Contact" },
];

function Header() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    );

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      <a href="home" className="logo">
        Portfolio
      </a>

      <div
        className={`bx ${menuOpen ? "bx-x" : "bx-menu"} menu-icon`}
        onClick={() => setMenuOpen((v) => !v)}
      ></div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        {LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            style={{ "--i": i + 1 }}
            className={active === link.href ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
