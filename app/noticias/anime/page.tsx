import Link from 'next/link';
import NoticiaCard, { Noticia } from '../NoticiaCard';
import styles from '../noticias.module.css';

const noticiasAnime: Noticia[] = [
  {
    id: 'anime-1',
    titulo: 'Título de tu noticia de anime',
    resumen:
      'Escribe aquí un resumen corto de la noticia. Dos o tres líneas máximo para que se vea bien en la tarjeta.',
    fecha: '10 oct 2026',
    categoria: 'Anime',
    imagen: '/noticias/anime-1.jpg', // opcional, si no la pones se muestra la etiqueta
    href: '/noticias/anime/1',
    etiqueta: 'ANIME',
  },
  {
    id: 'anime-2',
    titulo: 'Otro titular de anime',
    resumen:
      'Resumen breve. Aquí puedes hablar de estrenos, temporadas, anuncios, etc.',
    fecha: '08 oct 2026',
    categoria: 'Anime',
    href: '/noticias/anime/2',
    etiqueta: 'ESTRENO',
  },

];

export const metadata = {
  title: 'Noticias de Anime | Isekai Respawn',
  description:
    'Últimas noticias, estrenos, temporadas y novedades del mundo del anime. Sin anuncios, directo y actualizado.',
  keywords: [
    'noticias de anime',
    'noticias de anime sin anuncios',
    'estrenos de anime',
    'anime 2026',
    'novedades anime',
  ],
  openGraph: {
    title: 'Noticias de Anime | Isekai Respawn',
    description:
      'Últimas noticias, estrenos, temporadas y novedades del mundo del anime.',
    type: 'website',
  },
};

export default function NoticiasAnimePage() {
  return (
    <div className={styles.noticiasWrap}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>&gt;</span>
        <Link href="/noticias">Noticias</Link>
        <span className={styles.sep}>&gt;</span>
        <span className={styles.actual}>Anime</span>
      </nav>

      <h1 className={styles.tituloSeccion}>Noticias de Anime</h1>
      <p className={styles.subtituloSeccion}>
        Estrenos, temporadas, anuncios y todo lo que pasa en el mundo del anime.
        Sin anuncios, sin rodeos.
      </p>

      {noticiasAnime.length === 0 ? (
        <div className={styles.vacio}>
          Aún no hay noticias publicadas. Vuelve pronto. 👀
        </div>
      ) : (
        <div className={styles.noticiasGrid}>
          {noticiasAnime.map((n) => (
            <NoticiaCard key={n.id} noticia={n} />
          ))}
        </div>
      )}
    </div>
  );
}