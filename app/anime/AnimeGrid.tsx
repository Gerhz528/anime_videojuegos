'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Anime } from '@/app/anime/datos/datos'; // Ajusta la ruta si tus tipos están en otro archivo
import styles from '@/app/anime/anime.module.css'; // O importa tus estilos correspondientes

interface AnimeGridProps {
  animes: Anime[];
}

export default function AnimeGrid({ animes }: AnimeGridProps) {
  const [imagenesFallidas, setImagenesFallidas] = useState<string[]>([]);

  if (!animes || animes.length === 0) {
    return (
      <div className={styles.empty}>
        <h3>No hay animes disponibles.</h3>
        <p>Prueba buscando con otro término o seleccionando otra categoría.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {animes.map((anime) => (
        <article className={styles.card} key={anime.id}>
          {/* Contenedor de la portada e imagen */}
          <div className={styles.cover}>
            <span className={styles.fallback}>{anime.titulo}</span>
            {!imagenesFallidas.includes(anime.id) && anime.imagen && (
              <Image
                src={anime.imagen}
                alt={`Portada de ${anime.titulo}`}
                width={460}
                height={215}
                unoptimized
                loading="lazy"
                onError={() =>
                  setImagenesFallidas((prev) => [...prev, anime.id])
                }
              />
            )}
            <span
              className={`${styles.badge} ${
                anime.categoria === 'Finalizados' ? styles.classic : ''
              }`}
            >
              {anime.categoria}
            </span>
          </div>

          {/* Información del anime */}
          <div className={styles.cardBody}>
            <div className={styles.cardMeta}>
                <span>{Array.isArray(anime.genero) ? anime.genero.join(' · ') : anime.genero}</span>
                <span>{anime.lanzamiento}</span>
            </div>
            <h3>{anime.titulo}</h3>
            <p>{anime.sinopsis}</p>

           <Link
            className={styles.exploreLink}
            href={`/anime/info/${anime.id}`}
            aria-label={`Explorar ${anime.titulo}: leer reseña`}
            >
            Explorar anime <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}