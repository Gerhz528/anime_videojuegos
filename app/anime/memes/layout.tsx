import type { Metadata } from 'next';

export const metadata = {
  title: 'Memes de anime',
  description: 'Tu portal a nuevos mundos.',
  keywords: ['anime', +
  'memes de anime sin anuncios', 'memes de anime 2026', 'memes graciosos de anime'],
  openGraph: {
    type: 'website',
    title: `Isekai Respawn`,
    description: `Tu portal a nuevos mundos.`,
    images:[{
      url:'/imagen_principal_inde.jpg',
      alt: 'Imagen de isekai respawn',
    }],
    url:'/anime/memes',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Isekai Respawn',
    description: 'Tu portal a nuevos mundos.',
    images: ['/imagen_principal_inde.jpg'],
  },


};

export default function MemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}