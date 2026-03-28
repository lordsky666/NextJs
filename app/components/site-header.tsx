'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isChampionshipPage = pathname.startsWith("/campionate");

  const navItems = [
    { href: "/#hero", label: "Acasă", active: pathname === "/" && !isChampionshipPage },
    { href: "/#campioanate", label: "Campioanate", active: isChampionshipPage },
    { href: "/#galerie", label: "Galerie", active: false },
    { href: "/#contact", label: "Contact", active: false },
    { href: "/#footer", label: "Info", active: false },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Acasă" onClick={() => setMenuOpen(false)}>
          <div className="brand__logo-wrap">
            <Image
              src="/Foto/image_1.png"
              alt="Logo Federația"
              width={88}
              height={88}
              className="brand__logo"
              priority
            />
          </div>
          <div className="brand__text">
            <span className="brand__eyebrow">Federația Națională Sportivă</span>
            <strong>Armwrestling Moldova</strong>
          </div>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Deschide meniul"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.active ? "site-nav__link site-nav__link--active" : "site-nav__link"}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
