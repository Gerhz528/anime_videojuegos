'use client';

import { useState } from 'react';
import Link from 'next/link';
import { animes } from './datos/datos';
import AnimeGrid from './AnimeGrid';
import styles from './anime.module.css';

const normalizar = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const categoriasGeneros = [
  'Todas las categorías',
  'Romance',
  'Shonen',
  'Acción',
  'Isekai',
  'Drama',
  'Fantasía',
  'Comedia',
  'Aventura', 
  'Misterio',
  'Gore',
];

export default function CatalogoAnime() {
  const [filtroGeneral, setFiltroGeneral] = useState<'Todos' | 'Populares'>('Todos');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todas las categorías');
  const [busqueda, setBusqueda] = useState('');

  // Lógica de filtrado corregida
  const visibles = animes.filter((anime) => {
    // Filtro general (Todos / Populares)
    const coincideFiltroGeneral =
      filtroGeneral === 'Todos'
        ? true
        : anime.categoria === 'Emisión' || anime.esPopular;

    // Filtro por Combobox
    const coincideCategoria =
      categoriaSeleccionada === 'Todas las categorías'
        ? true
        : normalizar(anime.genero.join(' ')).includes(normalizar(categoriaSeleccionada));

    // Filtro por Buscador
    const coincideBusqueda = normalizar(
      `${anime.titulo} ${anime.genero.join(' ')} ${anime.estudio}`
    ).includes(normalizar(busqueda.trim()));

    return coincideFiltroGeneral && coincideCategoria && coincideBusqueda;
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        
        {/* RUTA DE NAVEGACIÓN (BREADCRUMB) */}
        <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span>Anime</span>
        </nav>

        {/* SECTION HERO */}
        <section className={styles.hero} aria-labelledby="titulo-anime">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <span aria-hidden="true">✦</span> UN NUEVO MUNDO EN CADA CAPÍTULO
            </span>
            <h1 id="titulo-anime">
              ANIME<span>S</span>
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

            <h2>Encuentra tu próxima aventura.</h2>
            <p>
              Desde los clásicos que marcaron una época hasta mundos que apenas empiezas a descubrir. Tu siguiente historia comienza aquí.
            </p>

            <div className={styles.heroActions}>
              <a href="#catalogo" className={styles.primary}>
                Explorar catálogo <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className={styles.heroFooter}>
            <span>01 / INFORMACIÓN</span>
            <span>EMISIÓN + CLÁSICOS</span>
            <span aria-hidden="true">OTAKU ZONE · READY</span>
          </div>
        </section>

        {/* CATÁLOGO / FILTROS & BÚSQUEDA */}
        <section id="catalogo" className={styles.catalogo} aria-labelledby="titulo-catalogo">
          <div className={styles.heading}>
            <div>
              <span className={styles.eyebrow}>DESCUBRE · EXPLORA · DISFRUTA</span>
              <h2 id="titulo-catalogo">Encuentra tu próximo mundo</h2>
              <p>Una selección para descubrir animes recientes y volver a los clásicos.</p>
            </div>
            <div className={styles.totalWrapper} aria-hidden="true">
              <span className={styles.totalNumber}>
                {animes.length.toString().padStart(2, '0')}
              </span>
              <span className={styles.totalText}>
                mundos por<br />explorar
              </span>
            </div>
          </div>

          {/* TOOLBAR */}
          <div className={styles.toolbar}>
            <div className={styles.filters} role="group" aria-label="Filtros de anime">
              {/* Botón Todos */}
              <button
                type="button"
                className={
                  filtroGeneral === 'Todos' && categoriaSeleccionada === 'Todas las categorías'
                    ? styles.active
                    : ''
                }
                onClick={() => {
                  setFiltroGeneral('Todos');
                  setCategoriaSeleccionada('Todas las categorías');
                }}
              >
                Todos <span>{animes.length}</span>
              </button>

              {/* Botón Populares */}
              <button
                type="button"
                className={filtroGeneral === 'Populares' ? styles.active : ''}
                onClick={() => {
                  setFiltroGeneral('Populares');
                }}
              >
                Populares <span>{animes.filter((a) => a.categoria === 'Emisión' || a.esPopular).length}</span>
              </button>

              {/* COMBOBOX DE CATEGORÍAS ESTILIZADO */}
              <div className={styles.selectWrapper}>
                <select
                  className={`${styles.selectCategory} ${
                    categoriaSeleccionada !== 'Todas las categorías' ? styles.selectActive : ''
                  }`}
                  value={categoriaSeleccionada}
                  onChange={(e) => {
                    setCategoriaSeleccionada(e.target.value);
                    setFiltroGeneral('Todos');
                  }}
                >
                  <option value="Todas las categorías">Categorías</option>
                  {categoriasGeneros.slice(1).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* BUSCADOR */}
            <div className={styles.search}>
              <label htmlFor="buscar-anime" className={styles.srOnly}>
                Busca tu anime...
              </label>
              <span aria-hidden="true" className={styles.searchIcon}>⌕</span>
              <input
                id="buscar-anime"
                type="search"
                placeholder="Busca tu anime..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>

          {/* CONTADOR DE RESULTADOS */}
          <p className={styles.results} role="status">
            {visibles.length} {visibles.length === 1 ? 'anime encontrado' : 'animes encontrados'}
          </p>

          {/* RENDERING DE TARJETAS */}
          <AnimeGrid animes={visibles} />
        </section>
      </div>
    </div>
  );
}