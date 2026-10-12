import type { Metadata } from 'next';
import Link from 'next/link';
import { juegos } from '../juegos';
import { obtenerResena } from './resenas';
import Portada from './Portada';
import ValoracionUsuarios from '../ValoracionUsuarios';
import styles from './resenas.module.css';

export const metadata: Metadata = {
  title: 'Reseñas de videojuegos | Isekai Respawn',
  description: 'Explora nuestras reseñas editoriales de videojuegos recientes y clásicos. Jugabilidad, historia, arte y veredicto sin spoilers.',
};

export default function ResenasPage() {
  return (
    <div className={styles.wrap}>
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span>/</span><Link href="/videojuegos">Videojuegos</Link><span>/</span><span>Reseñas</span></nav>
      <header className={styles.intro}>
        <span className={styles.eyebrow}>02 / RESEÑAS · SIN SPOILERS</span>
        <h1>Antes de tu próxima partida.</h1>
        <p>Conoce lo que propone cada juego. Explora su mundo, descubre sus puntos fuertes y encuentra una aventura que encaje contigo.</p>
        <nav className={styles.steps} aria-label="Apartados de videojuegos"><Link href="/videojuegos/informacion">01 Información</Link><span aria-current="page">02 Reseñas</span><Link href="/videojuegos/memes">03 Memes →</Link></nav>
      </header>
      {(['Recientes', 'Clásicos'] as const).map((categoria) => (
        <section className={styles.selection} key={categoria} aria-labelledby={`resenas-${categoria}`}>
          <div className={styles.sectionHeading}><h2 id={`resenas-${categoria}`}>{categoria === 'Recientes' ? 'Nuevos mundos por descubrir' : 'Clásicos que siguen contigo'}</h2><span>{categoria}</span></div>
          <div className={styles.grid}>
            {juegos.filter((juego) => juego.categoria === categoria && obtenerResena(juego.id)).map((juego) => (
              <Link className={styles.reviewCard} href={`/videojuegos/resenas/${juego.id}`} key={juego.id}>
                <Portada imagen={juego.imagenResena} titulo={juego.titulo} />
                <div className={styles.cardBody}><div className={styles.meta}><span>{juego.genero}</span><span>{juego.anio}</span></div><h3>{juego.titulo}</h3><p>{obtenerResena(juego.id)?.titular}</p><ValoracionUsuarios id={juego.id} compacta enlazarFuente={false} /><span className={styles.cardAction}>Leer reseña <span aria-hidden="true">↗</span></span></div>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <p className={styles.editorialNote}>Análisis editoriales basados en las descripciones oficiales de los juegos. Datos e imágenes: fichas de Steam enlazadas en cada reseña.</p>
    </div>
  );
}

