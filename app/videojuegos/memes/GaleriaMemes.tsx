'use client';

import { useRef, useState } from 'react';
import styles from './memes.module.css';

const filtros = ['Todos', 'Clásicos', 'Juegos actuales', 'Vida gamer'];
const memes = [
  { titulo: 'La última partida', categoria: 'Vida gamer', arriba: 'YO: «UNA PARTIDA MÁS Y ME DUERMO»', abajo: 'EL SOL: BUENOS DÍAS, CAMPEÓN.', icono: 'sol' },
  { titulo: 'El verdadero jefe final', categoria: 'Juegos actuales', arriba: 'VENCÍ AL JEFE CON UN PUNTO DE VIDA', abajo: 'UNA CAÍDA DE DOS METROS: MI TURNO.', icono: 'vida' },
  { titulo: 'Por si acaso', categoria: 'Vida gamer', arriba: 'GUARDO 99 POCIONES PARA UNA EMERGENCIA', abajo: 'MUERO SIN USAR NINGUNA.', icono: 'pocion' },
  { titulo: 'Todo estaba bajo control', categoria: 'Clásicos', arriba: 'SOLO ME FALTA UNA PIEZA LARGA', abajo: 'EL JUEGO: ¿QUÉ TAL OTRO CUADRADO?', icono: 'bloques' },
  { titulo: 'La conexión tiene otros planes', categoria: 'Juegos actuales', arriba: 'MI EQUIPO: «TODO DEPENDE DE TI»', abajo: 'MI INTERNET: HASTA AQUÍ LLEGUÉ.', icono: 'conexion' },
  { titulo: 'Antes de guardar', categoria: 'Clásicos', arriba: 'TRES HORAS JUGANDO SIN GUARDAR', abajo: 'LA LUZ: NOS VEMOS EN EL NIVEL UNO.', icono: 'guardar' },
];
type Meme = typeof memes[number];

function Lamina({ meme }: { meme: Meme }) {
  return <div className={styles.lamina}><p>{meme.arriba}</p><svg viewBox="0 0 320 160" aria-hidden="true" className={styles.art}>
    <path d="M0 145H320" stroke="currentColor" opacity=".2" />
    {meme.icono === 'sol' && <><path d="M45 145Q160 15 275 145" fill="#ECC36F" /><path d="M160 10V30M60 40L75 55M260 40L245 55" stroke="#ECC36F" strokeWidth="7" /><rect x="110" y="95" width="100" height="50" rx="20" fill="#312578" /><path d="M128 117H148M138 107V127" stroke="#EFE391" strokeWidth="5" /><circle cx="180" cy="112" r="5" fill="#E96C72" /><circle cx="193" cy="123" r="5" fill="#E96C72" /></>}
    {meme.icono === 'vida' && <><path d="M25 115H115V145H25M205 60H295V145H205" fill="#312578" /><path d="M142 40L152 30L162 40L172 30L182 40L162 62Z" fill="#E96C72" /><text x="160" y="88" textAnchor="middle" fill="#EFE391" fontSize="20">1 HP</text><path d="M162 100V130M153 121L162 130L171 121" stroke="#ECC36F" strokeWidth="4" /></>}
    {meme.icono === 'pocion' && <>{[65,145,225].map(x => <g key={x}><path d={`M${x} 35h30v30l15 20v45h-60V85l15-20Z`} fill="#312578" stroke="#ECC36F" strokeWidth="3" /><path d={`M${x-8} 100h46v23h-46Z`} fill="#E96C72" /><text x={x+15} y="92" textAnchor="middle" fill="#EFE391" fontSize="18">99</text></g>)}</>}
    {meme.icono === 'bloques' && <>{[0,1,2,3,4,5,6].map(x => [0,1,2].map(y => x===3 ? null : <rect key={`${x}-${y}`} x={55+x*30} y={65+y*27} width="26" height="23" fill={(x+y)%2 ? '#C93E71' : '#ECC36F'} />))}<path d="M148 55V140" stroke="#E96C72" strokeDasharray="4 5" /><path d="M205 10h24v24h-24ZM233 10h24v24h-24ZM205 38h24v24h-24ZM233 38h24v24h-24Z" fill="#E96C72" /></>}
    {meme.icono === 'conexion' && <><path d="M80 60Q160-5 240 60M110 88Q160 45 210 88M140 115Q160 98 180 115" fill="none" stroke="#ECC36F" strokeWidth="10" /><circle cx="160" cy="139" r="7" fill="#ECC36F" /><path d="M95 20L230 145" stroke="#E96C72" strokeWidth="12" /></>}
    {meme.icono === 'guardar' && <><path d="M95 15h115l20 20v110H95Z" fill="#312578" stroke="#ECC36F" strokeWidth="3" /><path d="M120 15h65v45h-65ZM115 90h95v55h-95Z" fill="#ECC36F" /><path d="M162 88l-16 23h18l-9 25 30-35h-20l10-13Z" fill="#C93E71" /><text x="160" y="79" textAnchor="middle" fill="#E96C72" fontSize="12">SIN GUARDAR</text></>}
  </svg><p>{meme.abajo}</p></div>;
}

export default function GaleriaMemes() {
  const [filtro, setFiltro] = useState('Todos');
  const [indice, setIndice] = useState(0);
  const dialogo = useRef<HTMLDialogElement>(null);
  const visibles = memes.filter(meme => filtro === 'Todos' || meme.categoria === filtro);
  const seleccionado = visibles[indice];
  function mover(paso: number) { setIndice(actual => (actual + paso + visibles.length) % visibles.length); }
  return <section className={styles.gallery} aria-labelledby="galeria-titulo">
    <div className={styles.heading}><h2 id="galeria-titulo">El punto de encuentro gamer</h2><span>{visibles.length} memes</span></div>
    <p className={styles.note}>Memes originales de Isekai Respawn. Toca cualquiera para ampliarlo.</p>
    <div className={styles.filters} aria-label="Filtrar memes">{filtros.map(item => <button key={item} aria-pressed={filtro === item} onClick={() => { setFiltro(item); setIndice(0); }}>{item}</button>)}</div>
    <div className={styles.grid}>{visibles.map((meme,posicion) => <button className={styles.card} key={meme.titulo} onClick={() => { setIndice(posicion); dialogo.current?.showModal(); }} aria-label={`Ampliar meme: ${meme.titulo}`}><Lamina meme={meme} /><span className={styles.caption}><span><small>{meme.categoria}</small><strong>{meme.titulo}</strong></span><span aria-hidden="true">↗</span></span></button>)}</div>
    <dialog ref={dialogo} className={styles.dialog} aria-labelledby="meme-titulo" onClick={event => { if(event.target === event.currentTarget) dialogo.current?.close(); }} onKeyDown={event => { if(event.key === 'ArrowRight') mover(1); if(event.key === 'ArrowLeft') mover(-1); }}>
      <div className={styles.dialogTop}><span>PAUSA PARA REÍR · {indice+1} / {visibles.length}</span><button autoFocus onClick={() => dialogo.current?.close()} aria-label="Cerrar meme">✕</button></div>
      <Lamina meme={seleccionado} /><h2 id="meme-titulo">{seleccionado.titulo}</h2><p className={styles.note}>{seleccionado.categoria} · Meme original</p>
      <div className={styles.controls}><button onClick={() => mover(-1)}>← Anterior</button><button onClick={() => mover(1)}>Siguiente →</button></div>
    </dialog>
  </section>;
}
