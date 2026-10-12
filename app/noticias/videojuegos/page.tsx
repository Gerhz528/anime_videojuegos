import Link from 'next/link';
import NoticiasClient from '../NoticiasClient';
import styles from '../noticias.module.css';

export const metadata = {
  title: 'Noticias de Videojuegos | Isekai Respawn',
  description:
    'Lanzamientos, actualizaciones y eventos del mundo gamer. Sin anuncios.',
  keywords: [
    'noticias de videojuegos',
    'noticias de videojuegos sin anuncios',
    'lanzamientos de videojuegos',
    'novedades gaming',
  ],
  openGraph: {
    title: 'Noticias de Videojuegos | Isekai Respawn',
    description: 'Lanzamientos y eventos del mundo gamer.',
    type: 'website',
  },
};

export default function NoticiasVideojuegosPage() {
  return (
    <div className={styles.wrap}>
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>/</span>
        <Link href="/noticias">Noticias</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.actual}>Videojuegos</span>
      </nav>

      <header className={styles.hero}>
        <span className={styles.eyebrow}>
          <span aria-hidden="true">✦</span> GAMING · SIN ANUNCIOS
        </span>
        <h1>
          Noti<span>cias de Videojuegos</span>
        </h1>
        <p>Lanzamientos, actualizaciones y eventos del mundo gamer.</p>
      </header>

      <NoticiasClient categoriaInicial="Videojuegos" />
    </div>
  );
}