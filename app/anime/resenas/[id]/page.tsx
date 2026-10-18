import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { animes } from '@/app/anime/datos/datos';
import styles from './resenas.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

// 👇 1. AGREGAMOS ESTO PARA LA EXPORTACIÓN ESTÁTICA 👇
export async function generateStaticParams() {
  // Le decimos a Next.js que genere una página para cada anime
  // (Puedes filtrar aquí si solo quieres generar las que tienen reseña)
  return animes
      .filter(anime => anime.resena) // Opcional: solo genera si tiene reseña
      .map((anime) => ({
        id: anime.id,
      }));
}
// 👆 ------------------------------------------ 👆

// 👇 2. Convertimos el componente en async y quitamos 'use client' 👇
export default async function ResenaAnimeDetailPage({ params }: Props) {
  // 3. Usamos await params
  const { id } = await params;

  // Busca el anime específico por id
  const anime = animes.find((item) => item.id === id);

  if (!anime || !anime.resena) {
    notFound();
  }

  const { resena } = anime;

  // Estructura de apartados de la reseña
  const apartados = [
    { id: 'narrativa', titulo: 'Historia y Narrativa', texto: resena.resumen, numero: '01' },
    { id: 'animacion', titulo: 'Animación y Arte', texto: `Producción a cargo de ${anime.estudio || 'su estudio de animación'}, destacando por su acabado visual y estilo de arte único.`, numero: '02' },
  ];

  return (
      <article className={styles.wrap}>
        {/* Navegación Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link href="/anime">Anime</Link>
          <span aria-hidden="true">/</span>
          <Link href="/anime/resenas">Reseñas</Link>
          <span aria-hidden="true">/</span>
          <span>{anime.titulo}</span>
        </nav>

        {/* Header con Titular */}
        <header className={styles.gameHeading}>
          <span className={styles.eyebrow}>RESEÑA EDITORIAL · SIN SPOILERS</span>
          <h1>{anime.titulo}</h1>
          <p>"{resena.titular}"</p>
        </header>

        {/* Showcase: Imagen + Ficha Técnica */}
        <div className={styles.showcase}>
          <div className={styles.visual}>
            <div className={styles.cover}>
              {anime.imagen && (
                  <Image
                      src={anime.imagen}
                      alt={`Portada de ${anime.titulo}`}
                      width={300}
                      height={400}
                      priority
                      unoptimized // Lo dejamos por seguridad
                  />
              )}
              <span className={styles.badge}>
              ★ {resena.puntuacionEditorial} / 10
            </span>
            </div>
            <div className={styles.visualCaption}>
              <span>{Array.isArray(anime.genero) ? anime.genero.join(' · ') : anime.genero}</span>
              <span>{anime.categoria ?? 'Anime'}</span>
            </div>
          </div>

          {/* Ficha Lateral */}
          <aside className={styles.gameInfo} aria-label="Ficha técnica del anime">
            <span className={styles.eyebrow}>TU PRÓXIMA MARATÓN</span>
            <h2>Sobre el anime</h2>
            <p>{anime.sinopsis}</p>

            <dl>
              {anime.estudio && (
                  <div>
                    <dt>Estudio</dt>
                    <dd>{anime.estudio}</dd>
                  </div>
              )}
              {anime.lanzamiento && (
                  <div>
                    <dt>Estreno</dt>
                    <dd>{anime.lanzamiento}</dd>
                  </div>
              )}
              <div>
                <dt>Temporadas</dt>
                <dd>{anime.temporadas} temp.</dd>
              </div>
              <div>
                <dt>Género</dt>
                <dd>{Array.isArray(anime.genero) ? anime.genero.join(', ') : anime.genero}</dd>
              </div>
            </dl>

            <a className={styles.primary} href="#analisis">
              Leer análisis <span aria-hidden="true">↓</span>
            </a>
          </aside>
        </div>

        {/* Barra de Pasos / Navegación interna */}
        <nav className={styles.steps} aria-label="Recorrido de anime">
          <Link href="/anime">01 Catálogo</Link>
          <span aria-current="step">02 Reseña de la obra</span>
          <Link href="/anime/memes">03 Memes →</Link>
        </nav>

        {/* Cuerpo del Análisis */}
        <div id="analisis" className={styles.analysisLayout}>
          <nav className={styles.contents} aria-label="Contenido de la reseña">
            <span className={styles.eyebrow}>EN ESTA RESEÑA</span>
            {apartados.map((apartado) => (
                <a key={apartado.id} href={`#${apartado.id}`}>
                  <span>{apartado.numero}</span>
                  {apartado.titulo}
                </a>
            ))}
            <a href="#veredicto">
              <span>03</span>
              Veredicto
            </a>
            <Link className={styles.backLink} href="/anime/resenas">
              ← Todas las reseñas
            </Link>
          </nav>

          <div className={styles.analysisBody}>
            <div className={styles.lead}>
              <span className={styles.eyebrow}>LA PROPUESTA</span>
              <p>{resena.resumen}</p>
            </div>

            {apartados.map((apartado) => (
                <section id={apartado.id} className={styles.analysisSection} key={apartado.id}>
                  <span className={styles.number}>{apartado.numero}</span>
                  <div>
                    <h2>{apartado.titulo}</h2>
                    <p>{apartado.texto}</p>
                  </div>
                </section>
            ))}

            {/* Bloque de Pros y Puntos a considerar */}
            <div className={styles.balance}>
              <section>
                <h2><span aria-hidden="true">＋</span> Puntos fuertes</h2>
                <ul>
                  {resena.puntosFuertes.map((punto, index) => (
                      <li key={index}>{punto}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2><span aria-hidden="true">◇</span> A tener en cuenta</h2>
                <ul>
                  <li>Su ritmo narrativo varía dependiendo de cada arco de la temporada.</li>
                  <li>Conviene seguir las emisiones en orden para apreciar al máximo el clímax.</li>
                </ul>
              </section>
            </div>

            {/* Veredicto */}
            <section id="veredicto" className={styles.verdict}>
              <span className={styles.eyebrow}>03 / NUESTRO VEREDICTO</span>
              <h2>¿Es tu próxima maratón?</h2>
              <p>{resena.veredicto}</p>
              <div className={styles.verdictScoreRow}>
                <span>PUNTUACIÓN EDITORIAL</span>
                <strong>{resena.puntuacionEditorial} / 10</strong>
              </div>
            </section>
          </div>
        </div>

        {/* Siguiente Parada */}
        <section className={styles.nextStop} aria-labelledby="siguiente-parada">
          <div>
            <span className={styles.eyebrow}>03 / SIGUIENTE PARADA</span>
            <h2 id="siguiente-parada">Después de la maratón, una sonrisa.</h2>
            <p>Continúa hacia nuestro espacio de humor de anime.</p>
          </div>
          <Link href="/anime/memes" className={styles.primary}>
            Ir a memes <span aria-hidden="true">→</span>
          </Link>
        </section>
      </article>
  );
}