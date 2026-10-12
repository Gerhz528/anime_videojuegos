export type Juego = {
  id: string;
  titulo: string;
  categoria: 'Recientes' | 'Clásicos';
  genero: string;
  anio: number;
  desarrollador: string;
  descripcion: string;
  imagen: string;
  imagenResena: string;
  fuente: string;
};

// Selección inicial. Año de lanzamiento de la versión de PC.
// Las fichas oficiales enlazadas son la fuente de datos e imágenes (steam).
export const juegos: Juego[] = [
  {
    id: 'silksong', titulo: 'Hollow Knight: Silksong', categoria: 'Recientes',
    genero: 'Metroidvania', anio: 2025, desarrollador: 'Team Cherry',
    descripcion: 'Acompaña a Hornet en su ascenso por un reino de seda y canción. Explora caminos secretos y domina combates acrobáticos en una aventura dibujada a mano.',
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/7983574d464e6559ac7e24275727f73a8bcca1f3/header.jpg',
    imagenResena: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/7983574d464e6559ac7e24275727f73a8bcca1f3/header_2x.jpg',
    fuente: 'https://store.steampowered.com/app/1030300/',
  },
  {
    id: 'expedition-33', titulo: 'Clair Obscur: Expedition 33', categoria: 'Recientes',
    genero: 'RPG por turnos', anio: 2025, desarrollador: 'Sandfall Interactive',
    descripcion: 'Una expedición desafía el destino en un mundo inspirado en la Belle Époque. Sus combates mezclan estrategia por turnos con acciones en tiempo real.',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1903340/be3305b02d4db0dffa3458537118423bf2792d7e/header.jpg',
    imagenResena: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1903340/be3305b02d4db0dffa3458537118423bf2792d7e/header_2x.jpg',
    fuente: 'https://store.steampowered.com/app/1903340/',
  },
  {
    id: 'hades-2', titulo: 'Hades II', categoria: 'Recientes',
    genero: 'Acción · Roguelike', anio: 2025, desarrollador: 'Supergiant Games',
    descripcion: 'Encárnate en Melínoe y desafía al Titán del Tiempo. Combina magia, armas y dones del Olimpo en un viaje donde cada intento abre nuevas posibilidades.',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg',
    imagenResena: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header_2x.jpg',
    fuente: 'https://store.steampowered.com/app/1145350/',
  },
  {
    id: 'half-life-2', titulo: 'Half-Life 2', categoria: 'Clásicos',
    genero: 'Acción · FPS', anio: 2004, desarrollador: 'Valve',
    descripcion: 'Regresa como Gordon Freeman a una Tierra bajo ocupación alienígena. Una aventura de ciencia ficción que combina acción, física y narrativa ambiental.',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220/header.jpg',
    imagenResena: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220/header_2x.jpg',
    fuente: 'https://store.steampowered.com/app/220/',
  },
  {
    id: 'portal', titulo: 'Portal', categoria: 'Clásicos',
    genero: 'Puzles', anio: 2007, desarrollador: 'Valve',
    descripcion: 'Piensa más allá de las paredes. Usa portales para resolver las cámaras de prueba de Aperture Science en una aventura de ingenio y humor oscuro.',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/400/header.jpg',
    imagenResena: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/0000002582.1920x1080.jpg',
    fuente: 'https://store.steampowered.com/app/400/',
  },
  {
    id: 'stardew-valley', titulo: 'Stardew Valley', categoria: 'Clásicos',
    genero: 'Simulación · RPG', anio: 2016, desarrollador: 'ConcernedApe',
    descripcion: 'Convierte una granja heredada en tu nuevo hogar. Cultiva, explora y conoce a los habitantes del valle en este clásico del mundo independiente.',
    imagen: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg',
    imagenResena: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg',
    fuente: 'https://store.steampowered.com/app/413150/',
  },
];

