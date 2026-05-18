function Header({ mostrarProductos,mostrarContacto }) {
  return (
    <header className="header">

      <h1 className="titulo-principal">
        Prime Ventas
      </h1>

      <p>
        Conectando tu mundo con la mejor tecnología.
      </p>

      <nav>
        <ul>
          <li onClick={() => window.location.reload()}>
            Inicio
          </li>

          <li onClick={mostrarProductos}>
            Productos
          </li>

          <li onClick={mostrarContacto}>
            Contacto
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Header;