import { crearMetadataVideojuegos } from '../metadata';
import type {Metadata} from 'next';
import Link from 'next/link';
import styles from '../resenas/resenas.module.css';
import GaleriaMemes from './GaleriaMemes';
import memesStyles from './memes.module.css';

export const metadata: Metadata = crearMetadataVideojuegos({
  titulo: 'TPI115-2026 - Memes de videojuegos y humor gamer',
  descripcion: 'Disfruta memes de videojuegos en español sobre juegos clásicos, títulos actuales y la vida gamer. Explora la galería y amplía tus memes favoritos.',
  ruta: '/videojuegos/memes',
  palabrasClave: ['memes de videojuegos', 'humor gamer', 'memes gamer en español', 'memes de juegos clásicos', 'vida gamer'],
});

export default function MemesPage() {
    return <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Ruta de navegación"><Link
            href="/">Inicio</Link><span>/</span><Link
            href="/videojuegos">Videojuegos</Link><span>/</span><span>Memes</span></nav>
        <header className={`${styles.intro} ${memesStyles.hero}`}>
            <div className={memesStyles.orbit} aria-hidden="true"><span>+1</span><span>GG</span><span>XP</span></div>
            <span className={styles.eyebrow}>03 / MEMES · HUMOR GAMER</span><h1>&quot;Memes... the DNA of the soul&quot;</h1><p>
            </p>
            <nav className={styles.steps} aria-label="Apartados de videojuegos"><Link href="/videojuegos/informacion">01
                Información</Link><Link href="/videojuegos/resenas">02 Reseñas</Link><span
                aria-current="page">03 Memes</span></nav>
        </header>
        <GaleriaMemes/></div>;
}
