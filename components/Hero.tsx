import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-visual">
        <Image
          src="/hero.jpg"
          alt="HUDUM Modern Modest Wear Collection"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="hero-copy">
        <div className="hero-eyebrow">THE FIRST DROP IS HERE</div>
        <h1 className="hero-title">Modest, but make it cool.</h1>
        <p className="hero-sub">
          Western-inspired modest pieces designed for everyday life. Cut for
          coverage without losing modern shape.
        </p>
        <a href="#drop" className="hero-cta">
          Shop the drop
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        </a>
      </div>
    </section>
  );
}
