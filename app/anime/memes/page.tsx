'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { memesAnime, type MemeAnime } from './memes'; // Ajusta la ruta a tus datos
import styles from './memes.module.css';

export default function MemesAnimePage() {
  const [memeSeleccionado, setMemeSeleccionado] = useState<MemeAnime | null>(null);

  const abrirModal = (meme: MemeAnime) => setMemeSeleccionado(meme);
  const cerrarModal = () => setMemeSeleccionado(null);

  return (
    <div className={styles.wrap}>
      {/* BREADCRUMB */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/anime">Anime</Link>
        <span>/</span>
        <span>Memes</span>
      </nav>

      {/* HEADER / HERO ESTILIZADO */}
      <header className={styles.hero} aria-labelledby="titulo-memes">
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            <span>03</span> · ESPACIO DE HUMOR · PARADAS OBLIGATORIAS
          </span>
          <h1 id="titulo-memes">
            Risas en el próximo <span>episodio.</span>
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

          <p>
            Porque no todo son batallas épicas y momentos tristes. Un rincón para compartir el lado más divertido de la comunidad.
          </p>

          <div className={styles.heroActions}>
            <Link href="/anime" className={styles.primary}>
              ← Volver al catálogo
            </Link>
          </div>
        </div>

        {/* PIE DEL BANNER */}
        <div className={styles.heroFooter}>
          <span>03 / HUMOR OTAKU</span>
          <span>MEMES Y COMUNIDAD</span>
          <span aria-hidden="true">FUN ZONE · READY</span>
        </div>
      </header>

      {/* RECORRIDO DE PASOS */}
      <nav className={styles.steps} aria-label="Recorrido de anime">
        <Link href="/anime">01 Catálogo</Link>
        <Link href="/anime/resenas">02 Reseñas</Link>
        <span aria-current="step">03 Memes</span>
      </nav>

      {/* GALERÍA DE MEMES */}
      <section className={styles.seccion} aria-labelledby="galeria-memes">
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>HUMOR OTAKU</span>
            <h2 id="galeria-memes">Los más votados de la semana</h2>
            <p>Selección especial creada y compartida por los fans.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {memesAnime.map((meme) => (
            <article className={styles.card} key={meme.id}>
              {/* Al hacer clic en la portada se abre el modal */}
              <button
                type="button"
                className={styles.coverButton}
                onClick={() => abrirModal(meme)}
                aria-label={`Ver meme completo: ${meme.titulo}`}
              >
                <div className={styles.cover}>
                  <Image
                    src={meme.imagen}
                    alt={meme.titulo}
                    width={460}
                    height={350}
                    unoptimized
                    loading="lazy"
                  />
                  <span className={styles.zoomHint}>🔍 Click para expandir</span>
                </div>
              </button>

              <div className={styles.cardBody}>
                <h3>{meme.titulo}</h3>
                <div className={styles.cardFooter}>
                  <span className={styles.likes}>❤️ {meme.likes} me gusta</span>
                  <button
                    className={styles.shareBtn}
                    type="button"
                    onClick={() => abrirModal(meme)}
                  >
                    Ver completo ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL PARA VER LA IMAGEN COMPLETA */}
      {memeSeleccionado && (
        <div
          className={styles.modalOverlay}
          onClick={cerrarModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-titulo"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro de la imagen
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={cerrarModal}
              aria-label="Cerrar ventana"
            >
              ✕
            </button>

            <div className={styles.modalImageWrapper}>
              <img
                src={memeSeleccionado.imagen}
                alt={memeSeleccionado.titulo}
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalHeader}>
              <h3 id="modal-titulo">{memeSeleccionado.titulo}</h3>
              <span className={styles.likes}>❤️ {memeSeleccionado.likes} me gusta</span>
            </div>
          </div>
        </div>
      )}

      {/* SIGUIENTE PARADA */}
      <section className={styles.nextStop} aria-labelledby="siguiente-parada">
        <div>
          <span className={styles.eyebrow}>FIN DEL RECORRIDO</span>
          <h2 id="siguiente-parada">¿Listo para volver a empezar?</h2>
          <p>Explora de nuevo nuestro catálogo principal para descubrir tu próxima serie favorita.</p>
        </div>
        <Link href="/anime" className={styles.primary}>
          Volver al catálogo <span aria-hidden="true">→</span>
        </Link>
      </section>

      <p className={styles.credit}>
        Sección de entretenimiento y humor de Isekai Respawn. Todos los derechos a sus respectivos creadores.
      </p>
    </div>
  );
}