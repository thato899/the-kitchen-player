import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/lib/gallery";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Catering, equipment and event cooking</p>
          <h1>The Kitchen Player</h1>
          <p>
            Memorable food service for private events, corporate functions,
            ceremonies, and celebrations. Browse our work freely, then create a
            verified profile when you are ready to book.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/book">
              Start a booking
            </Link>
            <Link className="button secondary" href="/gallery">
              View gallery
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-label="Catered table with plated food" />
      </section>

      <section className="section alt">
        <div className="section-head">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Built for full event support.</h2>
          </div>
          <p>
            The platform separates public browsing from secure booking and
            admin operations, making it easier to scale into integrations later.
          </p>
        </div>
        <div className="feature-list">
          {["Event cooking", "Menu planning", "Equipment hire", "Payment tracking"].map((item) => (
            <div className="feature" key={item}>
              <h3>{item}</h3>
              <p>Designed as a reusable module for future hospitality projects.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Recent work</p>
            <h2>Gallery preview</h2>
          </div>
          <Link className="button secondary" href="/gallery">
            Open gallery
          </Link>
        </div>
        <div className="grid">
          {galleryItems.map((item) => (
            <article className="card" key={item.title}>
              <Image alt="" height={675} src={item.imageUrl} width={900} />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.story}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
