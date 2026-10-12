export type Resena = {
  titular: string;
  introduccion: string;
  jugabilidad: string;
  historia: string;
  graficos: string;
  sonido: string;
  fortalezas: string[];
  considerar: string[];
  veredicto: string;
  idealPara: string;
};

// Textos editoriales originales basados en las fichas oficiales enlazadas.
export const resenas = {
  'silksong': {
    titular: 'Una aventura que se mueve al ritmo de la seda.',
    introduccion: 'Hornet protagoniza un viaje de exploración y precisión. Silksong propone descubrir un reino a través del movimiento y del desafío.',
    jugabilidad: 'El combate acrobático y las herramientas ofrecen una propuesta para quienes disfrutan aprender patrones. Explorar y dominar el movimiento son parte del atractivo.',
    historia: 'La llegada de Hornet a Pharloom abre un misterio. La premisa invita a conocer el reino y sus habitantes sin revelar aquí sus secretos.',
    graficos: 'El dibujo a mano da personalidad a los escenarios y criaturas. Su estética convierte el mundo en una parte esencial de la propuesta.',
    sonido: 'La música orquestal de Christopher Larkin acompaña el tono de la aventura. Es un ingrediente especialmente atractivo para quienes valoran la ambientación.',
    fortalezas: ['Exploración y movimiento acrobático.', 'Dirección artística dibujada a mano.', 'Herramientas que amplían el combate.'],
    considerar: ['Su enfoque exige paciencia y precisión.', 'La exploración requiere curiosidad y atención.'],
    veredicto: 'Una propuesta para amantes del metroidvania que buscan desafíos y un mundo con identidad visual. La dificultad es parte de su personalidad.',
    idealPara: 'Exploradores que disfrutan superar desafíos.',
  },
  'expedition-33': {
    titular: 'La estrategia también puede sentirse inmediata.',
    introduccion: 'Expedition 33 une una premisa de fantasía con una interpretación propia del RPG por turnos. Su identidad empieza en el mundo que propone.',
    jugabilidad: 'Combina decisiones por turnos con acciones en tiempo real. Es una mezcla atractiva si quieres estrategia sin renunciar a participar activamente en el combate.',
    historia: 'Una expedición intenta detener a la Pintora y romper un destino mortal. Esa premisa da peso al viaje sin necesidad de adelantar sus giros.',
    graficos: 'La inspiración en la Belle Époque distingue sus escenarios. El contraste entre fantasía y referencias artísticas es uno de sus principales atractivos visuales.',
    sonido: 'El acompañamiento musical forma parte de una propuesta centrada en la atmósfera y la narrativa. Conviene jugar con audio para apreciar ese enfoque.',
    fortalezas: ['Combate que une turnos y reacción.', 'Una premisa narrativa con identidad.', 'Estética inspirada en la Belle Époque.'],
    considerar: ['Las acciones en tiempo real requieren atención.', 'Su enfoque narrativo pide tiempo para seguir el viaje.'],
    veredicto: 'Una opción interesante para quienes buscan una variante del RPG por turnos y valoran una identidad artística marcada.',
    idealPara: 'Fans de la fantasía y la estrategia por turnos.',
  },
  'hades-2': {
    titular: 'Cada regreso abre una nueva posibilidad.',
    introduccion: 'Melínoe lleva la acción al terreno de la magia y la mitología. Hades II convierte los intentos sucesivos en el centro de su propuesta.',
    jugabilidad: 'Armas, magia y dones permiten combinar estilos de combate. El formato roguelike invita a experimentar; volver a intentarlo forma parte del recorrido.',
    historia: 'La lucha contra el Titán del Tiempo se desarrolla entre encuentros y regresos. Los personajes mitológicos dan contexto a cada nueva incursión.',
    graficos: 'Los entornos pintados a mano y la presentación de personajes aportan una identidad reconocible. La dirección artística acompaña la fantasía mitológica.',
    sonido: 'La banda sonora de Darren Korb refuerza la personalidad del mundo. Las voces ayudan a distinguir a los personajes y sus encuentros.',
    fortalezas: ['Combinaciones de armas, magia y dones.', 'Personajes y ambientación mitológica.', 'Progresión ligada a nuevos intentos.'],
    considerar: ['Repetir recorridos es parte del formato.', 'El combate requiere reacción y adaptación.'],
    veredicto: 'Una propuesta para quien disfruta experimentar con la acción y descubrir nuevas combinaciones. Encaja mejor si el ciclo de intentos te motiva.',
    idealPara: 'Jugadores que disfrutan la acción y experimentar.',
  },
  'half-life-2': {
    titular: 'Un clásico que cuenta su mundo mientras avanzas.',
    introduccion: 'Gordon Freeman vuelve a una Tierra ocupada. Half-Life 2 combina ciencia ficción, acción y escenarios que cuentan parte de la historia.',
    jugabilidad: 'Disparos, exploración y objetos físicos crean distintas formas de afrontar situaciones. Su interés está en alternar acción e interacción con el entorno.',
    historia: 'La ocupación alienígena plantea el conflicto central. Los encuentros y el entorno presentan la resistencia sin que esta reseña adelante momentos clave.',
    graficos: 'Su presentación pertenece a otra generación, pero la construcción de escenarios sigue siendo útil para entender su identidad y su influencia.',
    sonido: 'El sonido ambiental y las señales del combate refuerzan el mundo de ciencia ficción. El audio también ayuda a leer las situaciones.',
    fortalezas: ['Uso de la física en la acción.', 'Narrativa integrada en el entorno.', 'Variedad entre exploración y combate.'],
    considerar: ['Su estética refleja su época.', 'Está orientado a una campaña en primera persona.'],
    veredicto: 'Un punto de entrada interesante a los FPS narrativos clásicos. Conviene acercarse con curiosidad por su diseño, además de por la acción.',
    idealPara: 'Fans de los FPS y de la ciencia ficción.',
  },
  'portal': {
    titular: 'Dos portales. Una nueva forma de pensar.',
    introduccion: 'Portal convierte una mecánica sencilla de explicar en una propuesta de ingenio. Su atractivo está en mirar cada habitación desde otra perspectiva.',
    jugabilidad: 'Conectar espacios mediante portales transforma la resolución de puzles. La física y la orientación espacial son herramientas tan importantes como el dispositivo.',
    historia: 'Las cámaras de Aperture Science sitúan las pruebas en un contexto de humor oscuro. Descubrir ese contexto es parte del viaje.',
    graficos: 'Los espacios de prueba priorizan la lectura del entorno. La estética funcional acompaña una propuesta donde comprender la habitación es esencial.',
    sonido: 'Las voces y señales ambientales contribuyen al humor y la atmósfera. Jugar con audio ayuda a captar el carácter de las pruebas.',
    fortalezas: ['Mecánica central fácil de entender.', 'Puzles basados en espacio y física.', 'Identidad marcada por el humor oscuro.'],
    considerar: ['Requiere detenerse a observar y pensar.', 'Es una experiencia centrada en puzles.'],
    veredicto: 'Una opción especialmente atractiva para descubrir puzles en primera persona. La satisfacción viene de entender una solución, más que de reaccionar rápido.',
    idealPara: 'Mentes curiosas que disfrutan resolver problemas.',
  },
  'stardew-valley': {
    titular: 'Un pequeño valle con muchas formas de vivirlo.',
    introduccion: 'Una granja heredada abre la puerta a cultivar, explorar y conocer una comunidad. Stardew Valley combina rutinas con objetivos que puedes elegir.',
    jugabilidad: 'Cultivos, pesca y exploración ofrecen distintas actividades. La gestión del tiempo invita a decidir qué priorizar en cada jornada.',
    historia: 'La vida del valle se construye a través de sus habitantes. El interés narrativo nace de conocer sus historias y desarrollar relaciones.',
    graficos: 'El pixel art aporta una identidad cálida y reconocible. La presentación visual acompaña el cambio de estaciones y la vida cotidiana.',
    sonido: 'La música acompaña el ritmo de las estaciones y los lugares. Es parte del tono acogedor que propone el valle.',
    fortalezas: ['Variedad de actividades y objetivos.', 'Vida de comunidad y relaciones.', 'Estética pixelada con personalidad.'],
    considerar: ['Las rutinas repetidas son parte del formato.', 'El tiempo diario pide organizar prioridades.'],
    veredicto: 'Una propuesta para quienes disfrutan construir progreso poco a poco. Su variedad permite encontrar una rutina propia dentro del valle.',
    idealPara: 'Quienes disfrutan cultivar y construir a su ritmo.',
  },
} satisfies Record<string, Resena>;

export function obtenerResena(id: string): Resena | undefined {
  return Object.prototype.hasOwnProperty.call(resenas, id) ? resenas[id as keyof typeof resenas] : undefined;
}
