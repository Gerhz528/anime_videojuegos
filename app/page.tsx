import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">

      {/* ================= HERO ================= */}
      <section className="hero">
        <img
          src="/imagen_principal_inde.jpg"
          alt="Imagen principal"
          className="hero-img"
        />
        <div className="hero-overlay">
          <h1>Isikai Respawn</h1>
          <p>Tu portal a nuevos mundos.</p>
          <div className="hero-botones">
            <a href="/anime" className="btn-hero">Explorar Anime</a>
            <a href="/videojuegos" className="btn-hero btn-secundario">Ver Videojuegos</a>
          </div>
        </div>
      </section>

      {/* ================= NOTICIAS ================= */}
      <section className="seccion">
        <h2>Noticias / Novedades</h2>
        <div className="grid">


          {/* tarjeta de noticias de anime */}
          <Link href="/noticias/anime" className="card card-link">
            <div className="card-img">
              <img src="/noticias_anime.jpg" alt="Noticias Anime"/>
            </div>
            <h3>Noticias de Anime</h3>
            <p>Últimos estrenos, temporadas y anuncios del mundo otaku.</p>
            <span className="btn">Ver más</span>
          </Link>

          {/* tarjeta de noticias de videojuegos */}
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

          {/* tarjeta de información de anime */}
          <Link href="/anime/informacion" className="card card-link">
            <div className="card-img">
              <img src="/informacion_anime.jpg" alt="Informacion Anime"/>
            </div>
            <h3>Información</h3>
            <p>Fichas, datos y curiosidades del mundo del anime.</p>
            <span className="btn">Ver más</span>
          </Link>



          {/* tarjeta de reseñas de anime */}
          <Link href="/anime/resenas" className="card card-link">
            <div className="card-img">
            <img src="/informacion.jpg" alt="Resenias Anime"/>
            </div>
            <h3>Reseñas</h3>
            <p>Análisis de series, películas y OVAs.</p>
            <span className="btn">Ver más</span>
          </Link>

          {/* tarjeta de animes de anime */}
          <Link href="/anime/memes" className="card card-link">
            <div className="card-img">
              <img src="/mim.jpeg" alt="Memes Anime" className="meme"/>
            </div>
            <h3>Memes</h3>
            <p>Humor otaku en su máxima expresión.</p>
            <span className="btn">Ver más</span>
          </Link>

        </div>
      </section>

      {/* ================= VIDEOJUEGOS ================= */}
      <section className="seccion">
        <h2>Videojuegos</h2>
        <div className="grid">

          {/* tarjeta de información de videojuegos */}
          <Link href="/videojuegos/informacion" className="card card-link">
            <div className="card-img">
              <img src="/wp10523090.jpg" alt="Informacion videojuegos"/>
            </div>
            <h3>Información</h3>
            <p>Fichas, requisitos y datos de tus juegos favoritos.</p>
            <span className="btn">Ver más</span>
          </Link>

          {/* tarjeta de reseñas de videojuegos */}
          <Link href="/videojuegos/resenas" className="card card-link">
            <div className="card-img">
              <img src="/reseña.jpg" alt="Resenias Anime"/>
            </div>
            <h3>Reseñas</h3>
            <p>Análisis y opiniones de los últimos lanzamientos.</p>
            <span className="btn">Ver más</span>
          </Link>

          {/* tarjeta de memes de videojuegos */}
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



    </div>
  );
}
