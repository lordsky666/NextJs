'use client';

import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const galleryImages = [
  { src: "/Foto/gal1.jpg", alt: "Cupa Moldovei", title: "Cupa Moldovei", label: "Cel mai prestigios campionat", className: "tall" },
  { src: "/Foto/gal6.jpg", alt: "Alexandru Grumeza", title: "Grumeza Alexandru", label: "Președintele Federației", className: "wide" },
  { src: "/Foto/gal3.jpg", alt: "Grumeza Mihail", title: "Grumeza Mihail", label: "Head Referee", className: "" },
  { src: "/Foto/gal7.jpg", alt: "Atmosferă de sală", title: "Oleg Tudorean", label: "Campionul Absolut al Moldovei", className: "tall" },
  { src: "/Foto/gal8.jpg", alt: "Detaliu competiție", title: "Daniel Procopciuc", label: "Brațul de Aur", className: "tall" },
];

const championshipYears = [
  {
    year: "2026",
    src: "/Foto/gal2.jpg",
    alt: "Campionatul Moldovei 2026",
  },
  {
    year: "2025",
    src: "/Foto/nat_9s.jpg",
    alt: "Campionatul Moldovei 2025",
  },
  {
    year: "2024",
    src: "/Foto/nat_8.jpg",
    alt: "Campionatul Moldovei 2024",
  },
];

const contactItems = [
  { title: "Telefon", value: "+373 00 000 000" },
  { title: "Email", value: "federatie@example.md" },
  { title: "Adresă", value: "Chișinău, Republica Moldova" },
  { title: "Social", value: "@federatia.oficiala" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${inter.className} page-shell`}>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top" aria-label="Acasă">
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
            <a href="#hero">Acasă</a>
            <a href="#campioane">Campionate</a>
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
            alt="Imagine principală cu atleți"
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
              Pagina oficială a Federației Naționale de Armwrestling din Republica Moldova. Aici găsești competiții, rezultate și informații despre cei mai buni sportivi ai țării.
            </p>

            <div className="hero__actions">
              <a className="hero__cta hero__cta--primary" href="#galerie">
                Explorează galeria
              </a>
              <a className="hero__cta hero__cta--ghost" href="#contact">
                Contact oficial
              </a>
            </div>

            <div className="hero__stats">
              <div>
                <strong>Tradiții solide</strong>
                <span>10 ani de excelență</span>
              </div>
              <div>
                <strong>Generații noi</strong>
                <span>Viitorul puternic</span>
              </div>
              <div>
                <strong>Campioni</strong>
                <span>Perseverență</span>
              </div>
            </div>
          </div>
        </section>




        <section className="champions-section" id="campioanate">
          <div className="champions-panel">
            <div className="champions-panel__intro">
              <span className="champions-panel__kicker">Campionatele Moldovei</span>
              <h2>Secțiuni cu anii 2026-2024</h2>
            </div>

            <div className="championship-years-grid">
              {championshipYears.map((item) => (
                <article className="championship-year-card" key={item.year}>
                  <div className="championship-year-card__image-wrap">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="championship-year-card__image"
                      sizes="(max-width: 820px) 100vw, 33vw"
                    />
                  </div>
                  <h3>{item.year}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>


        

        <section className="gallery-section" id="galerie">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Galerie Vizuală</span>
            <h2>Cele mai bune momente</h2>
            <p>
              O colecție de imagini care surprind esența competiției, puterea și pasiunea sportivilor noștri.
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
            <h2>Date oficiale de contact</h2>
            <p>Pentru orice informații sau colaborări, ne puteți contacta folosind datele de mai jos.</p>
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
            <span className="site-footer__eyebrow">Federația Națională de Armwrestling</span>
            <p>
              Susținem performanța și promovăm cei mai puternici sportivi ai Republicii Moldova. Viitorul armwrestlingului este construit de noi.
              All rights reserved &copy; 2026
              A.R.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
