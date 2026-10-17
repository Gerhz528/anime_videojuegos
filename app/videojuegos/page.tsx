import { crearMetadataVideojuegos } from './metadata';
import type { Metadata } from 'next';
import Catalogo from './Catalogo';

export const metadata: Metadata = crearMetadataVideojuegos({
  titulo: 'Videojuegos recientes y clásicos',
  descripcion: 'Descubre videojuegos recientes y clásicos para PC: géneros, historias y desarrolladores. Explora el catálogo y encuentra reseñas y valoraciones de jugadores.',
  ruta: '/videojuegos',
  palabrasClave: ['videojuegos', 'videojuegos para PC', 'juegos clásicos', 'videojuegos recientes', 'catálogo de videojuegos', 'reseñas de videojuegos'],
});

export default function VideojuegosPage() {
  return <Catalogo />;
}
