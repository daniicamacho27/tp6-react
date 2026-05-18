import { useState } from "react";
import "./styles/global.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Contador from "./components/Contador";
import ContactForm from "./components/ContactForm";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div className="app">

      <Header
      mostrarProductos={() => setMostrarProductos(!mostrarProductos)}
      mostrarContacto={() => setMostrarContacto(!mostrarContacto)}
      />

      {vista === "productos" && (

        <div className="cards-container">

          <Card
            titulo="Notebook Gamer"
            descripcion="Potencia máxima para gaming y estudio."
            imagen="https://images.unsplash.com/photo-1640695257754-7e2932f9ad0f?q=80&w=870&auto=format&fit=crop"
            precio={2500}
          />

          <Card
            titulo="Auriculares RGB"
            descripcion="Sonido envolvente y diseño moderno."
            imagen="https://images.unsplash.com/photo-1592084843797-2ea293a5db98?q=80&w=870&auto=format&fit=crop"
            precio={350}
          />

          <Card
            titulo="Iphone Pro"
            descripcion="Cámara premium y batería duradera."
            imagen="https://images.unsplash.com/photo-1716487637579-08069dd12c93?q=80&w=870&auto=format&fit=crop"
            precio={1800}
          />

          <Card
            titulo="Teclado Mecánico"
            descripcion="Ideal para programar y jugar."
            imagen="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=965&auto=format&fit=crop"
          />

        </div>
      )}

      {vista === "contacto" && (
        <ContactForm />
      )}

      <Contador />

      <Footer />
      
    </div>
  );
}

export default App;