'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { juegos } from './juegos';
import GalaxiaArcade from './GalaxiaArcade';
import styles from './videojuegos.module.css';

const categorias = ['Todos', 'Recientes', 'Clásicos'] as const;
const normalizar = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export default function Catalogo() {
  const [categoria, setCategoria] = useState<(typeof categorias)[number]>('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [imagenesFallidas, setImagenesFallidas] = useState<string[]>([]);
  const visibles = juegos.filter((juego) =>
    (categoria === 'Todos' || juego.categoria === categoria) &&
    normalizar(`${juego.titulo} ${juego.genero} ${juego.desarrollador}`).includes(normalizar(busqueda.trim()))
  );

  return (
    <div className={styles.wrap}>
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link><span aria-hidden="true">/</span><span>Videojuegos</span>
      </nav>

      <section className={styles.hero} aria-labelledby="titulo-videojuegos">
        <div className={styles.pixelUno} aria-hidden="true" />
        <div className={styles.pixelDos} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}><span aria-hidden="true">✦</span> UN NUEVO MUNDO EN CADA PARTIDA</span>
          <h1 id="titulo-videojuegos">VIDEO<span>JUEGOS</span></h1>
          <div className={styles.arcade} aria-hidden="true">
            <div className={styles.puntos} />
            <div className={styles.recorrido}>
              <svg className={styles.comecocos} viewBox="0 0 48 48"><path d="M24 24 L44 10 A24 24 0 1 0 44 38 Z" fill="currentColor" /><circle cx="25" cy="9" r="2.5" fill="var(--casi-negro)" /></svg>
              <span className={styles.fantasma}><i /><i /></span>
            </div>
          </div>
          <h2>Elige tu próxima aventura.</h2>
          <p>Desde los clásicos que marcaron una época hasta mundos que apenas empiezas a descubrir. Tu siguiente partida comienza aquí.</p>
          <div className={styles.heroActions}>
            <a href="#catalogo" className={styles.primary}>Explorar catálogo <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className={styles.heroFooter}><span>01 / INFORMACIÓN</span><span>CLÁSICOS + RECIENTES</span><span aria-hidden="true">PLAYER ONE · READY</span></div>
      </section>

      <GalaxiaArcade />

      <section id="catalogo" className={styles.catalogo} aria-labelledby="titulo-catalogo">
        <div className={styles.heading}>
          <div><span className={styles.eyebrow}>DESCUBRE · EXPLORA · JUEGA</span><h2 id="titulo-catalogo">Encuentra tu próximo mundo</h2><p>Una selección para descubrir juegos recientes y volver a los clásicos.</p></div>
          <span className={styles.total}>{juegos.length.toString().padStart(2, '0')} <span>mundos por explorar</span></span>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.filters} role="group" aria-label="Categoría de videojuegos">
            {categorias.map((item) => <button key={item} type="button" aria-pressed={categoria === item} className={categoria === item ? styles.active : ''} onClick={() => setCategoria(item)}>{item}<span>{item === 'Todos' ? juegos.length : juegos.filter((j) => j.categoria === item).length}</span></button>)}
          </div>
          <div className={styles.search}><label htmlFor="buscar-juego" className={styles.srOnly}>Buscar por título, género o desarrollador</label><span aria-hidden="true">⌕</span><input id="buscar-juego" type="search" placeholder="Busca tu videojuego…" value={busqueda} onChange={(event) => setBusqueda(event.target.value)} /></div>
        </div>
        <p className={styles.results} role="status">{visibles.length} {visibles.length === 1 ? 'videojuego encontrado' : 'videojuegos encontrados'}</p>
        <div className={styles.grid}>
          {visibles.map((juego) => (
            <article className={styles.card} key={juego.id}>
              <div className={styles.cover}>
                <span className={styles.fallback}>{juego.titulo}</span>
                {!imagenesFallidas.includes(juego.id) && <Image src={juego.imagen} alt={`Portada de ${juego.titulo}`} width={460} height={215} unoptimized loading="lazy" onError={() => setImagenesFallidas((prev) => [...prev, juego.id])} />}
                <span className={`${styles.badge} ${juego.categoria === 'Clásicos' ? styles.classic : ''}`}>{juego.categoria === 'Recientes' ? 'Reciente' : 'Clásico'}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}><span>{juego.genero}</span><span>{juego.anio}</span></div>
                <h3>{juego.titulo}</h3><p>{juego.descripcion}</p>
                <Link className={styles.exploreLink} href={`/videojuegos/resenas/${juego.id}`} aria-label={`Explorar ${juego.titulo}: leer reseña`}>Explorar juego <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
        {visibles.length === 0 && <div className={styles.empty}><h3>No encontramos ese mundo… todavía.</h3><p>Prueba con otro título o vuelve a explorar todo el catálogo.</p><button type="button" className={styles.primary} onClick={() => { setBusqueda(''); setCategoria('Todos'); }}>Mostrar todos los juegos</button></div>}
      </section>
    </div>
  );
}
