const pilares = [
  { icono: "🤫", titulo: "Confidencialidad", texto: "Solo las personas autorizadas pueden acceder a la información.", color: "celeste" },
  { icono: "✅", titulo: "Integridad", texto: "Los datos se mantienen exactos y no son alterados sin permiso.", color: "menta" },
  { icono: "⏱️", titulo: "Disponibilidad", texto: "Los sistemas y datos están accesibles cuando se necesitan.", color: "durazno" },
];

function Pilares() {
  return (
    <section>
      <h2 className="titulo-centro">Los tres pilares de la seguridad</h2>
      <p className="subtitulo">
        Conocidos como la tríada CIA, son la base de cualquier estrategia de seguridad.
      </p>
      <div className="grid">
        {pilares.map((p) => (
          <article key={p.titulo} className={`area ${p.color}`}>
            <span className="icono">{p.icono}</span>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pilares;