import Link from 'next/link';
import styles from '../resenas.module.css';

export default function ResenaNoEncontrada() {
  return <div className={styles.wrap}><header className={styles.intro}><span className={styles.eyebrow}>RESEÑA NO ENCONTRADA</span><h1>Este mundo aún no está aquí.</h1><p>Elige uno de los juegos de nuestra selección para continuar.</p><Link className={styles.primary} href="/videojuegos/resenas">Volver a las reseñas</Link></header></div>;
}
