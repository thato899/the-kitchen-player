import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Kitchen Player",
  description: "Catering, event cooking, equipment hire, and premium event service bookings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <Link className="brand" href="/">
              <strong>The Kitchen Player</strong>
              <span>Catering and event service</span>
            </Link>
            <nav className="nav" aria-label="Main navigation">
              <Link href="/gallery">Gallery</Link>
              <Link href="/book">Book</Link>
              <Link href="/admin">Admin</Link>
              <Link href="/login">Login</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
