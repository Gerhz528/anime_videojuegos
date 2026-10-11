import Link from 'next/link';
import styles from './noticias.module.css';

export const metadata = {
  title: 'Noticias | Isekai Respawn',
  description:
    'Noticias de anime y videojuegos sin anuncios. Últimas novedades, estrenos y eventos.',
  keywords: [
    'noticias de anime',
    'noticias de videojuegos',
    'noticias sin anuncios',
    'novedades anime y gaming',
  ],
};

export default function NoticiasPage() {
  return (
    <div className={styles.noticiasWrap}>
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>&gt;</span>
        <span className={styles.actual}>Noticias</span>
      </nav>

      <h1 className={styles.tituloSeccion}>Noticias</h1>
      <p className={styles.subtituloSeccion}>
        Todo lo que necesitas saber sobre anime y videojuegos, en un solo lugar.
      </p>

      <div className={styles.noticiasGrid}>
        <article className={styles.noticia}>
          <div className={styles.noticiaImg}>
            <span>ANIME</span>
          </div>
          <div className={styles.noticiaBody}>
            <h3>Noticias de Anime</h3>
            <p>
              Estrenos, temporadas, anuncios y todo lo que pasa en el mundo del
              anime.
            </p>
            <Link href="/noticias/anime" className={styles.btnLeer}>
              Ver noticias
            </Link>
          </div>
        </article>

        <article className={styles.noticia}>
          <div className={styles.noticiaImg}>
            <span>GAMING</span>
          </div>
          <div className={styles.noticiaBody}>
            <h3>Noticias de Videojuegos</h3>
            <p>
              Lanzamientos, actualizaciones y eventos del mundo gamer.
            </p>
            <Link href="/noticias/videojuegos" className={styles.btnLeer}>
              Ver noticias
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}