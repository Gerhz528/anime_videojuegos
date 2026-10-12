'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './resenas.module.css';

export default function Portada({ imagen, titulo, principal = false }: { imagen: string; titulo: string; principal?: boolean }) {
  const [fallida, setFallida] = useState(false);
  return (
    <div className={styles.portada}>
      <span className={styles.fallback} aria-hidden="true">{titulo}</span>
      {!fallida && <Image src={imagen} alt={`Imagen de ${titulo}`} fill unoptimized loading={principal ? 'eager' : 'lazy'} onError={() => setFallida(true)} />}
    </div>
  );
}
