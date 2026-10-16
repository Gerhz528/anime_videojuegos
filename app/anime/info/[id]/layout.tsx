import type { Metadata } from 'next';

export const metadata = {

  title: 'Isekai Respawn | Noticias de anime',
  description: 'Tu portal a nuevos mundos.',
  keywords: ['anime', , 'novedades','noticias','shonen', +
  'noticias de anime sin anuncios', 'anime 2026'],
  openGraph: {
    type: 'website',
    title: `Isekai Respawn`,
    description: `Tu portal a nuevos mundos.`,
    images:[{
      url:'/imagen_principal_inde.jpg',
      alt: 'Imagen de isekai respawn',
    }],
    url:'/anime',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Isekai Respawn',
    description: 'Tu portal a nuevos mundos.',
    images: ['/imagen_principal_inde.jpg'],
  },


};

export default function InfoDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}