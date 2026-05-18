function Card({
  titulo,
  descripcion,
  imagen,
  precio = 0,
  children
}) {
  return (
    <div className="card">

      <img src={imagen} alt={titulo} className="card-img" />

      <div className="card-content">

        <h2>{titulo}</h2>

        <p>{descripcion}</p>

        <h3>${precio}</h3>

        <button className="btn-comprar">
          Comprar
        </button>

        {children}

      </div>
    </div>
  );
}

export default Card;