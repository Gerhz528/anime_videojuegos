import Link from 'next/link';
import styles from './redes.module.css';

export const metadata = {
  title: 'Redes sociales | Isekai Respawn',
  description:
    'Sigue a Isekai Respawn en Facebook, Instagram y X. Noticias de anime y videojuegos, memes y estrenos sin anuncios.',
  keywords: [
    'isekai respawn redes sociales',
    'facebook isekai respawn',
    'instagram isekai respawn',
    'x isekai respawn',
    'noticias de anime sin anuncios',
    'noticias de videojuegos sin anuncios',
  ],
  openGraph: {
    title: 'Redes sociales | Isekai Respawn',
    description:
      'Noticias de anime y videojuegos, memes y estrenos sin anuncios.',
    type: 'website',
  },
};

const redes = [
  {
    id: 'facebook',
    nombre: 'Facebook',
    titulo: 'Síguenos en Facebook',
    descripcion:
      '¡En Facebook encontrarás noticias, memes y comentarios llenos de tips y recomendaciones de nuestra comunidad para disfrutar al máximo del anime y los videojuegos!',
    url: 'https://facebook.com',
    color: '#1877F2',
    icono: 'facebook',
  },
  {
    id: 'instagram',
    nombre: 'Instagram',
    titulo: 'Síguenos en Instagram',
    descripcion:
      '¡En Instagram compartimos imágenes, memes y reels con lo último del anime y los videojuegos! Únete a nuestra comunidad y descubre contenido exclusivo cada día.',
    url: 'https://instagram.com/isekairespawn',
    color: '#E4405F',
    icono: 'instagram',
  },
  {
    id: 'x',
    nombre: 'X',
    titulo: 'Síguenos en X',
    descripcion:
      '¡Sigue nuestra cuenta de X y descubre noticias, curiosidades y tips rápidos sobre anime y videojuegos, además de recomendaciones de nuestra comunidad en cada tweet!',
    url: 'https://x.com/isekairespawn',
    color: '#000000',
    icono: 'x',
  },
];

const Iconos: Record<string, React.JSX.Element> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

export default function RedesPage() {
  return (
    <main className={styles.wrap}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.actual}>Redes sociales</span>
      </nav>

      {/* Hero */}
      <header className={styles.hero}>
        <span className={styles.eyebrow}>
          <span aria-hidden="true">✦</span> COMUNIDAD · SIN ANUNCIOS
        </span>
        <h1>
          ¡Síguenos en nuestras <span>redes sociales</span>!
        </h1>
        <p>
          Únete a la comunidad de Isekai Respawn y no te pierdas ninguna
          noticia, meme o estreno del mundo del anime y los videojuegos.
        </p>
      </header>

      {/* Grid de tarjetas */}
      <div className={styles.grid}>
        {redes.map((red) => (
          <article
            key={red.id}
            className={styles.card}
            style={{ '--color-red': red.color } as React.CSSProperties}
          >
            <div className={styles.icono}>{Iconos[red.icono]}</div>
            <h2>{red.titulo}</h2>
            <p>{red.descripcion}</p>
            <a
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              Ir
            </a>
          </article>
        ))}
      </div>

      {/* CTA final */}
      <section className={styles.cta}>
        <h2>¿Aún no nos sigues?</h2>
        <p>
          Forma parte de la comunidad y comparte tus teorías, memes y
          recomendaciones con otros fans.
        </p>
      </section>
    </main>
  );
}