import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { noticias } from '../../noticias';
import styles from '../../noticias.module.css';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const noticia = noticias.find((n) => n.id === id && n.categoria === 'Anime');
  return {
    title: noticia ? `${noticia.titulo} | Isekai Respawn` : 'Noticia no encontrada',
    description: noticia?.resumen,
  };
}

export default async function NoticiaDetallePage({ params }: Props) {
  const { id } = await params;
  const noticia = noticias.find((n) => n.id === id && n.categoria === 'Anime');

  if (!noticia) notFound();

  return (
    <article className={styles.wrap}>
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>/</span>
        <Link href="/noticias">Noticias</Link>
        <span className={styles.sep}>/</span>
        <Link href="/noticias/anime">Anime</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.actual}>{noticia.titulo}</span>
      </nav>

      <header className={styles.hero}>
        <span className={styles.eyebrow}>
          <span aria-hidden="true">✦</span> {noticia.etiqueta ?? 'ANIME'}
        </span>
        <h1>{noticia.titulo}</h1>
        <p style={{ color: 'var(--coral)', fontWeight: 600 }}>{noticia.fecha}</p>
      </header>

      {noticia.imagen && (
        <Image
          src={noticia.imagen}
          alt={noticia.titulo}
          width={1200}
          height={500}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: 12,
            marginBottom: '2rem',
            border: '1px solid var(--azul-medio)',
          }}
        />
      )}

      <p style={{ color: 'var(--texto-suave)', lineHeight: 1.9, fontSize: '1.05rem' }}>
        {noticia.resumen}
      </p>

    
      {noticia.estrenos && noticia.estrenos.length > 0 && (
        <ul className={styles.listaEstrenos}>
          {noticia.estrenos.map((estreno) => (
            <li key={estreno.titulo} className={styles.estrenoItem}>
              <div className={styles.estrenoHeader}>
                <h2>{estreno.titulo}</h2>
                <span className={styles.estrenoFecha}>{estreno.fecha}</span>
              </div>
              {(estreno.estudio || estreno.plataforma) && (
                <span className={styles.estrenoMeta}>
                  {estreno.estudio ?? estreno.plataforma}
                </span>
              )}
              <p>{estreno.descripcion}</p>
            </li>
          ))}
        </ul>
      )}

      <p style={{ marginTop: '2rem' }}>
        <Link href="/noticias/anime" className={styles.btnLeer}>
          ← Volver a noticias de anime
        </Link>
      </p>
    </article>
  );
}