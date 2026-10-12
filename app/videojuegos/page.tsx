import type { Metadata } from 'next';
import Catalogo from './Catalogo';

export const metadata: Metadata = {
  title: 'Videojuegos | Isekai Respawn',
  description: 'Explora videojuegos recientes y clásicos. Descubre historias, géneros y nuevos mundos en nuestro catálogo.',
};

export default function VideojuegosPage() {
  return <Catalogo />;
}
