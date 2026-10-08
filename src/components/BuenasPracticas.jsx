const practicas = [
  { titulo: "Contraseñas seguras", texto: "largas, únicas para cada cuenta y con letras, números y símbolos." },
  { titulo: "Verificación en dos pasos", texto: "añade un segundo código además de la contraseña." },
  { titulo: "Actualizar el software", texto: "las actualizaciones corrigen fallas que los atacantes aprovechan." },
  { titulo: "Desconfiar de enlaces y archivos", texto: "verificar el remitente antes de abrir algo sospechoso." },
  { titulo: "Copias de seguridad", texto: "respaldar la información para poder recuperarla ante un ataque." },
  { titulo: "Usar redes confiables", texto: "evitar WiFi públicas para operaciones sensibles." },
];

function BuenasPracticas() {
  return (
    <section className="tarjeta">
      <h2>Buenas prácticas</h2>
      <p>Medidas sencillas que reducen mucho el riesgo de un ataque:</p>
      <ul className="lista-detalle">
        {practicas.map((p) => (
          <li key={p.titulo}>
            <strong>{p.titulo}:</strong> {p.texto}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BuenasPracticas;