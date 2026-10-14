import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memes de Anime | Isekai Respawn',
  description: 'Espacio de humor y los mejores memes del mundo del anime.',
};

export default function MemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}