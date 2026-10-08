import imagenHero from "../assets/imagen-hero.jpg";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-texto">
        <p className="etiqueta">Protege tu mundo digital</p>
        <h1>Ciberseguridad</h1>
        <p>
          Conjunto de prácticas, tecnologías y procesos que protegen los sistemas,
          las redes y los datos de ataques digitales, accesos no autorizados y daños.
        </p>
        <a href="#amenazas" className="boton">Conocer las amenazas</a>
      </div>

      <img className="hero-imagen" src={imagenHero} alt="Ciberseguridad" />
    </header>
  );
}

export default Hero;