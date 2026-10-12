import type { CSSProperties } from 'react';
import styles from './videojuegos.module.css';

// Pequeñas ilustraciones vectoriales.
const paleta: Record<string, string> = {
  r: '#E96C72', y: '#EFE391', b: '#312578', s: '#ECC36F',
  d: '#804d37', l: '#b17a50', m: '#C93E71', c: '#82b8cc',
};

const fontanero = [
  '.....rrrrrr.....', '....rrrrrrrrrr..', '....ddssds......',
  '...dsdsssds.....', '...dsddsssdd....', '....dssssss.....',
  '.....sssss......', '....rrbrrbrr....', '...rrrbrrbrrr...',
  '..rrrrbbbbrrrr..', '..ssrbybbybrss..', '..sssbbbbbbsss..',
  '....bbbbbbbb....', '....bbb..bbb....', '...ddd....ddd...',
  '..dddd....dddd..',
];
const gorila = [
  '.....dddddd.....', '....dddddddd....', '...ddlllllldd...',
  '...dldlddldld...', '...dllllllll d..'.replaceAll(' ', ''),
  '....lll ddlll....'.replaceAll(' ', ''), '....llllllll....',
  '..ddddrrrrdddd..', '.dddddr y rddddd.'.replaceAll(' ', ''),
  'ddddddrrrrdddddd', 'ddllddddddddll dd'.replaceAll(' ', ''),
  'llll dddddddd llll'.replaceAll(' ', ''), '.lll dddddddd lll.'.replaceAll(' ', ''),
  '....dddddddd....', '...ddd....ddd...', '..llll....llll..',
];
const seta = [
  '.....rrrrrr.....', '...rrryyyrrrr...', '..rrrryyyrrrrr..',
  '.yyrrrrrrryyyrr.', '.yyrrrrrrryyyrr.', 'rrrrryyyrrrrrrrr',
  'rrrrryyyrrrrrrrr', '.rrrrrrrrrrrrrr.', '...ssssssssss...',
  '...ssbssssbss...', '...ssbssssbss...', '....ssssssss....',
];

function PixelSprite({ filas }: { filas: string[] }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
      {filas.flatMap((fila, y) => [...fila].map((color, x) =>
        paleta[color] ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={paleta[color]} /> : null
      ))}
    </svg>
  );
}

export default function GalaxiaArcade() {
  return (
    <section className={styles.galaxy} aria-labelledby="titulo-galaxia">
      <div className={styles.cosmos} aria-hidden="true">
        <div className={styles.nebula} />
        <div className={styles.starfield}>
          {Array.from({ length: 36 }, (_, i) => <span key={i} className={styles.star} style={{
            '--x': `${(i * 37 + 5) % 100}%`, '--y': `${(i * 23 + 9) % 100}%`,
            '--size': `${i % 4 === 0 ? 3 : 1.5}px`, '--delay': `${-i * .7}s`,
            '--duration': `${7 + i % 5}s`,
          } as CSSProperties} />)}
        </div>
        {Array.from({ length: 5 }, (_, i) => <span key={i} className={styles.shootingStar} style={{
          '--x': `${15 + i * 20}%`, '--y': `${15 + (i * 17) % 50}%`,
          '--delay': `${-i * 2.7}s`, '--duration': `${8 + i * 1.3}s`,
        } as CSSProperties} />)}
        <div className={styles.orbit} />
        <div className={styles.orbitTwo} />
        <div className={`${styles.relic} ${styles.pacmanRelic}`}>
          <div className={styles.relicFloat}>
            <svg viewBox="0 0 64 64"><path d="M32 32 L59 13 A30 30 0 1 0 59 51 Z" fill="var(--amarillo-claro)" /><circle cx="34" cy="13" r="3" fill="#080326" /><circle cx="61" cy="32" r="2" fill="var(--coral)" /></svg>
            <span>PAC-MAN</span>
          </div>
        </div>
        <div className={`${styles.relic} ${styles.marioRelic}`}><div className={styles.relicFloat}><PixelSprite filas={fontanero} /><span>SUPER MARIO BROS.</span></div></div>
        <div className={`${styles.relic} ${styles.tetrisRelic}`}>
          <div className={styles.relicFloat}>
            <svg viewBox="0 0 80 80" shapeRendering="crispEdges">
              {[[20, 0], [0, 20], [20, 20], [40, 20]].map(([x, y]) => <g key={`${x}-${y}`}><rect x={x} y={y} width="18" height="18" fill="var(--magenta)" /><path d={`M${x + 2} ${y + 16} V${y + 2} H${x + 16}`} fill="none" stroke="var(--coral)" strokeWidth="2" /></g>)}
              {[[40, 40], [60, 40], [40, 60], [60, 60]].map(([x, y]) => <g key={`${x}-${y}`}><rect x={x} y={y} width="18" height="18" fill="var(--amarillo)" /><path d={`M${x + 2} ${y + 16} V${y + 2} H${x + 16}`} fill="none" stroke="var(--amarillo-claro)" strokeWidth="2" /></g>)}
            </svg><span>TETRIS</span>
          </div>
        </div>
        <div className={`${styles.relic} ${styles.kongRelic}`}><div className={styles.relicFloat}><PixelSprite filas={gorila} /><span>DONKEY KONG</span></div></div>
        <div className={`${styles.relic} ${styles.mushroomRelic}`}><div className={styles.relicFloat}><PixelSprite filas={seta} /></div></div>
        <div className={`${styles.relic} ${styles.bonusRelic}`}><div className={styles.relicFloat}><svg viewBox="0 0 64 64"><path d="M32 3 40 22 61 24 45 38 50 59 32 48 14 59 19 38 3 24 24 22Z" fill="var(--amarillo)" /><path d="M26 25v9m12-9v9" stroke="var(--casi-negro)" strokeWidth="4" strokeLinecap="round" /></svg></div></div>
      </div>
      <div className={styles.galaxyCopy}>
        <span className={styles.eyebrow}>BIENVENIDO A LA GALAXIA ARCADE</span>
        <h2 id="titulo-galaxia">Fuera de este mundo.<br /><span>Dentro de tu historia.</span></h2>
        <p>Hay juegos que no se quedan en una pantalla.<br />Se quedan contigo, para siempre.</p>
      </div>
      <div className={styles.galaxyExit}><span aria-hidden="true">↓</span><span>EL VIAJE CONTINÚA</span></div>
    </section>
  );
}
