import Link from 'next/link';
import styles from './videojuegos.module.css';

// ============================================================
// EDITA AQUÍ TUS JUEGOS
// Cada juego es un objeto. Solo cambia o agrega los que quieras.
// ============================================================
type Juego = {
  id: string;
  titulo: string;
  fecha: string;        // ej: "8 de octubre"
  plataformas: string[]; // ej: ["Nintendo Switch 2", "Nintendo Switch"]
  descripcion: string;
  href?: string;        // enlace opcional a más info
};

const mes = 'Octubre de 2026';

const juegos: Juego[] = [
  {
    id: 'kingdom-hearts',
    titulo: 'KINGDOM HEARTS Collection [I～III]',
    fecha: '8 de octubre',
    plataformas: ['Nintendo Switch 2'],
    descripcion:
      '¡Los mundos de Disney y FINAL FANTASY se combinan en estas tres colecciones inolvidables! Disfruta de historias conmovedoras y combates que derrochan estilo por los cuatro costados, en esta serie que gira en torno al enfrentamiento entre la luz y la oscuridad.',
  },
  {
    id: 'order-sinking-star',
    titulo: 'Order of the Sinking Star',
    fecha: '8 de octubre',
    plataformas: ['Nintendo Switch 2'],
    descripcion:
      'Descubre una gran aventura para estrujarte los sesos, que se desarrolla en un lugar donde reinan la magia y los enigmas. Resuelve más de 1000 rompecabezas interconectados y encarna a héroes únicos.',
  },
  {
    id: 'dragons-dogma-2',
    titulo: 'Dragon’s Dogma 2: Dark Arisen',
    fecha: '9 de octubre',
    plataformas: ['Nintendo Switch 2'],
    descripcion:
      '¡Parte a la aventura en compañía de tus leales peones en esta versión expandida del conocidísimo juego de rol y fantasía! Explora una nueva región cubierta de nieve y plántales cara a enemigos desconocidos.',
  },
  {
    id: 'ratatan',
    titulo: 'Ratatan',
    fecha: '14 de octubre',
    plataformas: ['Nintendo Switch 2'],
    descripcion:
      'En este juego de ritmo y acción de estilo «roguelike», librarás intensos y estrambóticos combates de desplazamiento lateral en los que más de 100 personajes se darán para el pelo.',
  },
  {
    id: 'castlevania-belmont',
    titulo: 'Castlevania: Belmont’s Curse',
    fecha: '15 de octubre',
    plataformas: ['Nintendo Switch'],
    descripcion:
      'La legendaria serie Castlevania regresa con una nueva entrega que combina acción acrobática con exploración a fondo. Encarna a Rose Belmont, hija de Trevor Belmont, y lucha para llegar al fondo de una siniestra conspiración.',
  },
  {
    id: 'nintendo-switch-sports-resort',
    titulo: 'Nintendo Switch Sports Resort',
    fecha: '22 de octubre',
    plataformas: ['Nintendo Switch 2'],
    descripcion:
      '¡Viaja a la Isla Wuhu y usa controles de movimiento intuitivos para pasarlo pipa con 12 disciplinas deportivas! Saca tu lado más competitivo en actividades como el boxeo o la guerra de pulgares.',
  },
  {
    id: 'final-fantasy-resonance',
    titulo: 'FINAL FANTASY RESONANCE',
    fecha: '22 de octubre',
    plataformas: ['Nintendo Switch 2', 'Nintendo Switch'],
    descripcion:
      '¡Descubre el primer juego de FINAL FANTASY en HD-2D! Viaja con compañeros a los que te unen los lazos del destino y recurre a las visiones para que te ayuden en combates por turnos.',
  },
  {
    id: 'cod-mw4',
    titulo: 'Call of Duty: Modern Warfare 4',
    fecha: '23 de octubre',
    plataformas: ['Nintendo Switch 2'],
    descripcion:
      'La nueva entrega de la serie superventas de juegos de disparos llega a Nintendo Switch 2. Lucha en la península de Corea y más allá en la Campaña, enfréntate a amigos y enemigos en el Multijugador y haz que cada extracción cuente en DMZ.',
  },
  {
    id: 'minecraft',
    titulo: 'Minecraft',
    fecha: '27 de octubre',
    plataformas: ['Nintendo Switch 2'],
    descripcion:
      'Dentro de nada llegará una versión mejorada de Minecraft, ¡ahora con «Vibrant Visuals» (gráficos vívidos)! Explora mundos generados aleatoriamente y construye cosas increíbles, desde humildes casas hasta imponentes castillos.',
  },
  // 👉 Agrega más juegos copiando y pegando el bloque de arriba
];

export const metadata = {
  title: 'Noticias de Videojuegos | Isekai Respawn',
  description:
    'Lanzamientos, actualizaciones, eventos y novedades del mundo gamer. Próximos juegos y estrenos del mes.',
  keywords: [
    'noticias de videojuegos',
    'próximos juegos',
    'lanzamientos de videojuegos',
    'novedades gaming',
    'nintendo switch 2',
    'playstation 5',
    'xbox series',
  ],
  openGraph: {
    title: 'Noticias de Videojuegos | Isekai Respawn',
    description: 'Lanzamientos y novedades del mundo gamer.',
    type: 'website',
  },
};

export default function NoticiasVideojuegosPage() {
  return (
    <div className={styles.wrap}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span className={styles.sep}>&gt;</span>
        <Link href="/noticias">Noticias</Link>
        <span className={styles.sep}>&gt;</span>
        <span className={styles.actual}>Videojuegos</span>
      </nav>

      {/* Encabezado */}
      <h1 className={styles.titulo}>Próximos juegos – {mes}</h1>
      <p className={styles.fechaMes}>Publicado el 30-09-2026</p>
      <p className={styles.intro}>
        Échale un ojo a este repertorio de títulos que llegan dentro de poco.
        Aquí encontrarás los lanzamientos más destacados del mes, con su fecha,
        plataformas y una breve descripción de cada uno.
      </p>

      {/* Lista de juegos */}
      {juegos.length === 0 ? (
        <div className={styles.vacio}>
          Aún no hay juegos publicados este mes. Vuelve pronto. 🎮
        </div>
      ) : (
        <div className={styles.lista}>
          {juegos.map((j) => (
            <article key={j.id} className={styles.juego}>
              <div className={styles.juegoHeader}>
                <h2 className={styles.juegoTitulo}>{j.titulo}</h2>
                <span className={styles.juegoFecha}>– {j.fecha}</span>
              </div>

              <div className={styles.plataformas}>
                {j.plataformas.map((p) => (
                  <span key={p} className={styles.plataforma}>
                    {p}
                  </span>
                ))}
              </div>

              <p className={styles.juegoDesc}>{j.descripcion}</p>

              {j.href && (
                <Link href={j.href} className={styles.btn}>
                  Más información
                </Link>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}