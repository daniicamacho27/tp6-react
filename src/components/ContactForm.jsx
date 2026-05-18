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
    <div className="contact-form">

      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
         type="tel"
         placeholder="Tu teléfono"
         value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <textarea
          placeholder="Escribí tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <button
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

      </div>

    </div>
  );
}

export default ContactForm;