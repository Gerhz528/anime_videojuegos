'use client';

import { useState } from 'react';
import NoticiaCard from './NoticiaCard';
import { noticias } from './noticias';
import styles from './noticias.module.css';

const categorias = ['Todas', 'Anime', 'Videojuegos'] as const;
type Categoria = (typeof categorias)[number];

const normalizar = (texto: string) =>
    texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();


export default function NoticiasClient({
    categoriaInicial = 'Todas',
}: {
    categoriaInicial?: Categoria;
}) {
    const [categoria, setCategoria] = useState<Categoria>(categoriaInicial);
    const [busqueda, setBusqueda] = useState('');
    const visibles = noticias.filter((n) => {
        const coincideCategoria =
            categoria === 'Todas' || n.categoria === categoria;
        const coincideBusqueda = normalizar(
            `${n.titulo} ${n.resumen}`
        ).includes(normalizar(busqueda.trim()));
        return coincideCategoria && coincideBusqueda;
    });

    const limpiarFiltros = () => {
        setBusqueda('');
        setCategoria('Todas');
    };

    return (
        <section id="noticias" className={styles.seccion} aria-labelledby="titulo-lista">
           
            <div className={styles.heading}>
                <div>
                    <span className={styles.eyebrow}>DESCUBRE · LEE · COMPARTE</span>
                    <h2 id="titulo-lista">Últimas noticias</h2>
                    <p>Anime y videojuegos, sin anuncios y al día.</p>
                </div>
                <span className={styles.total}>
                    {noticias.length.toString().padStart(2, '0')}{' '}
                    <span>noticias publicadas</span>
                </span>
            </div>

           
            <div className={styles.toolbar}>
                <div className={styles.filters} role="group" aria-label="Filtrar por categoría">
                    {categorias.map((item) => {
                        const cantidad =
                            item === 'Todas'
                                ? noticias.length
                                : noticias.filter((n) => n.categoria === item).length;
                        return (
                            <button
                                key={item}
                                type="button"
                                aria-pressed={categoria === item}
                                className={categoria === item ? styles.active : ''}
                                onClick={() => setCategoria(item)}
                            >
                                {item}
                                <span>{cantidad}</span>
                            </button>
                        );
                    })}
                </div>

                <div className={styles.search}>
                    <label htmlFor="buscar-noticia" className={styles.srOnly}>
                        Buscar noticia por título o contenido
                    </label>
                    <span aria-hidden="true">⌕</span>
                    <input
                        id="buscar-noticia"
                        type="search"
                        placeholder="Busca una noticia…"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
            </div>

            
            <p className={styles.results} role="status">
                {visibles.length}{' '}
                {visibles.length === 1
                    ? 'noticia encontrada'
                    : 'noticias encontradas'}
            </p>

            
            {visibles.length === 0 ? (
                <div className={styles.empty}>
                    <h3>No encontramos esa noticia… todavía.</h3>
                    <p>Prueba con otra palabra o vuelve a ver todas las noticias.</p>
                    <button type="button" className={styles.btnPrimary} onClick={limpiarFiltros}>
                        Mostrar todas las noticias
                    </button>
                </div>
            ) : (
                <div className={styles.grid}>
                    {visibles.map((n) => (
                        <NoticiaCard key={n.id} noticia={n} />
                    ))}
                </div>
            )}
        </section>
    );
}