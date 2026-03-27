'use client';

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${montserrat.className} Page`}>
      <style jsx>{`
        .Top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          padding: 14px clamp(16px, 4vw, 40px);
          gap: 24px;
        }

        .Top img {
          width: clamp(72px, 10vw, 110px);
          height: auto;
          flex-shrink: 0;
        }

        .Top-menu {
          display: flex;
          gap: clamp(12px, 2vw, 24px);
          align-items: center;
          margin-left: auto;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 30px;
          height: 25px;
          flex-direction: column;
          justify-content: space-between;
          z-index: 10;
        }

        .hamburger span {
          display: block;
          height: 3px;
          background: black;
          border-radius: 2px;
        }

        @media (max-width: 900px) {
          .Top-menu {
            gap: 14px;
          }
        }

        @media (max-width: 700px) {
          .Top {
            flex-wrap: wrap;
            justify-content: flex-start;
          }

          .hamburger {
            display: flex;
            position: static;
            transform: none;
            margin-left: auto;
            order: 2;
          }

          .Top-menu {
            display: ${menuOpen ? "flex" : "none"};
            flex-direction: column;
            gap: 10px;
            width: 100%;
            margin-top: 10px;
            align-items: center;
            margin-left: 0;
            padding: 8px 0 10px;
            order: 3;
          }
        }
      `}</style>

      <div className="Top">
        <Image
          src="/Foto/image_1.png"
          alt="Logo Federației"
          width={100}
          height={100}
          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
          sizes="(max-width: 600px) 80px, 100px"
        />

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="Top-menu">
          <a href="#fedaratia">Federatia</a>
          <a href="#documente">Documente</a>
          <a href="#champions">Campionate</a>
          <a href="#news">Noutăți</a>
          <a href="#Rezultate">Rezultate</a>
        </div>
      </div>

      <div className="Main_Content">
        <div className="HeroImage">
          <Image
            src="/Foto/md_open.jpg"
            alt="Poza de background"
            width={1600}
            height={900}
            priority
          />
        </div>
      </div>

      <div className="Contacte">
        <a href="#nr">Numar de telefon</a>
        <a href="#posta">Posta electronica</a>
        <a href="#adr">Adresa</a>
        <a href="#insta">Pagina de instagram/Facebook</a>
      </div>
    </div>
  );
}
