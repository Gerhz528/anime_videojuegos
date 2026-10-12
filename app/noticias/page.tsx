import Link from 'next/link';
import NoticiasClient from './NoticiasClient';
import styles from './noticias.module.css';

export const metadata = {
  title: 'Noticias de Anime y Videojuegos | Isekai Respawn',
  description:
    'Últimas noticias de anime y videojuegos sin anuncios. Estrenos, lanzamientos, eventos y novedades del mundo otaku y gamer.',
  keywords: [
    'noticias de anime',
    'noticias de videojuegos',
    'noticias de anime sin anuncios',
    'noticias de videojuegos sin anuncios',
    'estrenos de anime',
    'lanzamientos de videojuegos',
    'novedades gaming',
    'anime 2026',
  ],
  openGraph: {
    title: 'Noticias de Anime y Videojuegos | Isekai Respawn',
    description:
      'Estrenos, lanzamientos, eventos y novedades del mundo otaku y gamer.',
    type: 'website',
  },
};

export default function NoticiasPage() {
  return (
    <div className={styles.wrap}>
      
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.actual}>Noticias</span>
      </nav>

      {/* Hero compacto */}
      <header className={styles.hero}>
        <span className={styles.eyebrow}>
          <span aria-hidden="true"></span> ACTUALIDAD · SIN ANUNCIOS
        </span>
        <h1>
        <span>Noticias de anime y videojuegos</span>
        </h1>
        <p>
          Todo lo que pasa en el mundo del anime y los videojuegos, en un
          solo lugar. Sin anuncios, sin rodeos.
        </p>
      </header>

     
      <NoticiasClient />
    </div>
  );
}