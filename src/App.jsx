import { useState } from "react";
import "./styles/global.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contador from "./components/Contador";
import ContactForm from "./components/ContactForm";
import ProductList from "./components/ProductList";
import TodoApp from "./components/TodoApp";

function App() {

  const [vista, setVista] = useState("inicio");

  return (
    <div className="app">

      <Header
        mostrarProductos={() => setVista("productos")}
        mostrarContacto={() => setVista("contacto")}
      />

      {vista === "inicio" && (
        <div className="contador">
          <h2>Bienvenidos a Prime Ventas</h2>
          <p>
            "El éxito de una empresa no se mide solo por lo que vende, sino por la confianza que construye en cada cliente."
          </p>
        </div>
      )}

    {vista === "productos" && (
      <ProductList />
    )}

      {vista === "contacto" && (
        <ContactForm />
      )}

      <Contador />

      <TodoApp />

      <Footer />

    </div>
  );
}

export default App;