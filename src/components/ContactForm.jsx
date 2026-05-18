import { useState } from "react";

function ContactForm() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [telefono,setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      nombre,
      email,
      mensaje,
      telefono
    });

    alert("Mensaje enviado ");
  };

  return (
    <div className="form-container">

      <h2>Formulario de contacto: </h2>

      <form onSubmit={handleSubmit}>

  <div className="form-row">

    <div className="form-group">
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </div>

    <div className="form-group">
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

  </div>

  <div className="form-row">

    <div className="form-group">
      <input
        type="tel"
        placeholder="Tu teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
    </div>

  </div>

  <div className="form-group">
    <textarea
      placeholder="Escribí tu mensaje"
      value={mensaje}
      onChange={(e) => setMensaje(e.target.value)}
    />
  </div>

  <button
    className="form-btn"
    type="submit"
    disabled={!nombre || !email || !telefono || !mensaje}
  >
    Enviar
  </button>

</form>


      <div className="preview">

        <h3>Preview en vivo</h3>

        <p><strong>Nombre:</strong> {nombre}</p>

        <p><strong>Email:</strong> {email}</p>

        <p><strong>Mensaje:</strong> {mensaje}</p>

        <p><strong>Teléfono:</strong> {telefono}</p>

      </div>

    </div>
  );
}

export default ContactForm;