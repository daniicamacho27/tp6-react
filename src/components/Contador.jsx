import { useState } from "react"

function Contador() {

  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  const resetear = () => {
    setCount(0)
  }

  return (
    <div className="contador">

      <h2>Contador Interactivo</h2>

      <p className={`numero ${count > 0 ? "verde" : "rojo"}`}>
        {count}
      </p>

      <div className="botones">
        <button onClick={sumar}>+1</button>

        <button onClick={restar} disabled={count === 0}>
          -1
        </button>

        <button onClick={resetear}>
          Reset
        </button>
      </div>

    </div>
  )
}

export default Contador