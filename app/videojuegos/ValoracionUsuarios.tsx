import { obtenerValoracion, rellenoEstrella } from './valoraciones';
import styles from './ValoracionUsuarios.module.css';

const numero = (valor: number, decimales = 0) => new Intl.NumberFormat('es-SV', { minimumFractionDigits: decimales, maximumFractionDigits: decimales }).format(valor);
const estrella = <svg viewBox="0 0 24 24" focusable="false"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1Z" /></svg>;

export default function ValoracionUsuarios({ id, compacta = false, enlazarFuente = true }: { id: string; compacta?: boolean; enlazarFuente?: boolean }) {
  const valoracion = obtenerValoracion(id);
  if (!valoracion) return <div className={styles.rating}><span className={styles.label}>VALORACIÓN DE USUARIOS</span><p className={styles.unavailable}>Valoración no disponible.</p></div>;
  const notaEstrellas = numero(valoracion.nota / 2, 2);
  const fecha = new Intl.DateTimeFormat('es-SV', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${valoracion.consultado}T00:00:00Z`));
  return (
    <div className={`${styles.rating} ${compacta ? styles.compact : ''}`}>
      <span className={styles.label}>VALORACIÓN DE USUARIOS</span>
      <div className={styles.scoreRow}>
        <span className={styles.stars} role="img" aria-label={`${notaEstrellas} de 5 estrellas, equivalente a ${numero(valoracion.nota, 1)} de 10 en Metacritic`}>
          {Array.from({ length: 5 }, (_, indice) => <span className={styles.star} key={indice} aria-hidden="true">{estrella}<span className={styles.fill} style={{ width: `${rellenoEstrella(valoracion.nota, indice)}%` }}>{estrella}</span></span>)}
        </span>
        <strong>{notaEstrellas}<small>/5</small></strong>
      </div>
      <p className={styles.original}>User Score: <strong>{numero(valoracion.nota, 1)}/10</strong> · {valoracion.plataforma}</p>
      <p className={styles.count}>{valoracion.aproximada ? 'Aprox. ' : ''}{numero(valoracion.cantidad)} valoraciones</p>
      <div className={styles.provenance}>
        {enlazarFuente ? <a href={valoracion.fuente} target="_blank" rel="noopener noreferrer">Metacritic ↗<span className={styles.srOnly}> (abre en otra pestaña)</span></a> : <span>Metacritic</span>}
        <span>Consulta: <time dateTime={valoracion.consultado}>{fecha}</time></span>
      </div>
    </div>
  );
}
