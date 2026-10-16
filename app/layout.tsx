import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
/*
* Esto es lo que tendrá cada pagina que hagan por defecto, en cada pagina individual pueden agregarle más si es necesario
* Todo esto se importa automaticamente a cada HTML que hagan
* */
// app/layout.tsx
export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),

    title: {
        default: 'Isekai Respawn | Noticias, Novedades y Memes',
        template: '%s | Isekai Respawn',
    },
    description: 'Tu portal a nuevos mundos. Noticias, novedades y memes sobre anime y videojuegos.',

    keywords: [
        'anime',
        'videojuegos',
        'novedades',
        'noticias',
        'shonen',
        'playstation 5',
        'nintendo',
        'xbox series',
        'noticias de anime sin anuncios',
        'noticias de videojuegos sin anuncios',
        'memes graciosos de anime',
        'memes de videojuegos',
    ],

    openGraph: {
        type: 'website',
        title: 'Isekai Respawn',
        description: 'Tu portal a nuevos mundos.',
        url: '/',                                  // ← relativo, se resuelve con metadataBase
        siteName: 'Isekai Respawn',
        locale: 'es_SV',
        images: [
            {
                url: '/imagen_principal_inde.jpg',     // ← relativo
                width: 1200,
                height: 630,
                alt: 'Imagen de Isekai Respawn',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Isekai Respawn',
        description: 'Tu portal a nuevos mundos.',
        images: ['/imagen_principal_inde.jpg'],    // ← relativo
    },
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
            <Link href="/contacto" className="nav-link">Contacto</Link>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        © 2026 Isikai Respawn — Tu portal a nuevos mundos
      </footer>
      </body>
      </html>
  );
}
