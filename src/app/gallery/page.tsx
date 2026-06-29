import Image from "next/image";
import { galleryItems } from "@/lib/gallery";

export default function GalleryPage() {
  return (
    <main className="section">
      <div className="section-head">
        <div>
          <p className="eyebrow">Open gallery</p>
          <h1>Past work and event stories.</h1>
        </div>
        <p>
          Gallery content is public, while bookings, receipts, and payment
          history stay behind verified client and admin access.
        </p>
      </div>
      <div className="grid">
        {galleryItems.map((item) => (
          <article className="card" key={item.title}>
            <Image alt={item.title} height={675} src={item.imageUrl} width={900} />
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.story}</p>
              <strong>{item.priceTag}</strong>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
