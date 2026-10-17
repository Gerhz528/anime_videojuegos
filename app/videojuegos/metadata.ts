import type { Metadata } from 'next';

type DatosSEO = {
  titulo: string;
  descripcion: string;
  ruta: string;
  palabrasClave: string[];
  imagen?: string;
  tipo?: 'website' | 'article';
};

export function crearMetadataVideojuegos({ titulo, descripcion, ruta, palabrasClave, imagen = '/informacion.jpg', tipo = 'website' }: DatosSEO): Metadata {
  const tituloCompleto = `${titulo} | Isekai Respawn`;
  return {
    title: { absolute: tituloCompleto },
    description: descripcion,
    keywords: palabrasClave,
    category: 'Videojuegos',
    applicationName: 'Isekai Respawn',
    authors: [{ name: 'Isekai Respawn' }],
    alternates: { canonical: ruta },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    openGraph: {
      type: tipo,
      title: tituloCompleto,
      description: descripcion,
      url: ruta,
      siteName: 'Isekai Respawn',
      locale: 'es_SV',
      images: [{ url: imagen, alt: titulo }],
    },
    twitter: {
      card: 'summary_large_image',
      title: tituloCompleto,
      description: descripcion,
      images: [{ url: imagen, alt: titulo }],
    },
  };
}
