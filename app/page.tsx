'use client';

import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const galleryImages = [
  { src: "/Foto/gal1.jpg", alt: "Campionat national", title: "Campionat National", label: "Elite Match Day", className: "tall" },
  { src: "/Foto/gal6.jpg", alt: "Atleti in competitie", title: "Atleti in competitie", label: "Power & Focus", className: "wide" },
  { src: "/Foto/gal3.jpg", alt: "Moment de premiere", title: "Moment de premiere", label: "Victory Frame", className: "" },
  { src: "/Foto/gal7.jpg", alt: "Atmosfera de sala", title: "Atmosfera de sala", label: "Arena Energy", className: "tall" },
  { src: "/Foto/gal5.jpg", alt: "Detaliu competitie", title: "Detaliu competitie", label: "Precision & Strength", className: "wide" },
];

const contactItems = [
  { title: "Telefon", value: "+373 00 000 000" },
  { title: "Email", value: "federatie@example.md" },
  { title: "Adresa", value: "Chisinau, Republica Moldova" },
  { title: "Social", value: "@federatia.oficiala" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${inter.className} page-shell`}>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top" aria-label="Acasa">
            <div className="brand__logo-wrap">
              <Image
                src="/Foto/image_1.png"
                alt="Logo Federatia"
                width={88}
                height={88}
                className="brand__logo"
                priority
              />
            </div>
            <div className="brand__text">
              <span className="brand__eyebrow">Federatia Nationala</span>
              <strong>Armwrestling Moldova</strong>
            </div>
          </a>

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
            <a href="#hero">Acasa</a>
            <a href="#galerie">Galerie</a>
            <a href="#contact">Contact</a>
            <a href="#footer">Info</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <Image
            src="/Foto/md_open.jpg"
            alt="Imagine principala cu atleti"
            fill
            priority
            className="hero__image"
            sizes="100vw"
          />
          <div className="hero__overlay" />

          <div className="hero__content">
            <div className="hero__badge">Moldova Open Cup 2</div>
            <h1>Putere pură. Dominanță absolută. Doar cei mai buni între cei mai buni.</h1>
            <p>
              Pagina oficiala a Federatiei Nationale de Armwrestling din Republica Moldova. Aici gasesti competitii, rezultate si informatii despre cei mai buni sportivi ai tarii.
            </p>

            <div className="hero__actions">
              <a className="hero__cta hero__cta--primary" href="#galerie">
                Exploreaza galeria
              </a>
              <a className="hero__cta hero__cta--ghost" href="#contact">
                Contact oficial
              </a>
            </div>

            <div className="hero__stats">
              <div>
                <strong>120+</strong>
                <span>Competitii si evenimente</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Imagine premium in orice format</span>
              </div>
              <div>
                <strong>Top Tier</strong>
                <span>Design clean, luxos si memorabil</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="galerie">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Galerie Vizuala</span>
            <h2>Un grid editorial mare, cinematic si perfect echilibrat.</h2>
            <p>
              Imagini prezentate intr-un layout tip masonry, cu hover fluid, overlay elegant
              si accent premium pentru o experienta vizuala de portofoliu.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <article
                className={`gallery-card ${image.className}`.trim()}
                key={`${image.src}-${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="gallery-card__image"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <div className="gallery-card__overlay">
                  <span>{image.label}</span>
                  <h3>{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Contact Oficial</span>
            <h2>O bara de contact premium, clara si usor de parcurs.</h2>
            <p>
              Datele importante sunt grupate in carduri curate, cu contrast puternic si
              accente cyan-violet pentru un look high-end coerent cu restul paginii.
            </p>
          </div>

          <div className="contact-grid">
            {contactItems.map((item) => (
              <article className="contact-card" key={item.title}>
                <span className="contact-card__title">{item.title}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="site-footer__inner">
          <div>
            <span className="site-footer__eyebrow">Federatia Nationala de Armwrestling</span>
            <p>Design premium cu directie vizuala moderna, memorabila si pregatita pentru orice ecran.</p>
          </div>
          <div className="site-footer__meta">
            <span>Republica Moldova</span>
            <span>High-fidelity homepage redesign</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
