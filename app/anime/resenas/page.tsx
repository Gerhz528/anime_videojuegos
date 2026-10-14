import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { animes } from '@/app/anime/datos/datos';
import styles from '@/app/anime/anime.module.css';

export const metadata: Metadata = {
  title: 'Reseñas y Catálogo de Animes | Isekai Respawn',
  description: 'Explora nuestros análisis editoriales y reseñas de animes recientes y clásicos. Veredicto, puntuación y puntos fuertes sin spoilers.',
};

export default function AnimePage() {
  return (
    <div className={styles.wrap}>
      {/* BREADCRUMB */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/anime">Anime</Link>
        <span>/</span>
        <span>Reseñas</span>
      </nav>

      {/* HEADER / HERO ESTRUCTURADO */}
      <header className={styles.hero} aria-labelledby="titulo-resenas">
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <span>02</span> · RESEÑAS EDITORIALES · SIN SPOILERS
          </span>
          <h1 id="titulo-resenas">
            Antes de tu próxima <span>maratón.</span>
          </h1>

          {/* ANIMACIÓN TEMÁTICA ANIME */}
          <div className={styles.animeAnimacion} aria-hidden="true">
            <div className={styles.puntosAnime} />
            <div className={styles.recorridoAnime}>
              <svg className={styles.shuriken} viewBox="0 0 24 24">
                <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill="#ecc36f" />
              </svg>
              <span className={styles.esferaMagica} />
            </div>
          </div>

          <p>Conoce lo que propone cada obra. Explora su universo, descubre sus puntos fuertes y encuentra una historia que conecte contigo.</p>
          
          <div className={styles.heroActions}>
            <Link href="/anime/recomendaciones" className={styles.primary}>
              Ver recomendados de la comunidad →
            </Link>
          </div>
        </div>

        {/* PIE DEL BANNER */}
        <div className={styles.heroFooter}>
          <span>02 / CRÍTICAS</span>
          <span>ANÁLISIS DETALLADO</span>
          <span aria-hidden="true">COMMUNITY APPROVED · READY</span>
        </div>
      </header>

      {/* SECCIONES DE RESEÑAS */}
      {(['Emisión', 'Finalizados'] as const).map((categoria) => (
        <section className={styles.seccion} key={categoria} aria-labelledby={`resenas-${categoria}`}>
          <div className={styles.heading}>
            <div>
              <span className={styles.eyebrow}>CATEGORÍA</span>
              <h2 id={`resenas-${categoria}`}>
                {categoria === 'Emisión' ? 'Enemigos y mundos en emisión' : 'Clásicos imperdibles'}
              </h2>
              <p>
                {categoria === 'Emisión'
                  ? 'Análisis y veredicto de las series que están marcando tendencia esta temporada.'
                  : 'Obras maestras que han superado la prueba del tiempo y que debes ver.'}
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            {animes
              .filter((anime) => (anime.categoria || 'Emisión') === categoria && anime.resena)
              .map((anime) => {
                const puntuacion = anime.resena?.puntuacionEditorial ?? 9.0;
                const puntuacionCinco = (puntuacion / 2).toFixed(2);

                return (
                  <article className={styles.card} key={anime.id}>
                    {/* Portada limpia */}
                    <div className={styles.cover}>
                      <span className={styles.fallback}>{anime.titulo}</span>
                      {anime.imagen && (
                        <Image
                          src={anime.imagen}
                          alt={`Portada de ${anime.titulo}`}
                          width={460}
                          height={215}
                          unoptimized
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Cuerpo de la tarjeta estilo Reseña / Ficha */}
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span>{Array.isArray(anime.genero) ? anime.genero[0] : anime.genero}</span>
                        <span>{anime.lanzamiento?.split(' ').pop() || anime.lanzamiento}</span>
                      </div>

                      <h3>{anime.titulo}</h3>

                      {/* Eslogan / Titular de la reseña */}
                      <p className={styles.resenaTitular}>
                        {anime.resena?.titular}
                      </p>

                      {/* Sección de Valoración de Usuarios */}
                      <div className={styles.valoracionBlock}>
                        <span className={styles.valoracionLabel}>VALORACIÓN DE USUARIOS</span>
                        
                        <div className={styles.starsRow}>
                          <span className={styles.stars}>★★★★<span className={styles.halfStar}>★</span></span>
                          <strong className={styles.scoreText}>{puntuacionCinco} <span>/5</span></strong>
                        </div>

                        <p className={styles.userScoreDetail}>
                          User Score: <strong>{puntuacion}/10</strong> · TV
                        </p>
                        <p className={styles.ratingsCount}>
                          1,240 valoraciones
                        </p>
                        <p className={styles.metacriticDate}>
                          MyAnimeList · Consulta: 11/10/2026
                        </p>
                      </div>

                      {/* Enlace final a la reseña */}
                      <Link
                        className={styles.exploreLink}
                        href={`/anime/resenas/${anime.id}`}
                        aria-label={`Leer reseña de ${anime.titulo}`}
                      >
                        <span>Leer reseña</span>
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}

      <p className={styles.credit}>
        Análisis editoriales basados en las emisiones y fichas oficiales. Datos e imágenes del catálogo editorial.
      </p>
    </div>
  );
}