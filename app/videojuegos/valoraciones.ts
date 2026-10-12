export type Valoracion = {
  nota: number;
  cantidad: number;
  aproximada?: boolean;
  plataforma: 'PC';
  consultado: string;
  fuente: string;
};

// Instantánea manual del User Score (jugadores), no del Metascore (críticos).
// Evidencia y método de conteo: VALORACIONES.md. Actualizar nota, total y fecha juntos.
export const valoraciones: Record<string, Valoracion | undefined> = {
  'silksong': { nota: 8.9, cantidad: 7535, plataforma: 'PC', consultado: '2026-10-11', fuente: 'https://www.metacritic.com/game/hollow-knight-silksong/user-reviews/?platform=pc' },
  'expedition-33': { nota: 9.6, cantidad: 6200, aproximada: true, plataforma: 'PC', consultado: '2026-10-11', fuente: 'https://www.metacritic.com/game/clair-obscur-expedition-33/user-reviews/?platform=pc' },
  'hades-2': { nota: 8.7, cantidad: 271, plataforma: 'PC', consultado: '2026-10-11', fuente: 'https://www.metacritic.com/game/hades-ii/user-reviews/?platform=pc' },
  'half-life-2': { nota: 9.1, cantidad: 11319, plataforma: 'PC', consultado: '2026-10-11', fuente: 'https://www.metacritic.com/game/half-life-2/user-reviews/?platform=pc' },
  'portal': { nota: 8.8, cantidad: 6190, plataforma: 'PC', consultado: '2026-10-11', fuente: 'https://www.metacritic.com/game/portal/user-reviews/?platform=pc' },
  'stardew-valley': { nota: 8.8, cantidad: 3473, plataforma: 'PC', consultado: '2026-10-11', fuente: 'https://www.metacritic.com/game/stardew-valley/user-reviews/?platform=pc' },
};

export function obtenerValoracion(id: string): Valoracion | undefined {
  const valoracion = Object.prototype.hasOwnProperty.call(valoraciones, id) ? valoraciones[id] : undefined;
  return valoracion && Number.isFinite(valoracion.nota) && valoracion.nota >= 0 && valoracion.nota <= 10 && valoracion.cantidad > 0 ? valoracion : undefined;
}

export function rellenoEstrella(nota: number, indice: number): number {
  return Math.round(Math.min(100, Math.max(0, (nota / 2 - indice) * 100)));
}
