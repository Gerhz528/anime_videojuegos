import Link from 'next/link';
import NoticiasClient from '../NoticiasClient';
import styles from '../noticias.module.css';


export const metadata = {
  title: 'Noticias de Anime | Isekai Respawn',
  description:
    'Últimas noticias, estrenos y novedades del mundo del anime. Sin anuncios.',
  keywords: [
    'noticias de anime',
    'noticias de anime sin anuncios',
    'estrenos de anime',
    'anime 2026',
  ],
  openGraph: {
    title: 'Noticias de Anime | Isekai Respawn',
    description: 'Estrenos y novedades del mundo del anime.',
    type: 'website',
  },
};

export default function NoticiasAnimePage() {
  return (
    <div className={styles.wrap}>
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>/</span>
        <Link href="/noticias">Noticias</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.actual}>Anime</span>
      </nav>

      <header className={styles.hero}>
        <span className={styles.eyebrow}>
          <span aria-hidden="true">✦</span> ANIME · SIN ANUNCIOS
        </span>
        <h1>
          Noti<span>cias de Anime</span>
        </h1>
        <p>Estrenos, temporadas y todo lo que pasa en el mundo del anime.</p>
      </header>

      <NoticiasClient categoriaInicial="Anime" />
    </div>
  );
}