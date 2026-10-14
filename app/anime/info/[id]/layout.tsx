import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ficha Técnica de Anime | Isekai Respawn',
  description: 'Explora los detalles, sinopsis, personajes y universo de tu anime favorito.',
};

export default function InfoDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}