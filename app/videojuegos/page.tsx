import type { Metadata } from 'next';
import Catalogo from './Catalogo';

export const metadata: Metadata = {
  title: 'Videojuegos | Isekai Respawn',
  description: 'Explora videojuegos recientes y clásicos. Descubre historias, géneros y nuevos mundos en nuestro catálogo.',

  keywords: ['videojuegos','noticias de videojuegos sin anuncios', 'videojuegos 2026' ],
  openGraph: {
    type: 'website',
    title: `Isekai Respawn`,
    description: `Tu portal a nuevos mundos.`,
    images:[{
      url:'/imagen_principal_inde.jpg',
      alt: 'Imagen de isekai respawn',
    }],
    url:'/videojuegos',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Isekai Respawn',
    description: 'Tu portal a nuevos mundos.',
    images: ['/imagen_principal_inde.jpg'],
  },

};

export default function VideojuegosPage() {
  return <Catalogo />;
}
