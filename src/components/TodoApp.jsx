import { useState } from "react";

function TodoApp() {

  const [tarea, setTarea] = useState("");

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();

    if (tarea.trim() === "") return;

    const nuevaTarea = {
      id: Date.now(),
      texto: tarea,
      completada: false
    };

    setTareas([...tareas, nuevaTarea]);

    setTarea("");
  };

  const toggleTarea = (id) => {

    const nuevasTareas = tareas.map((t) =>
      t.id === id
        ? { ...t, completada: !t.completada }
        : t
    );

    setTareas(nuevasTareas);
  };

  const eliminarTarea = (id) => {

    const nuevasTareas = tareas.filter(
      (t) => t.id !== id
    );

    setTareas(nuevasTareas);
  };

  const pendientes = tareas.filter(
    (t) => !t.completada
  ).length;

  return (
    <div className="todo-container">

      <h2>Lista de Tareas</h2>

      <form onSubmit={agregarTarea} className="todo-form">

        <input
          type="text"
          placeholder="Escribí una tarea..."
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />

        <button type="submit">
          Agregar
        </button>

      </form>

      <p className="pendientes">
        Tareas pendientes: {pendientes}
      </p>

      {tareas.length === 0 ? (
        <p className="sin-tareas">
          No hay tareas
        </p>
      ) : (
        <ul className="lista-tareas">

          {tareas.map((t) => (
            <li key={t.id} className="tarea-item">

              <span
                className={
                  t.completada
                    ? "completada"
                    : ""
                }
              >
                {t.texto}
              </span>

              <div className="acciones">

                <button
                  onClick={() => toggleTarea(t.id)}
                >
                  {t.completada
                    ? "Desmarcar"
                    : "Completar"}
                </button>

                <button
                  onClick={() => eliminarTarea(t.id)}
                >
                  Eliminar
                </button>

              </div>

            </li>
          ))}

        </ul>
      )}

    </div>
  );
}

export default TodoApp;