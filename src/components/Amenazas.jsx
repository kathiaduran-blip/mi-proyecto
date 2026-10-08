const amenazas = [
  { icono: "🎣", titulo: "Phishing", texto: "Correos o mensajes falsos que se hacen pasar por empresas reales para robar contraseñas o datos bancarios.", color: "lila" },
  { icono: "🦠", titulo: "Malware", texto: "Programas maliciosos como virus, troyanos o spyware que dañan o espían los equipos.", color: "menta" },
  { icono: "🔐", titulo: "Ransomware", texto: "Cifra la información de la víctima y exige un pago para devolver el acceso.", color: "durazno" },
  { icono: "🎭", titulo: "Ingeniería social", texto: "Manipula a las personas, no a las máquinas, para que entreguen información confidencial.", color: "celeste" },
  { icono: "🌊", titulo: "Ataque DDoS", texto: "Satura un servidor con tráfico falso hasta dejarlo fuera de servicio.", color: "lila" },
  { icono: "🕵️", titulo: "Robo de credenciales", texto: "Obtención de usuarios y contraseñas para entrar a cuentas ajenas.", color: "menta" },
];

function Amenazas() {
  return (
    <section id="amenazas">
      <h2 className="titulo-centro">Amenazas comunes</h2>
      <div className="grid">
        {amenazas.map((a) => (
          <article key={a.titulo} className={`area ${a.color}`}>
            <span className="icono">{a.icono}</span>
            <h3>{a.titulo}</h3>
            <p>{a.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Amenazas;