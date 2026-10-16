'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { animes } from '../../datos/datos'; // Ajusta la ruta a tu archivo de datos de animes
import styles from './info.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ResenaAnimePage({ params }: Props) {
  const { id } = use(params);


  // Busca el anime cuyo ID coincida con la URL
  const anime = animes.find((item) => item.id === id);



  if (!anime) {
    notFound();
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link href="/anime">Anime</Link>
          <span aria-hidden="true">/</span>
          <span>{anime.titulo}</span>
        </nav>

        {/* Encabezado Superior */}
        <header className={styles.topHeader}>
  <div className={styles.topHeaderContent}>
    <span className={styles.eyebrow}>
      <span>01</span> · CATÁLOGO Y COMUNIDAD
    </span>
    <h1>
      EXPLORA EL MUNDO DE:
      <br></br> 
      <span>{anime.titulo}</span>
    </h1>

    {/* ANIMACIÓN TEMÁTICA ANIME */}
    <div className={styles.animeAnimacion} aria-hidden="true">
      <div className={styles.puntosAnime} />
      <div className={styles.recorridoAnime}>
        <svg className={styles.shuriken} viewBox="0 0 24 24">
          <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill="var(--amarillo, #ecc36f)" />
        </svg>
        <span className={styles.esferaMagica} />
      </div>
    </div>
  </div>
</header>

        {/* Layout Principal */}
        <div className={styles.detailCard}>
          
          {/* Portada */}
          <div className={styles.posterWrapper}>
            <Image
              src={anime.imagen}
              alt={`Portada de ${anime.titulo}`}
              width={350}
              height={500}
              priority
              className={styles.posterImage}
            />
          </div>

          {/* Información */}
          <div className={styles.infoWrapper}>
            <h2 className={styles.animeTitle}>{anime.titulo}</h2>

            {/* Sinopsis */}
            <section className={styles.sectionBlock}>
              <h3>sinopsis</h3>
              <p>{anime.sinopsis}</p>
            </section>

            {/* Fecha de Lanzamiento e Información */}
            <section className={styles.sectionBlock}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>fecha de lanzamiento:</span>
                <span className={styles.metaValue}>{anime.lanzamiento || 'No disponible'}</span>
              </div>

              <div className={styles.infoBlock}>
                <h4>información</h4>
                <ul className={styles.infoList}>
                  <li><strong>Género:</strong> {Array.isArray(anime.genero) ? anime.genero.join(' · ') : anime.genero}</li>
                  <li><strong>Temporadas:</strong> {anime.temporadas}</li>
                  <li><strong>Estudio:</strong> {anime.estudio || 'Desconocido'}</li>
                  <li><strong>Estado:</strong> {anime.categoria || 'N/A'}</li>
                </ul>
              </div>
            </section>

            {/* Reseña con el botón rosa en línea al final del texto */}
            <section className={styles.sectionBlock}>
              <h3>Reseña:</h3>
              <p className={styles.reviewText}>
                {anime.titulo} destaca dentro del género {Array.isArray(anime.genero) ? anime.genero[0] : anime.genero} por su impecable desarrollo visual producido por {anime.estudio || 'su estudio de animación'}. Su narrativa atrapa desde los primeros episodios, combinando momentos de alta tensión con un excelente desarrollo de personajes. ¡Una obra imprescindible para todo fan del anime!{' '}
                <Link 
                  href={`/anime/resenas/${anime.id}`} 
                  className={styles.primary}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    textDecoration: 'none', 
                    marginLeft: '0.5rem', 
                    verticalAlign: 'middle' 
                  }}
                >
                  Leer reseña completa <span aria-hidden="true">↗</span>
                </Link>
              </p>
            </section>
          </div>

        </div>

      </div>
    </div>
  );
}