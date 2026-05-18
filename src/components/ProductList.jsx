import { useState } from "react";
import Card from "./Card";

function ProductList() {

  const [categoria, setCategoria] = useState("Todas");
  const [soloStock, setSoloStock] = useState(false);

  const productos = [
    {
      id: 1,
      nombre: "Notebook Gamer",
      precio: 2500,
      categoria: "Electrónica",
      enStock: true,
      imagen: "https://images.unsplash.com/photo-1640695257754-7e2932f9ad0f?q=80&w=870&auto=format&fit=crop"
    },
    {
      id: 2,
      nombre: "Auriculares RGB",
      precio: 350,
      categoria: "Electrónica",
      enStock: true,
      imagen: "https://images.unsplash.com/photo-1592084843797-2ea293a5db98?q=80&w=870&auto=format&fit=crop"
    },
    {
      id: 3,
      nombre: "Remera Oversize",
      precio: 120,
      categoria: "Ropa",
      enStock: false,
      imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=870&auto=format&fit=crop"
    },
    {
      id: 4,
      nombre: "Teclado Mecánico",
      precio: 500,
      categoria: "Electrónica",
      enStock: true,
      imagen: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=965&auto=format&fit=crop"
    },
    {
      id: 5,
      nombre: "Zapatillas Urbanas",
      precio: 800,
      categoria: "Ropa",
      enStock: true,
      imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop"
    },
    {
      id: 6,
      nombre: "Mouse Gamer",
      precio: 200,
      categoria: "Electrónica",
      enStock: false,
      imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=870&auto=format&fit=crop"
    }
  ];

  const productosFiltrados = productos.filter((producto) => {

    const filtroCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const filtroStock =
      !soloStock || producto.enStock;

    return filtroCategoria && filtroStock;
  });

  return (
    <div>

      <div className="filtros">

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option>Todas</option>
          <option>Electrónica</option>
          <option>Ropa</option>
        </select>

        <label className="checkbox-stock">

          <input
            type="checkbox"
            checked={soloStock}
            onChange={() => setSoloStock(!soloStock)}
          />

          Solo en stock
        </label>

      </div>

      <div className="cards-container">

        {productosFiltrados.length > 0 ? (

          productosFiltrados.map((producto) => (

            <Card
              key={producto.id}
              titulo={producto.nombre}
              descripcion={producto.categoria}
              imagen={producto.imagen}
              precio={producto.precio}
            />

          ))

        ) : (

          <h2 className="sin-productos">
            No hay productos
          </h2>

        )}

      </div>

    </div>
  );
}

export default ProductList;