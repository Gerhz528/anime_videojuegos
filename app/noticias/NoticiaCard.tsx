import Link from 'next/link';
import styles from './noticias.module.css';

export type Noticia = {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;       // formato: "2026-10-10" o "10 oct 2026"
  categoria: 'Anime' | 'Videojuegos';
  imagen?: string;     // ruta en /public, opcional
  href: string;        // enlace interno o externo
  etiqueta?: string;   // texto que aparece si no hay imagen
};

export default function NoticiaCard({ noticia }: { noticia: Noticia }) {
  const esVideojuego = noticia.categoria === 'Videojuegos';

  return (
    <article className={styles.noticia}>
      <div className={styles.noticiaImg}>
        {noticia.imagen ? (
          <img src={noticia.imagen} alt={noticia.titulo} />
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
        <p>{noticia.resumen}</p>

        <Link href={noticia.href} className={styles.btnLeer}>
          Leer más
        </Link>
      </div>
    </article>
  );
}