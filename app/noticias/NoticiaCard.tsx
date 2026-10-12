import Link from 'next/link';
import type { Noticia } from './noticias';
import Image from 'next/image';
import styles from './noticias.module.css';

export default function NoticiaCard({ noticia }: { noticia: Noticia }) {
  const esVideojuego = noticia.categoria === 'Videojuegos';

  const ruta =
    noticia.categoria === 'Anime'
      ? `/noticias/anime/${noticia.id}`
      : `/noticias/videojuegos/${noticia.id}`;

  return (
    <article className={styles.noticia}>
      <div className={styles.noticiaImg}>
        {noticia.imagen ? (
          <Image
            src={noticia.imagen}
            alt={noticia.titulo}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <span>{noticia.etiqueta ?? noticia.categoria.toUpperCase()}</span>
        )}
      </div>

      <div className={styles.noticiaBody}>
        <span
          className={`${styles.categoria} ${
            esVideojuego ? styles.categoriaVideojuego : ''
          }`}
        >
          {noticia.categoria}
        </span>

        <h3>{noticia.titulo}</h3>
        <span className={styles.fecha}>{noticia.fecha}</span>
                

        <Link href={ruta} className={styles.btnLeer}>
          Leer más
        </Link>
      </div>
    </article>
  );
}