import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const championshipDetails = {
  "2026": {
    title: "Campionatul Moldovei 2026",
    image: "/Foto/gal2.jpg",
    imageAlt: "Campionatul Moldovei 2026",
    period: "15-16 martie 2026",
    location: "Chișinău Arena, Chișinău",
    intro:
      "Ediția 2026 aduce pe aceeași scenă seniori, juniori și para-sportivi, într-un concurs dedicat performanței și reprezentării la nivel internațional.",
    highlights: [
      "Probe pentru brațul stâng și brațul drept.",
      "Categorii pentru juniori, seniori, masters și adaptive.",
      "Selecție pentru lotul național al Republicii Moldova.",
    ],
  },
  "2025": {
    title: "Campionatul Moldovei 2025",
    image: "/Foto/nat_9s.jpg",
    imageAlt: "Campionatul Moldovei 2025",
    period: "22-23 februarie 2025",
    location: "Complex Sportiv Municipal, Bălți",
    intro:
      "Competiția din 2025 a pus accent pe noua generație de sportivi și pe consolidarea calendarului competițional național.",
    highlights: [
      "Participare extinsă din cluburile regionale.",
      "Finale spectaculoase în categoriile open.",
      "Prezență oficială a arbitrilor federali și invitați speciali.",
    ],
  },
  "2024": {
    title: "Campionatul Moldovei 2024",
    image: "/Foto/nat_8.jpg",
    imageAlt: "Campionatul Moldovei 2024",
    period: "18-19 mai 2024",
    location: "Palatul Sporturilor, Chișinău",
    intro:
      "Sezonul 2024 a marcat revenirea unui format competițional amplu, cu accent pe organizare, vizibilitate și rezultate clare pentru clasamentul național.",
    highlights: [
      "Structură modernizată pentru desfășurarea meciurilor.",
      "Participare puternică din categoriile masculine și feminine.",
      "Promovarea celor mai buni sportivi spre competițiile europene.",
    ],
  },
} as const;

type ChampionshipYear = keyof typeof championshipDetails;

export function generateStaticParams() {
  return Object.keys(championshipDetails).map((year) => ({ year }));
}

export default async function ChampionshipDetail({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const championship = championshipDetails[year as ChampionshipYear];

  if (!championship) {
    notFound();
  }

  return (
    <main className="championship-detail-page">
      <section className="championship-detail-hero">
        <div className="championship-detail-hero__image-wrap">
          <Image
            src={championship.image}
            alt={championship.imageAlt}
            fill
            priority
            className="championship-detail-hero__image"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div className="championship-detail-hero__content">
          <span className="championship-detail-hero__eyebrow">Detalii Campionat</span>
          <h1>{championship.title}</h1>
          <p>{championship.intro}</p>

          <div className="championship-detail-meta">
            <article>
              <span>Perioadă</span>
              <strong>{championship.period}</strong>
            </article>
            <article>
              <span>Locație</span>
              <strong>{championship.location}</strong>
            </article>
          </div>

          <Link href="/#campioanate" className="championship-detail-back">
            Înapoi la campionate
          </Link>
        </div>
      </section>

      <section className="championship-detail-content">
        <div className="championship-detail-card">
          <span className="championship-detail-card__eyebrow">Informații</span>
          <h2>Ce găsești la această ediție</h2>
          <ul>
            {championship.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
