import type {Metadata} from 'next';
import Link from 'next/link';
import styles from '../resenas/resenas.module.css';
import GaleriaMemes from './GaleriaMemes';
import memesStyles from './memes.module.css';

export const metadata: Metadata = {
    title: 'Memes de videojuegos | Isekai Respawn',
    description: 'Memes en español de juegos clásicos, actuales y la vida gamer.',
    keywords: ['memes', 'videojuegos', 'memes de videojuegos', 'memes graciosos de videojuegos', 'memes de mario',
        'random', 'memes XD'],
};

export default function MemesPage() {
    return <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Ruta de navegación"><Link
            href="/">Inicio</Link><span>/</span><Link
            href="/videojuegos">Videojuegos</Link><span>/</span><span>Memes</span></nav>
        <header className={`${styles.intro} ${memesStyles.hero}`}>
            <div className={memesStyles.orbit} aria-hidden="true"><span>+1</span><span>GG</span><span>XP</span></div>
            <span className={styles.eyebrow}>03 / MEMES · HUMOR GAMER</span><h1>"Memes... the DNA of the soul"</h1><p>
            </p>
            <nav className={styles.steps} aria-label="Apartados de videojuegos"><Link href="/videojuegos/informacion">01
                Información</Link><Link href="/videojuegos/resenas">02 Reseñas</Link><span
                aria-current="page">03 Memes</span></nav>
        </header>
        <GaleriaMemes/></div>;
}


