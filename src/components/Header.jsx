function Header({ mostrarProductos }) {
  return (
    <header className="header">

      <h1 className="titulo-principal">
        Prime Ventas
      </h1>

      <p>
        Conectando tu mundo con la mejor tecnología. Descúbrelo en Prime Ventas.
      </p>

      <nav>
        <ul>
          <li>Inicio</li>

          <li onClick={mostrarProductos}>
            Productos
          </li>

          <li>Contacto</li>
        </ul>
      </nav>

    </header>
  )
}

export default Header