import imagen from "../assets/imagen.jpg";

function Importancia() {
  return (
    <section className="tarjeta con-imagen">
      <div className="texto">
        <h2>¿Por qué es importante?</h2>
        <p>
          Cada día se generan y comparten enormes cantidades de información personal,
          bancaria y empresarial. La ciberseguridad evita que esos datos sean robados,
          modificados o destruidos por personas no autorizadas.
        </p>
        <p>
          Un ataque puede provocar pérdidas económicas, interrumpir servicios
          esenciales como hospitales o bancos, y dañar la reputación de una
          organización. Por eso es una de las áreas con mayor demanda dentro de la
          tecnología.
        </p>
      </div>

      <img className="imagen-seccion" src={imagen} alt="Ciberseguridad" />
    </section>
  );
}

export default Importancia;