import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: 'Isikai Respawn | Noticias, Novedades y Humor',
  description: 'Tu portal a nuevos mundos.',
    keywords: ['anime', 'videojuegos', 'novedades','noticias','shonen','playstation','nintendo','xbox', 'one piece','dragon ball',
    'naruto','shonen jump'],
    openGraph: {
      type: 'website',
      title: `Isikai Respawn`,
      description: `Tu portal a nuevos mundos.`,
      images:['https://pixabay.com/es/images/download/pen_ash-snow-10476274_1920.jpg'],
    },
    whatsapp: {
        type: 'website',
        title: `Isikai Respawn`,
        description: `Tu portal a nuevos mundos.`,
        images:['https://pixabay.com/es/images/download/pen_ash-snow-10476274_1920.jpg'],
    },
    instagram: {
        type: 'website',
        title: `Isikai Respawn`,
        description: `Tu portal a nuevos mundos.`,
        images:['https://pixabay.com/es/images/download/pen_ash-snow-10476274_1920.jpg'],
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="es">
      <body>
      <nav className="navbar">
        <Link href="/" className="logo">Isekai Respawn</Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Inicio</Link>
          <Link href="/anime" className="nav-link">Anime</Link>
          <Link href="/videojuegos" className="nav-link">Videojuegos</Link>
          <Link href="/noticias" className="nav-link">Noticias</Link>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        © 2026 Isikai Respawn — "Tu portal a nuevos mundos"
      </footer>
      </body>
      </html>
  );
}
