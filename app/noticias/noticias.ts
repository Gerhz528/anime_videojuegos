export type Estreno = {
  titulo: string;
  fecha: string;
  plataforma?: string;   
  estudio?: string;      
  descripcion: string;
};

export type Noticia = {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: 'Anime' | 'Videojuegos';
  imagen?: string;
  etiqueta?: string;
  destacada?: boolean;
  estrenos?: Estreno[]; 
};

export const noticias: Noticia[] = [
  
  {
    id: 'anime-1',
    titulo: 'La película de The Apothecary Diaries llegará a los cines de todo el mundo',
    resumen:
      'Maomao no se cansa de resolver misterios y ahora dará el salto definitivo a la pantalla grande a nivel internacional. Crunchyroll anunció oficialmente la adquisición de los derechos de distribución mundial (excluyendo Asia) para la esperada película animada de la franquicia, titulada Kusuriya no Hitorigoto: Bohi no Hiho (The Apothecary Diaries: The Late Lady’s Treasure).',
    fecha: '10 oct 2026',
    categoria: 'Anime',
    etiqueta: 'ANIME',
    destacada: true,
    imagen: 'https://pub-f326d70e7a38422993ce7cd305c22dfb.r2.dev/2026/10/4-descarga-2.jpg',
  },
  {
    id: 'vj-1',
    titulo: 'Resident Evil Requiem iba a ser un juego en línea, pero Capcom cambió sus planes',
    resumen:
      'El desarrollo de Resident Evil Requiem pasó por varios cambios antes de convertirse en la nueva entrega de la popular franquicia de terror de CAPCOM. Aunque el resultado final apuesta por el horror y la supervivencia, el proyecto comenzó con una idea bastante distinta: ofrecer una experiencia centrada en el juego en línea.',
    fecha: '09 oct 2026',
    categoria: 'Videojuegos',
    etiqueta: 'GAMING',
    imagen: 'https://www.levelup.com/resizer/v2/EP3RSIIH6JHEHEGYGFE6BCAIHM.jpg?auth=895e6bacc6b15e49c2413409bf2ef11fc540181b2faa557e7f8371a47bebccf2&smart=true&width=768&height=469&quality=70',
  },

 
  {
    id: 'anime-estrenos-2026',
    titulo: 'Estrenos de Anime – Octubre 2026',
    resumen:
      'Los animes que llegan este mes: nuevas temporadas, regresos esperados y estrenos que no te puedes perder.',
    fecha: '11 oct 2026',
    categoria: 'Anime',
    etiqueta: 'ESTRENOS',
    destacada: true,
    estrenos: [
      {
        titulo: 'Black Clover – Temporada 2',
        fecha: '3 de octubre de 2026',
        estudio: 'Studio Pierrot',
        descripcion:
          'Asta y los Caballeros Mágicos regresan para enfrentarse a nuevas amenazas y proteger el Reino del Trébol. Marca el regreso de una de las series de fantasía y acción más populares del anime.',
      },
      {
        titulo: 'Los diarios de la boticaria – Temporada 3',
        fecha: '2 de octubre de 2026',
        descripcion:
          'Maomao vuelve a utilizar sus conocimientos sobre medicina, venenos y sustancias misteriosas para resolver nuevos enigmas dentro de la corte imperial.',
      },
      {
        titulo: 'Dragon Ball Super: Beerus',
        fecha: '11 de octubre de 2026',
        estudio: 'Toei Animation',
        descripcion:
          'Beerus, el Dios de la Destrucción, despierta y pone en peligro la tranquilidad de Goku y sus amigos. Presenta nuevamente el enfrentamiento entre Goku y uno de los seres más poderosos del universo.',
      },
    ],
  },

 
  {
    id: 'vj-estrenos-2026',
    titulo: 'Estrenos de Videojuegos – Octubre 2026',
    resumen:
      'Los lanzamientos más destacados del mes: colecciones, nuevos títulos y remasterizaciones que llegan al mercado.',
    fecha: '11 oct 2026',
    categoria: 'Videojuegos',
    etiqueta: 'LANZAMIENTOS',
    destacada: true,
    estrenos: [
      {
        titulo: 'Kingdom Hearts Collection I–III',
        fecha: '8 de octubre de 2026',
        plataforma: 'Nintendo Switch 2',
        descripcion:
          'Esta colección reúne las aventuras de Sora en el universo de Kingdom Hearts, donde los mundos de Disney se combinan con personajes y elementos de FINAL FANTASY. Desarrollada por Square Enix.',
      },
      {
        titulo: 'Ratatan',
        fecha: '14 de octubre de 2026',
        plataforma: 'Nintendo Switch 2',
        descripcion:
          'Juego de acción y ritmo en el que los jugadores dirigen personajes y ejércitos al compás de la música. Combina combates, estrategia y mecánicas musicales con un estilo visual colorido.',
      },
      {
        titulo: 'Tales of Eternia Remastered',
        fecha: '15 de octubre de 2026',
        plataforma: 'Nintendo Switch',
        descripcion:
          'Esta versión remasterizada recupera una aventura clásica de la saga Tales, con exploración, personajes y combates propios de los RPG japoneses.',
      },
    ],
  },
];