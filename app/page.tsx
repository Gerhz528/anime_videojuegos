import type { Metadata } from 'next';
import Link from 'next/link';

// 👇 1. Corregimos 'keyword' por 'keywords' (es obligatorio en plural para Next.js)
export const metadata: Metadata = {
  keywords: ['Memes', 'anime', 'animes', 'videojuegos', 'reseñas de videojuegos', 'reseñas de animes'],
};

export default function Home() {
  // 2. Definimos los datos estructurados
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Isekai Respawn',
    url: 'https://isekairespawn.vercel.app',
    description: 'Tu portal a nuevos mundos. Noticias, reseñas y memes de anime y videojuegos.',
  };

  return (
      // 👇 3. Cambiamos el <div> principal por <main> para cumplir con la semántica y accesibilidad
      <main className="container">

        {/* 👇 4. INYECTAMOS EL JSON-LD AQUÍ. Esto es lo que faltaba para que Google lo lea */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ================= HERO ================= */}
        <section className="hero">
          <img
              src="/imagen_principal_inde.jpg"
              alt="Imagen principal"
              className="hero-img"
          />
          <div className="hero-overlay">
            <h1>Isekai Respawn</h1>
            <p>Tu portal a nuevos mundos.</p>
            <div className="hero-botones">
              {/* 👇 5. Cambiamos <a> por <Link> para navegación rápida de Next.js */}
              <Link href="/anime" className="btn-hero">Explorar Anime</Link>
              <Link href="/videojuegos" className="btn-hero btn-secundario">Ver Videojuegos</Link>
            </div>
          </div>
        </section>

        {/* ================= NOTICIAS ================= */}
        <section className="seccion">
          <h2>Noticias / Novedades</h2>
          <div className="grid">
            <Link href="/noticias/anime" className="card card-link">
              <div className="card-img">
                <img src="/noticias_anime.jpg" alt="Noticias Anime"/>
              </div>
              <h3>Noticias de Anime</h3>
              <p>Últimos estrenos, temporadas y anuncios del mundo otaku.</p>
              <span className="btn">Ver más</span>
            </Link>

            <Link href="/noticias/videojuegos" className="card card-link">
              <div className="card-img">
                <img src="/noticias_videojuegos.jpg" alt="Noticias de videojuegos"/>
              </div>
              <h3>Noticias de Videojuegos</h3>
              <p>Lanzamientos, actualizaciones y eventos del mundo gamer.</p>
              <span className="btn">Ver más</span>
            </Link>
          </div>
        </section>

        {/* ================= ANIME ================= */}
        <section className="seccion">
          <h2>Anime</h2>
          <div className="grid">
            <Link href="/anime/informacion" className="card card-link">
              <div className="card-img">
                <img src="/informacion_anime.jpg" alt="Informacion Anime"/>
              </div>
              <h3>Información</h3>
              <p>Fichas, datos del mundo del anime.</p>
              <span className="btn">Ver más</span>
            </Link>

            <Link href="/anime/resenas" className="card card-link">
              <div className="card-img">
                <img src="/informacion.jpg" alt="Resenias Anime"/>
              </div>
              <h3>Reseñas</h3>
              <p>Análisis de series, películas y OVAs.</p>
              <span className="btn">Ver más</span>
            </Link>

            <Link href="/anime/memes" className="card card-link">
              <div className="card-img">
                <img src="/mim.jpeg" alt="Memes Anime" className="meme"/>
              </div>
              <h3>Memes</h3>
              <p>¿Es esto una Jojo referencia?</p>
              <span className="btn">Ver más</span>
            </Link>
          </div>
        </section>

        {/* ================= VIDEOJUEGOS ================= */}
        <section className="seccion">
          <h2>Videojuegos</h2>
          <div className="grid">
            <Link href="/videojuegos/informacion" className="card card-link">
              <div className="card-img">
                <img src="/wp10523090.jpg" alt="Informacion videojuegos"/>
              </div>
              <h3>Información</h3>
              <p>Fichas, requisitos y datos de tus juegos favoritos.</p>
              <span className="btn">Ver más</span>
            </Link>

            <Link href="/videojuegos/resenas" className="card card-link">
              <div className="card-img">
                <img src="/reseña.jpg" alt="Resenias Anime"/>
              </div>
              <h3>Reseñas</h3>
              <p>Análisis y opiniones de los últimos lanzamientos.</p>
              <span className="btn">Ver más</span>
            </Link>

            <Link href="/videojuegos/memes" className="card card-link">
              <div className="card-img">
                <img src="/maincra.jpg" alt="Memes de videojuegos"/>
              </div>
              <h3>Memes</h3>
              <p>"Memes, the DNA of the soul."</p>
              <span className="btn">Ver más</span>
            </Link>
          </div>
        </section>

      </main>
  );
}