export interface MemeAnime {
  id: string;
  titulo: string;
  categoria: 'Emisión' | 'Clásicos' | 'Shonen' | 'Comedia';
  imagen: string;
  likes: number;
}

export const memesAnime: MemeAnime[] = [
 {
    id: '1',
    titulo: 'Yo cuando digo "Si tienes hambre Pues come" y nadie entiende La One Piece referencia',
    categoria: 'Emisión',
    imagen: '/imagenes/anime/memes/meme1.jpeg',
    likes: 342,
  },
  {
    id: '2',
    titulo: 'Mamá: "De seguro ya se durmió" — Yo a las 3 de la mañana yendo a mi cuarto con el pequeño buffet que me preparé:',
    categoria: 'Emisión',
    imagen: '/imagenes/anime/memes/meme2.jpeg',
    likes: 512,
  },
  {
    id: '3',
    titulo: 'Zoro: ¿Dónde está tu barco y cuántos miembros somos? — Luffy: (El prota de shonen cuando le recuerdan el poder de la amistad)',
    categoria: 'Shonen',
    imagen: '/imagenes/anime/memes/meme3.jpeg',
    likes: 289,
  },
  {
    id: '4',
    titulo: 'Psicólogos ahora vs Psicólogos antes (Si no cambias te tocan 10000 voltios)',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme4.jpeg',
    likes: 420,
  },
  {
    id: '5',
    titulo: 'Mis últimas 3 neuronas tratando de resolver mis problemas',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme5.jpeg',
    likes: 420,
  },
  {
    id: '6',
    titulo: 'Alguien me cuenta sus problemas* — Yo pensando en cómo decirle que es su culpa:',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme6.jpeg',
    likes: 420,
  },
  {
    id: '7',
    titulo: 'Yo en mi primer día viendo como borré la base de datos de toda la empresa:',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme7.jpeg',
    likes: 420,
  },
  {
    id: '8',
    titulo: 'Viendo como la persona a la que recomendaste una serie se acerca al capítulo que te destrozó la vida.',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme8.jpeg',
    likes: 420,
  },
  {
    id: '9',
    titulo: '1er año de universidad vs 7mo año de universidad (eran 5)',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme9.jpeg',
    likes: 420,
  },
  {
    id: '10',
    titulo: 'Mira chavito estas son películas pero de las God',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme10.jpeg',
    likes: 420,
  },
  {
    id: '11',
    titulo: 'Todos trabajando para mantener a su familia — Yo trabajando para pagar Crunchyroll',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme11.jpeg',
    likes: 420,
  },
  {
    id: '12',
    titulo: 'Cómo va a hacer daño la Maruchan si Naruto comía eso diario y era el más perrón.',
    categoria: 'Clásicos',
    imagen: '/imagenes/anime/memes/meme12.jpeg',
    likes: 420,
  },
];