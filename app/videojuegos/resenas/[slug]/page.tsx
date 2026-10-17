import { crearMetadataVideojuegos } from '../../metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { juegos } from '../../juegos';
import { obtenerResena } from '../resenas';
import Portada from '../Portada';
import ValoracionUsuarios from '../../ValoracionUsuarios';
import styles from '../resenas.module.css';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return juegos.filter((juego) => obtenerResena(juego.id)).map((juego) => ({ slug: juego.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const juego = juegos.find((item) => item.id === slug);
  if (!juego || !obtenerResena(slug)) notFound();
  return crearMetadataVideojuegos({
    titulo: `${juego.titulo}: reseña y valoraciones`,
    descripcion: `Reseña de ${juego.titulo} sin spoilers: jugabilidad, historia, gráficos y sonido. Consulta sus puntos fuertes y las valoraciones de jugadores en PC.`,
    ruta: `/videojuegos/resenas/${juego.id}`,
    palabrasClave: [juego.titulo, `reseña ${juego.titulo}`, `análisis ${juego.titulo}`, juego.genero, juego.desarrollador, 'reseñas sin spoilers', 'valoraciones de jugadores'],
    imagen: juego.imagenResena,
    tipo: 'article',
  });
}

export default async function ResenaPage({ params }: Props) {
  const { slug } = await params;
  const juego = juegos.find((item) => item.id === slug);
  const resena = obtenerResena(slug);
  if (!juego || !resena) notFound();
  const apartados = [
    { id: 'jugabilidad', titulo: 'Jugabilidad', texto: resena.jugabilidad, numero: '01' },
    { id: 'historia', titulo: 'Historia, sin spoilers', texto: resena.historia, numero: '02' },
    { id: 'graficos', titulo: 'Gráficos y dirección artística', texto: resena.graficos, numero: '03' },
    { id: 'sonido', titulo: 'Sonido y ambientación', texto: resena.sonido, numero: '04' },
  ];

  return (
    <article className={styles.wrap}>
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span>/</span><Link href="/videojuegos">Videojuegos</Link><span>/</span><Link href="/videojuegos/resenas">Reseñas</Link><span>/</span><span>{juego.titulo}</span></nav>
      <header className={styles.gameHeading}><span className={styles.eyebrow}>RESEÑA EDITORIAL · SIN SPOILERS</span><h1>{juego.titulo}</h1><p>{resena.titular}</p></header>
      <div className={styles.showcase}>
        <div className={styles.visual}><Portada imagen={juego.imagenResena} titulo={juego.titulo} principal /><div className={styles.visualCaption}><span>{juego.genero}</span><span>{juego.categoria}</span></div></div>
        <aside className={styles.gameInfo} aria-label="Ficha del videojuego">
          <span className={styles.eyebrow}>TU PRÓXIMA AVENTURA</span><h2>Sobre el juego</h2><p>{juego.descripcion}</p>
          <ValoracionUsuarios id={juego.id} />
          <dl><div><dt>Desarrollador</dt><dd>{juego.desarrollador}</dd></div><div><dt>Lanzamiento en PC</dt><dd>{juego.anio}</dd></div><div><dt>Plataforma de esta ficha</dt><dd>PC · Steam</dd></div><div><dt>Género</dt><dd>{juego.genero}</dd></div></dl>
          <a className={styles.primary} href="#analisis">Leer análisis <span aria-hidden="true">↓</span></a><a className={styles.source} href={juego.fuente} target="_blank" rel="noopener noreferrer">Ficha oficial y requisitos ↗<span className={styles.srOnly}> (abre en otra pestaña)</span></a>
        </aside>
      </div>
      <nav className={styles.steps} aria-label="Recorrido de videojuegos"><Link href="/videojuegos/informacion">01 Información</Link><span aria-current="step">02 Reseña del juego</span><Link href="/videojuegos/memes">03 Memes →</Link></nav>
      <div id="analisis" className={styles.analysisLayout}>
        <nav className={styles.contents} aria-label="Contenido de la reseña"><span className={styles.eyebrow}>EN ESTA RESEÑA</span>{apartados.map((apartado) => <a key={apartado.id} href={`#${apartado.id}`}><span>{apartado.numero}</span>{apartado.titulo}</a>)}<a href="#veredicto"><span>05</span>Veredicto</a><Link className={styles.backLink} href="/videojuegos/resenas">← Todas las reseñas</Link></nav>
        <div className={styles.analysisBody}>
          <div className={styles.lead}><span className={styles.eyebrow}>LA PROPUESTA</span><p>{resena.introduccion}</p></div>
          {apartados.map((apartado) => <section id={apartado.id} className={styles.analysisSection} key={apartado.id}><span className={styles.number}>{apartado.numero}</span><div><h2>{apartado.titulo}</h2><p>{apartado.texto}</p></div></section>)}
          <div className={styles.balance}><section><h2><span aria-hidden="true">＋</span> Puntos fuertes</h2><ul>{resena.fortalezas.map((texto) => <li key={texto}>{texto}</li>)}</ul></section><section><h2><span aria-hidden="true">◇</span> A tener en cuenta</h2><ul>{resena.considerar.map((texto) => <li key={texto}>{texto}</li>)}</ul></section></div>
          <section id="veredicto" className={styles.verdict}><span className={styles.eyebrow}>05 / NUESTRO VEREDICTO</span><h2>¿Es tu próxima partida?</h2><p>{resena.veredicto}</p><div><span>IDEAL PARA</span><strong>{resena.idealPara}</strong></div></section>
        </div>
      </div>
      <section className={styles.nextStop} aria-labelledby="siguiente-parada"><div><span className={styles.eyebrow}>03 / SIGUIENTE PARADA</span><h2 id="siguiente-parada">Después de la partida, una sonrisa.</h2><p>Continúa hacia nuestro espacio de humor gamer.</p></div><Link href="/videojuegos/memes" className={styles.primary}>Ir a memes <span aria-hidden="true">→</span></Link></section>
    </article>
  );
}
