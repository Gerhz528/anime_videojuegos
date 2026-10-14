export interface ResenaAnime {
  titular: string;
  resumen: string;
  puntosFuertes: string[];
  veredicto: string;
  puntuacionEditorial: number;
}

export interface Anime {
  id: string;
  titulo: string;
  genero: string[];
  temporadas: number;
  sinopsis: string;
  imagen: string;
  esPopular?: boolean;
  categoria?: string;
  estudio?: string;
  lanzamiento?: string;
  resena?: ResenaAnime;
}

export const animes: Anime[] = [
  {
    id: "attack-on-titan",
    titulo: "Attack on Titan (Shingeki no Kyojin)",
    genero: ["Acción", "Misterio", "Fantasía", "Drama"],
    temporadas: 4,
    sinopsis: "La humanidad vive confinada dentro de enormes murallas para protegerse de los Titanes. Eren Jaeger jura exterminar a todos los Titanes tras una tragedia personal.",
    imagen: "/imagenes/anime/Attack-on-Titan.jpg",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "WIT Studio / MAPPA",
    lanzamiento: "Abril de 2013",
    resena: {
      titular: "Una obra maestra contemporánea del drama y la estrategia militar.",
      resumen: "Transforma una premisa de supervivencia postapocalíptica en un denso thriller político y filosófico sobre la libertad, los ciclos de odio y el conflicto humano.",
      puntosFuertes: ["Giros de guion magistrales", "Banda sonora épica de Hiroyuki Sawano", "Evolución compleja de sus personajes"],
      veredicto: "Imprescindible para cualquier seguidor del anime moderno.",
      puntuacionEditorial: 9.8
    }
  },
  {
    id: "black-clover",
    titulo: "Black Clover",
    genero: ["Acción", "Fantasía", "Shonen"],
    temporadas: 4,
    sinopsis: "En un mundo donde la magia lo es todo, Asta nace sin ningún poder mágico. Junto a su rival Yuno, lucha por convertirse en el Rey Mago.",
    imagen: "/imagenes/anime/black-clover.jpg",
    esPopular: true,
    categoria: "Emisión",
    estudio: "Studio Pierrot",
    lanzamiento: "Octubre de 2017",
    resena: {
      titular: "El espíritu shonen tradicional elevado por combates en equipo memorables.",
      resumen: "Aunque inicia con los tropos clásicos del género, evoluciona hacia un ritmo dinámico donde la superación personal y la camaradería destacan en cada arco.",
      puntosFuertes: ["Dinamismo en el sistema de magia", "Gran química en el escuadrón Toros Negros", "Trabajo en equipo en las batallas clave"],
      veredicto: "Una excelente opción para los amantes de las historias de superación.",
      puntuacionEditorial: 8.5
    }
  },
  {
    id: "chainsaw-man",
    titulo: "Chainsaw Man",
    genero: ["Acción", "Sobrenatural", "Gore", "Shonen"],
    temporadas: 1,
    sinopsis: "Denji es un joven cazador de demonios al borde de la miseria que renace como un híbrido demonio-humano con sierras eléctricas tras fusionarse con su mascota Pochita.",
    imagen: "/imagenes/anime/chainsaw-man.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "MAPPA",
    lanzamiento: "Octubre de 2022",
    resena: {
      titular: "Visceral, caótico y con una estética profundamente cinematográfica.",
      resumen: "Rompe los moldes tradicionales del héroe de acción al presentar a un protagonista con motivaciones mundanas dentro de un mundo oscuro, violento y surrealista.",
      puntosFuertes: ["Dirección visual de nivel cinematográfico", "Protagonista irreverente y atípico", "Excelente ritmo y banda sonora"],
      veredicto: "Una experiencia rompedora para quienes buscan algo fuera de lo común.",
      puntuacionEditorial: 9.2
    }
  },
  {
    id: "darling-in-the-franxx",
    titulo: "Darling in the FranXX",
    genero: ["Acción", "Mecha", "Romance", "Ciencia Ficción"],
    temporadas: 1,
    sinopsis: "En un futuro distante, jóvenes pilotos controlan mechas gigantes llamados FranXX para proteger a la humanidad. Hiro conoce a Zero Two, una misteriosa chica con cuernos.",
    imagen: "/imagenes/anime/zero-two.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "CloverWorks / Trigger",
    lanzamiento: "Enero de 2018",
    resena: {
      titular: "Un cóctel de acción mecha, identidad juvenil y romance intenso.",
      resumen: "Explora la búsqueda de humanidad y madurez de un grupo de jóvenes a través del pilotaje de mechas y la icónica relación entre Hiro y Zero Two.",
      puntosFuertes: ["Diseño icónico de personajes", "Dinámica entre Hiro y Zero Two", "Gran acabado en la animación de acción"],
      veredicto: "Una obra memorable dentro del género de ciencia ficción y mechas.",
      puntuacionEditorial: 8.2
    }
  },
  {
    id: "dandadan",
    titulo: "Dandadan",
    genero: ["Acción", "Comedia", "Sobrenatural", "Ciencia Ficción"],
    temporadas: 1,
    sinopsis: "Momo Ayase cree en los fantasmas pero no en los extraterrestres, mientras que Ken Takakura cree en los extraterrestres pero no en los fantasmas. Ambos terminan descubriendo que ambos mundos son reales.",
    imagen: "/imagenes/anime/DanDaDan.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "Science SARU",
    lanzamiento: "Octubre de 2024",
    resena: {
      titular: "Una montaña rusa desquiciada, divertida y visualmente deslumbrante.",
      resumen: "Combina alienígenas, espíritus urbanos y comedia romántica adolescente con una animación fluida que desborda creatividad en cada fotograma.",
      puntosFuertes: ["Estilo de animación innovador", "Química cómica imparable", "Acción fluida y sin frenos"],
      veredicto: "Uno de los estrenos más frescos y entretenidos del anime reciente.",
      puntuacionEditorial: 9.3
    }
  },
  {
    id: "death-note",
    titulo: "Death Note",
    genero: ["Misterio", "Thriller", "Psicológico", "Sobrenatural"],
    temporadas: 1,
    sinopsis: "Light Yagami, un brillante estudiante de secundaria, encuentra una libreta sobrenatural que le permite matar a cualquiera cuyo nombre escriba en ella, desatando un juego de inteligencia con el detective L.",
    imagen: "/imagenes/anime/Death-note.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Madhouse",
    lanzamiento: "Octubre de 2006",
    resena: {
      titular: "El duelo psicológico por excelencia de la historia del anime.",
      resumen: "Un thriller implacable que cuestiona la justicia y la moralidad a través de un enfrentamiento de intelectos entre Light Yagami y el enigmático detective L.",
      puntosFuertes: ["Duelo de mentes brillante", "Tensión constante en cada episodio", "Planteamientos morales atrapantes"],
      veredicto: "Un clásico imprescindible del suspense que no pierde vigencia.",
      puntuacionEditorial: 9.6
    }
  },
  {
    id: "demon-slayer",
    titulo: "Demon Slayer: Kimetsu no Yaiba",
    genero: ["Acción", "Sobrenatural", "Fantasía", "Shonen"],
    temporadas: 4,
    sinopsis: "Tanjiro Kamado emprende un viaje peligroso para convertirse en un cazador de demonios tras la masacre de su familia y salvar a su hermana Nezuko, convertida en demonio.",
    imagen: "/imagenes/anime/Demon-Slayer.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "ufotable",
    lanzamiento: "Abril de 2019",
    resena: {
      titular: "Espectáculo visual sin precedentes con un corazón emocional genuino.",
      resumen: "Destaca por elevar las batallas con efectos de animación impresionantes, mientras mantiene una historia de devoción fraternal que conmueve al espectador.",
      puntosFuertes: ["Calidad de animación insuperable", "Coreografías de combate espectaculares", "Vínculo entrañable entre hermanos"],
      veredicto: "Un hito técnico en la industria que deleita la vista.",
      puntuacionEditorial: 9.1
    }
  },
  {
    id: "dr-stone",
    titulo: "Dr. STONE",
    genero: ["Ciencia Ficción", "Aventura", "Comedia", "Shonen"],
    temporadas: 3,
    sinopsis: "Toda la humanidad es petrificada repentinamente por una extraña luz. Varios milenios después, el genio científico Senku Ishigami despierta decidido a reconstruir la civilización desde cero.",
    imagen: "/imagenes/anime/Dr.Stone.PNG",
    esPopular: false,
    categoria: "Emisión",
    estudio: "TMS Entertainment",
    lanzamiento: "Julio de 2019",
    resena: {
      titular: "La ciencia convertida en la aventura más ingeniosa y entretenida.",
      resumen: "Sustituye la fuerza bruta tradicional por inventiva real y conocimiento científico, convirtiendo cada descubrimiento en un hito épico de supervivencia.",
      puntosFuertes: ["Enfoque educativo y divertido", "Protagonista extremadamente carismático", "Progresión de reino de la ciencia constante"],
      veredicto: "Un anime fresco, inteligente y sumamente adictivo.",
      puntuacionEditorial: 8.8
    }
  },
  {
    id: "dragon-ball-z",
    titulo: "Dragon Ball Z",
    genero: ["Acción", "Aventura", "Fantasía", "Shonen"],
    temporadas: 9,
    sinopsis: "Goku y sus amigos protegen la Tierra de poderosas amenazas alienígenas como Saiyajins, tiranos espaciales y androides letales en batallas de escala cósmica.",
    imagen: "/imagenes/anime/Dragonball-z.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Toei Animation",
    lanzamiento: "Abril de 1989",
    resena: {
      titular: "El pilar fundamental que definió el género shonen a nivel global.",
      resumen: "La epopeya definitiva de artes marciales y transformaciones míticas que sentó las bases de la cultura popular del anime en todo el mundo.",
      puntosFuertes: ["Villanos memorables y transformaciones legendarias", "Combates icónicos", "Impacto cultural imborrable"],
      veredicto: "El clásico que todo fan del anime debe conocer.",
      puntuacionEditorial: 9.4
    }
  },
  {
    id: "frieren",
    titulo: "Frieren: Beyond Journey's End",
    genero: ["Fantasía", "Aventura", "Drama", "Recuentos de la vida"],
    temporadas: 1,
    sinopsis: "La elfa maga Frieren emprende un viaje para comprender las emociones humanas y honrar la memoria de sus antiguos compañeros héroes tras el fin de su gran aventura.",
    imagen: "/imagenes/anime/Frieren.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "Madhouse",
    lanzamiento: "Septiembre de 2023",
    resena: {
      titular: "Una bellísima meditación sobre el tiempo, los recuerdos y la empatía.",
      resumen: "Inicia donde la mayoría de historias terminan, ofreciendo una narrativa pausada, poética y enriquecida con secuencias de magia deslumbrantes.",
      puntosFuertes: ["Guion y sensibilidad narrativa sobresalientes", "Animación delicada e impoluta", "Música melancólica e inmersiva"],
      veredicto: "Una verdadera joya de la fantasía moderna.",
      puntuacionEditorial: 9.9
    }
  },
  {
    id: "from-me-to-you",
    titulo: "From Me to You (Kimi ni Todoke)",
    genero: ["Romance", "Drama", "Escolar", "Recuentos de la vida"],
    temporadas: 3,
    sinopsis: "Sawako Kuronuma es malinterpretada por sus compañeros debido a su parecido con 'Sadako'. Todo cambia cuando Kazehaya, el chico más popular, empieza a hablar con ella.",
    imagen: "/imagenes/anime/From-me-to-you.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Production I.G",
    lanzamiento: "Octubre de 2009",
    resena: {
      titular: "Un romance dulce, tierno y cargado de superación personal.",
      resumen: "Retrata con enorme delicadeza los malentendidos juveniles, la amistad genuina y el primer amor desde la perspectiva de una protagonista encantadora.",
      puntosFuertes: ["Desarrollo empático de la protagonista", "Relaciones humanas muy sanas", "Atmósfera cálida y entrañable"],
      veredicto: "Un referente imprescindible del género romance escolar.",
      puntuacionEditorial: 8.7
    }
  },
  {
    id: "fullmetal-alchemist",
    titulo: "Fullmetal Alchemist",
    genero: ["Acción", "Aventura", "Fantasía", "Drama"],
    temporadas: 1,
    sinopsis: "Los hermanos Edward y Alphonse Elric sufren devastadoras consecuencias tras intentar la transmutación humana para revivir a su madre, iniciando una búsqueda por la Piedra Filosofal.",
    imagen: "/imagenes/anime/Full-metal-alchemists.png",
    esPopular: false,
    categoria: "Finalizados",
    estudio: "Bones",
    lanzamiento: "Octubre de 2003",
    resena: {
      titular: "Una mirada más dramática y sombría al viaje de los hermanos Elric.",
      resumen: "Esta primera adaptación toma un rumbo original respecto al manga, centrándose en dilemas éticos oscuros y en las trágicas consecuencias de la alquimia.",
      puntosFuertes: ["Tono sombrío y reflexivo", "Excelente exploración del duelo", "Banda sonora melancólica memorables"],
      veredicto: "Una versión fascinante y madura digna de ver.",
      puntuacionEditorial: 8.9
    }
  },
  {
    id: "fullmetal-alchemist-brotherhood",
    titulo: "Fullmetal Alchemist: Brotherhood",
    genero: ["Acción", "Aventura", "Fantasía", "Drama"],
    temporadas: 1,
    sinopsis: "Adaptación fiel al manga original. Dos hermanos alquimistas buscan restaurar sus cuerpos tras un fallido experimento transmutativo mientras descubren una conspiración nacional.",
    imagen: "/imagenes/anime/Full-metal-alchemists-Brotherhood.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Bones",
    lanzamiento: "Abril de 2009",
    resena: {
      titular: "Estructura narrativa perfecta y un clímax inolvidable.",
      resumen: "Fiel reflejo del manga que equilibra comedia, tragedia, política y misterio con una coherencia narrativa impecable hasta su resolución.",
      puntosFuertes: ["Sin cabos sueltos en el guion", "Elenco secundario de lujo", "Sistema de alquimia sólido y consistente"],
      veredicto: "Una obra redonda y uno de los mejores animes de la historia.",
      puntuacionEditorial: 10.0
    }
  },
  {
    id: "hunter-x-hunter",
    titulo: "Hunter x Hunter",
    genero: ["Acción", "Aventura", "Fantasía", "Shonen"],
    temporadas: 6,
    sinopsis: "Gon Freecss descubre que su padre está vivo y es un legendario Cazador, por lo que decide tomar el peligroso examen para convertirse en Cazador y encontrarlo.",
    imagen: "/imagenes/anime/HxH.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Madhouse",
    lanzamiento: "Octubre de 2011",
    resena: {
      titular: "Subversión brillante de los clichés del shonen de aventuras.",
      resumen: "Evoluciona desde un viaje festivo hasta arcos psicológicos oscuros y complejos, respaldados por uno de los sistemas de poder más lógicos del anime (Nen).",
      puntosFuertes: ["Sistema Nen de combate perfecto", "Arcos legendarios como las Quimera Ants", "Villanos tridimensionales"],
      veredicto: "Una aventura imprescindible para amantes de la estrategia.",
      puntuacionEditorial: 9.7
    }
  },
  {
    id: "journey-towards-the-witch",
    titulo: "Wandering Witch: The Journey of Elaina",
    genero: ["Aventura", "Fantasía", "Recuentos de la vida"],
    temporadas: 1,
    sinopsis: "Inspirada por historias de viajes, Elaina se convierte en una bruja completa e inicia una travesía por diversos países aprendiendo de sus costumbres e historias.",
    imagen: "/imagenes/anime/Journal-with-Witch.png",
    esPopular: false,
    categoria: "Finalizados",
    estudio: "C2C",
    lanzamiento: "Octubre de 2020",
    resena: {
      titular: "Relatos episódicos que oscilan entre la maravilla y el drama oscuro.",
      resumen: "Una propuesta fascinante sobre una viajera neutral que presenciará desde fabulas mágicas y cómicas hasta episodios crudos con desenlaces trágicos.",
      puntosFuertes: ["Variedad de tonos por episodio", "Dirección de arte vistosa", "Protagonista pragmática y franca"],
      veredicto: "Ideal para quienes disfrutan de antologías de viajes con sorpresas.",
      puntuacionEditorial: 8.0
    }
  },
  {
    id: "jujutsu-kaisen",
    titulo: "Jujutsu Kaisen",
    genero: ["Acción", "Sobrenatural", "Fantasía", "Shonen"],
    temporadas: 2,
    sinopsis: "Yuji Itadori se traga un talismán maldito —el dedo de Sukuna— para proteger a sus amigos, convirtiéndose en el recipiente de una poderosa maldición y uniéndose al Colegio de Hechicería.",
    imagen: "/imagenes/anime/Jujutsu-kaisen.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "MAPPA",
    lanzamiento: "Octubre de 2020",
    resena: {
      titular: "Acción desenfrenada con un sistema de maldiciones oscuro y creativo.",
      resumen: "Redefine las batallas del shonen moderno con un dinamismo electrizante, coreografías complejas y consecuencias reales para sus personajes.",
      puntosFuertes: ["Coreografías de combate magistrales", "Personajes icónicos como Satoru Gojo", "Atmósfera oscura y fluida"],
      veredicto: "Pura adrenalina visual y narrativa.",
      puntuacionEditorial: 9.4
    }
  },
  {
    id: "kaiju-no-8",
    titulo: "Kaiju No. 8",
    genero: ["Acción", "Ciencia Ficción", "Militar", "Shonen"],
    temporadas: 1,
    sinopsis: "Kafka Hibino limpia los restos de los monstruos atacantes, pero tras ingerir un pequeño kaiju, obtiene la capacidad de transformarse en uno y busca cumplir su sueño de unirse al Cuerpo de Defensa.",
    imagen: "/imagenes/anime/kaiju-no-8.jpg",
    esPopular: true,
    categoria: "Emisión",
    estudio: "Production I.G",
    lanzamiento: "Abril de 2024",
    resena: {
      titular: "Una perspectiva madura y fresca del género de monstruos gigantes.",
      resumen: "Destaca por darle el protagonismo a un adulto treintañero, combinando humor militar, transformaciones colosales y batallas de gran escala.",
      puntosFuertes: ["Protagonista adulto en un entorno juvenil", "Comedia oportuna y orgánica", "Escenas de acción potentes"],
      veredicto: "Un soplo de aire fresco en las historias de superación.",
      puntuacionEditorial: 8.7
    }
  },
  {
    id: "konosuba",
    titulo: "KonoSuba: God's Blessing on This Wonderful World!",
    genero: ["Comedia", "Fantasía", "Isekai", "Aventura"],
    temporadas: 3,
    sinopsis: "Kazuma Sato muere de una forma ridícula y renace en un mundo de fantasía junto a una diosa inútil llamada Aqua, forming un grupo con miembros muy excéntricos.",
    imagen: "/imagenes/anime/konosuba.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "Studio Deen / Drive",
    lanzamiento: "Enero de 2016",
    resena: {
      titular: "La parodia definitiva e hilarante de las aventuras en mundos fantásticos.",
      resumen: "Se deshace de todo heroísmo para enfocar la vida de aventurero desde la comedia física, el fracaso continuo y la química disparatada de su elenco.",
      puntosFuertes: ["Comedia física y gags geniales", "Personajes imperfectos y carismáticos", "Parodia constante de tropos isekai"],
      veredicto: "Risas garantizadas en cada episodio.",
      puntuacionEditorial: 9.0
    }
  },
  {
    id: "the-apothecary-diaries",
    titulo: "Los diarios de la boticaria (Kusuriya no Hitorigoto)",
    genero: ["Misterio", "Drama", "Histórico"],
    temporadas: 1,
    sinopsis: "Maomao, una joven boticaria, es vendida como sirvienta al Palacio Imperial donde utiliza sus conocimientos sobre medicina y venenos para resolver intrigas del palacio.",
    imagen: "/imagenes/anime/Los-diarios-de-la-boticaria.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "TOHO animation STUDIO / OLM",
    lanzamiento: "Octubre de 2023",
    resena: {
      titular: "Intrigas palaciegas explicadas desde la ciencia y la astucia.",
      resumen: "Un deleite misterioso donde una protagonista extremadamente perspicaz e insólita desentraña secretos de la corte con deducciones médicas impecables.",
      puntosFuertes: ["Maomao como protagonista estelar", "Misterios episódicos interconectados", "Ambientación y vestuario detallados"],
      veredicto: "Una de las sorpresas analíticas más elegantes de los últimos años.",
      puntuacionEditorial: 9.2
    }
  },
  {
    id: "mob-psycho-100",
    titulo: "Mob Psycho 100",
    genero: ["Acción", "Comedia", "Sobrenatural", "Recuentos de la vida"],
    temporadas: 3,
    sinopsis: "Shigeo Kageyama, apodado 'Mob', es un estudiante de secundaria con increíbles poderes psíquicos que intenta vivir una vida normal mientras reprime sus emociones.",
    imagen: "/imagenes/anime/Mob-psycho-100.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Bones",
    lanzamiento: "Julio de 2016",
    resena: {
      titular: "Espectáculo visual electrizante con una lección de madurez y bondad.",
      resumen: "Combina batallas psíquicas con una inolvidable lección sobre la empatía, el crecimiento personal y el valor del esfuerzo ordinario.",
      puntosFuertes: ["Animación expresiva y desbordante", "Relación maestro-alumno entre Reigen y Mob", "Cierre perfecto de tres temporadas"],
      veredicto: "Una obra maestra contemporánea en todos sus apartados.",
      puntuacionEditorial: 9.7
    }
  },
  {
    id: "my-dress-up-darling",
    titulo: "My Dress-Up Darling (Sono Bisque Doll wa Koi wo Suru)",
    genero: ["Romance", "Comedia", "Escolar", "Recuentos de la vida"],
    temporadas: 1,
    sinopsis: "Wakana Gojo, un aspirante a artesano de muñecas Hina, une fuerzas con Marin Kitagawa, una chica alegre y popular que ama el cosplay, para confeccionar sus trajes.",
    imagen: "/imagenes/anime/my-dress-up-Darling.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "CloverWorks",
    lanzamiento: "Enero de 2022",
    resena: {
      titular: "Pasión por el arte de la confección y un romance dulce y genuino.",
      resumen: "Celebra las aficiones sin prejuicios mientras muestra el apasionante proceso del cosplay mediante dos protagonistas que se complementan maravillosamente.",
      puntosFuertes: ["Atención al detalle en el diseño y artesanía", "Gran carisma de Marin Kitagawa", "Dinámica sana de apoyo mutuo"],
      veredicto: "Encantador, vistoso y sumamente divertido.",
      puntuacionEditorial: 8.8
    }
  },
  {
    id: "my-hero-academia",
    titulo: "My Hero Academia (Boku no Hero Academia)",
    genero: ["Acción", "Superhéroes", "Escolar", "Shonen"],
    temporadas: 7,
    sinopsis: "En un mundo donde el 80% de la población tiene superpoderes, Izuku Midoriya nace sin ninguno, pero su destino cambia tras conocer al héroe número uno, All Might.",
    imagen: "/imagenes/anime/my-hero-academia.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "Bones",
    lanzamiento: "Abril de 2016",
    resena: {
      titular: "El concepto clásico de superhéroes reimaginado al estilo del anime.",
      resumen: "Aborda el significado de ser un verdadero símbolo de esperanza a través del arduo camino de un grupo de estudiantes de la academia U.A.",
      puntosFuertes: ["Gran variedad de poderes (Quirks)", "Momentos emocionales de clímax heroico", "Evolución constante de protagonistas y rivales"],
      veredicto: "Un referente moderno de la lucha contra las adversidades.",
      puntuacionEditorial: 8.7
    }
  },
  {
    id: "nanatsu-no-taizai",
    titulo: "The Seven Deadly Sins (Nanatsu no Taizai)",
    genero: ["Acción", "Aventura", "Fantasía", "Shonen"],
    temporadas: 5,
    sinopsis: "La princesa Elizabeth busca a los Siete Pecados Capitales, un grupo de caballeros renegados, para recuperar su reino de los opresivos Caballeros Sagrados.",
    imagen: "/imagenes/anime/nanatsu-no-taizai.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "A-1 Pictures / Studio Deen",
    lanzamiento: "Octubre de 2014",
    resena: {
      titular: "Una epopeya caballeresca repleta de batallas descomunales y maldiciones.",
      resumen: "Ofrece un mundo fantástico habitado por caballeros con habilidades desmesuradas, enfrentados a demonios y secretos que abarcan milenios.",
      puntosFuertes: ["Personajes extremadamente poderosos", "Mitos y maldiciones trágicas", "Gran inicio de aventura medieval"],
      veredicto: "Ideal para fanáticos de las batallas espectaculares.",
      puntuacionEditorial: 8.1
    }
  },
  {
    id: "naruto",
    titulo: "Naruto",
    genero: ["Acción", "Aventura", "Fantasía", "Shonen"],
    temporadas: 9,
    sinopsis: "Naruto Uzumaki, un joven ninja huérfano con el Zorro de Nueve Colas sellado en su interior, lucha por obtener el reconocimiento de su aldea y convertirse en Hokage.",
    imagen: "/imagenes/anime/Naruto.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Studio Pierrot",
    lanzamiento: "Octubre de 2002",
    resena: {
      titular: "Un viaje emotivo sobre la soledad, el esfuerzo y la amistad.",
      resumen: "Marcó a generaciones enteras gracias a su elaborado mundo shinobi, batallas tácticas memorables y villanos con motivaciones profundas.",
      puntosFuertes: ["Lore e historia shinobi fascinante", "Batallas icónicas de estrategia ninja", "Evolución emocional de sus personajes"],
      veredicto: "Un pilar de la historia del shonen que dejó huella.",
      puntuacionEditorial: 9.3
    }
  },
  {
    id: "one-piece",
    titulo: "One Piece",
    genero: ["Acción", "Aventura", "Fantasía", "Shonen"],
    temporadas: 20,
    sinopsis: "Monkey D. Luffy se embarca en un viaje legendario por los mares junto a los Piratas de Sombrero de Paja para encontrar el tesoro 'One Piece' y convertirse en el Rey de los Piratas.",
    imagen: "/imagenes/anime/One-Piece.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "Toei Animation",
    lanzamiento: "Octubre de 1999",
    resena: {
      titular: "La aventura marítima y la construcción de mundo más grande del anime.",
      resumen: "Un universo expansivo sin igual donde la búsqueda de la libertad, las conspiraciones globales y la lealtad entre camaradas brillan sin descanso.",
      puntosFuertes: ["Construcción de mundo impecable", "Misterios e intrigas conectadas durante décadas", "Tripulación inolvidable"],
      veredicto: "El viaje definitivo para los amantes de la aventura.",
      puntuacionEditorial: 9.7
    }
  },
  {
    id: "one-punch-man",
    titulo: "One Punch Man",
    genero: ["Acción", "Comedia", "Superhéroes", "Parodia"],
    temporadas: 2,
    sinopsis: "Saitama es un héroe capaz de derrotar a cualquier enemigo con un solo puñetazo, lo que lo lleva a sufrir una profunda crisis existencial por falta de emoción en sus batallas.",
    imagen: "/imagenes/anime/one-punch-ma.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "Madhouse / J.C.Staff",
    lanzamiento: "Octubre de 2015",
    resena: {
      titular: "Sátira brillante cargada de acción hiperbólica y humor directo.",
      resumen: "Invierte la fórmula del entrenamiento shonen poniendo a un protagonista imbatible frente a situaciones ridículas dentro de una asociación de héroes caótica.",
      puntosFuertes: ["Comedia inteligente sobre el género", "Animación deslumbrante en su primera entrega", "Gran variedad de héroes secundarios"],
      veredicto: "Sumamente divertido y visualmente impactante.",
      puntuacionEditorial: 9.1
    }
  },
  {
    id: "pokemon",
    titulo: "Pokémon",
    genero: ["Aventura", "Fantasía", "Comedia"],
    temporadas: 25,
    sinopsis: "Ash Ketchum parte del Pueblo Paleta junto a su fiel Pikachu en un viaje a través de diversas regiones para competir en ligas y convertirse en Maestro Pokémon.",
    imagen: "/imagenes/anime/Pokemon.png",
    esPopular: true,
    categoria: "Finalizados",
    estudio: "OLM",
    lanzamiento: "Abril de 1997",
    resena: {
      titular: "El viaje de nostalgia y descubrimiento que acompañó a múltiples generaciones.",
      resumen: "Un clásico eterno del entrenamiento de criaturas y exploración de regiones que evoca aventura, superación constante y amistad sincera.",
      puntosFuertes: ["Diseño inolvidable de criaturas", "Espíritu de aventura nostálgico", "Combates de liga apasionantes"],
      veredicto: "Un ícono indiscutible del entretenimiento familiar.",
      puntuacionEditorial: 8.5
    }
  },
  {
    id: "solo-leveling",
    titulo: "Solo Leveling (Ore dake Level Up na Ken)",
    genero: ["Acción", "Fantasía", "Aventura"],
    temporadas: 1,
    sinopsis: "Sung Jinwoo, conocido como el cazador más débil de la humanidad, recibe una oportunidad única tras sobrevivir a una mazmorra doble: una interfaz privada que le permite subir de nivel infinitamente.",
    imagen: "/imagenes/anime/Solo-leveling.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "A-1 Pictures",
    lanzamiento: "Enero de 2024",
    resena: {
      titular: "Progresión de poder adictiva impulsada por una animación impactante.",
      resumen: "Lleva el concepto del crecimiento de personaje al estilo videojuego a un ritmo vertiginoso donde cada combate resulta decisivo e imponente.",
      puntosFuertes: ["Sensación de poder vertiginosa", "Banda sonora vibrante de Hiroyuki Sawano", "Diseño de sombras y batallas espectaculares"],
      veredicto: "Pura diversión para los fans de las subidas de nivel.",
      puntuacionEditorial: 9.0
    }
  },
  {
    id: "spy-x-family",
    titulo: "SPY x FAMILY",
    genero: ["Acción", "Comedia", "Recuentos de la vida"],
    temporadas: 2,
    sinopsis: "Un espía legendario crea una familia falsa para cumplir una misión secreta, sin saber que la esposa que eligió es una asesina a sueldo y la niña que adoptó posee telepatía.",
    imagen: "/imagenes/anime/spy-family.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "WIT Studio / CloverWorks",
    lanzamiento: "Abril de 2022",
    resena: {
      titular: "Una combinación idílica de comedia familiar, espionaje y ternura.",
      resumen: "Mantiene un balance perfecto entre secuencias de acción elegante y las absurdas e entrañables situaciones cotidianas vividas por la pequeña Anya.",
      puntosFuertes: ["Anya Forger como motor cómico irresistible", "Equilibrio entre acción y momentos de vida cotidiana", "Elenco principal inolvidable"],
      veredicto: "Encantador y apto para todo tipo de espectadores.",
      puntuacionEditorial: 9.2
    }
  },
  {
    id: "the-fragrant-flower-blooms-with-dignity",
    titulo: "The Fragrant Flower Blooms with Dignity (Kaoru Hana wa Rin to Saku)",
    genero: ["Romance", "Escolar", "Drama"],
    temporadas: 1,
    sinopsis: "Rintaro, un estudiante de una escuela de chicos con mala reputación, conoce a Kaoruko, una chica de una prestigiosa academia femenina vecina, construyendo un vínculo sincero a pesar de las barreras sociales.",
    imagen: "/imagenes/anime/The-Fragrant-Flower-Blooms-with-Dignity.png",
    esPopular: true,
    categoria: "Emisión",
    estudio: "CloverWorks",
    lanzamiento: "Julio de 2025",
    resena: {
      titular: "Una mirada madura, respetuosa y sincera sobre la empatía y el primer amor.",
      resumen: "Destaca por romper preconceptos sociales a través de personajes que se comunican con honestidad, madurez y un profundo respeto mutuo.",
      puntosFuertes: ["Diálogos maduros y comunicación saludable", "Personajes secundarios con verdadero peso", "Sensibilidad emocional única"],
      veredicto: "Una verdadera joya del romance escolar contemporáneo.",
      puntuacionEditorial: 9.3
    }
  }
];