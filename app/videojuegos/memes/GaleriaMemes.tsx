'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './memes.module.css';

export const metadata = {
    keyword:['Memes', 'videojuegos','memes de videojuegos', ]
}

const filtros = ['Todos', 'random', 'XD', 'meme'];

const memes = [
    { titulo: 'XD',                categoria: 'XD',   icono: 'sol' },
    { titulo: 'Guayaba',          categoria: 'random',   icono: 'vida' },
    { titulo: 'Pero qué',                     categoria: 'Vida gamer',   icono: 'pocion' },
    { titulo: 'Mariobros',         categoria: 'meme',     icono: 'bloques' },
    { titulo: 'Metroid es clave',   categoria: 'XD', icono: 'conexion' },
    { titulo: 'elije pibe',                 categoria: 'random',     icono: 'guardar' },
];

type Meme = typeof memes[number];

// 🔑 Un mapa de icono → ruta de imagen
const imagenes: Record<string, string> = {
    sol:      '/imagenes/videojuegos_memes/1.jpeg',
    vida:     '/imagenes/videojuegos_memes/2.jpeg',
    pocion:   '/imagenes/videojuegos_memes/3.jpeg',
    bloques:  '/imagenes/videojuegos_memes/4.jpeg',
    conexion: '/imagenes/videojuegos_memes/5.jpeg',
    guardar:  '/imagenes/videojuegos_memes/6.jpeg',
};

function Lamina({ meme }: { meme: Meme }) {
    return (
        <div className={styles.lamina}>
            <Image
                src={imagenes[meme.icono]}
                alt={meme.titulo}
                width={320}
                height={160}
                className={styles.memeImg}
            />
        </div>
    );
}

export default function GaleriaMemes() {
    const [filtro, setFiltro] = useState('Todos');
    const [indice, setIndice] = useState(0);
    const dialogo = useRef<HTMLDialogElement>(null);

    const visibles = memes.filter(
        (meme) => filtro === 'Todos' || meme.categoria === filtro
    );
    const seleccionado = visibles[indice];

    function mover(paso: number) {
        setIndice((actual) => (actual + paso + visibles.length) % visibles.length);
    }

    return (
        <section className={styles.gallery} aria-labelledby="galeria-titulo">
            <div className={styles.heading}>
                <h2 id="galeria-titulo">El punto de encuentro gamer</h2>
                <span>{visibles.length} memes</span>
            </div>

            <p className={styles.note}>
                Memes originales de Isekai Respawn. Toca cualquiera para ampliarlo.
            </p>

            <div className={styles.filters} aria-label="Filtrar memes">
                {filtros.map((item) => (
                    <button
                        key={item}
                        aria-pressed={filtro === item}
                        onClick={() => {
                            setFiltro(item);
                            setIndice(0);
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {visibles.map((meme, posicion) => (
                    <button
                        className={styles.card}
                        key={meme.titulo}
                        onClick={() => {
                            setIndice(posicion);
                            dialogo.current?.showModal();
                        }}
                        aria-label={`Ampliar meme: ${meme.titulo}`}
                    >
                        <Lamina meme={meme} />
                        <span className={styles.caption}>
              <span>
                <small>{meme.categoria}</small>
                <strong>{meme.titulo}</strong>
              </span>
              <span aria-hidden="true">↗</span>
            </span>
                    </button>
                ))}
            </div>

            <dialog
                ref={dialogo}
                className={styles.dialog}
                aria-labelledby="meme-titulo"
                onClick={(event) => {
                    if (event.target === event.currentTarget) dialogo.current?.close();
                }}
                onKeyDown={(event) => {
                    if (event.key === 'ArrowRight') mover(1);
                    if (event.key === 'ArrowLeft') mover(-1);
                }}
            >
                <div className={styles.dialogTop}>
                    <span>PAUSA PARA REÍR · {indice + 1} / {visibles.length}</span>
                    <button autoFocus onClick={() => dialogo.current?.close()} aria-label="Cerrar meme">
                        ✕
                    </button>
                </div>

                <Lamina meme={seleccionado} />
                <h2 id="meme-titulo">{seleccionado.titulo}</h2>
                <p className={styles.note}>{seleccionado.categoria} · Meme original</p>

                <div className={styles.controls}>
                    <button onClick={() => mover(-1)}>← Anterior</button>
                    <button onClick={() => mover(1)}>Siguiente →</button>
                </div>
            </dialog>
        </section>
    );
}
