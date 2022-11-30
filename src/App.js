import { BaseColaboradores } from "./BaseColaboradores"
import { useState } from "react"

function App() {

  const [colaboradorNombre, setColaboradorNombre] = useState("")
  const [colaboradorCorreo, setColaboradorCorreo] = useState("")
  const [colaboradorId, setColaboradorId] = useState("4")
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const list = listaColaboradores.map((colaborador) => <li key={colaborador.id} > {colaborador.id} {colaborador.nombre} {colaborador.correo}</li>)

  //Función al enviar el formulario
  const enviarFormulario = (e) => {
    console.log("Enviar form")
    e.preventDefault()
    setColaboradorNombre(colaboradorNombre)
    setColaboradorCorreo(colaboradorCorreo)    

    // Agregamos al colaborador
    setListaColaboradores([...listaColaboradores, {
      id: colaboradorId,
      nombre: colaboradorNombre,
      correo: colaboradorCorreo
    },])
    
    // Vaciamos el formulario
    setColaboradorNombre("") 
    setColaboradorCorreo("")
    setColaboradorId( Number(colaboradorId) + 1) 
  }
  //Función al escribir sobre el input del formulario
  const capturaNombre = (e) => {
    console.log("Captura Nombre")
    console.log(e.target.value)
    setColaboradorNombre(e.target.value)
  }

  const capturaCorreo = (e) => {
    console.log("Captura Correo")
    console.log(e.target.value)
    setColaboradorCorreo(e.target.value)
  }

  return (
    <div>
      <form onSubmit={enviarFormulario}>
        <input
          placeholder="ingrese nombre del colaborador"
          name="ingrese-nombre-colaborador"
          onChange={capturaNombre}
          value={colaboradorNombre}
        ></input>
        <input
          placeholder="ingrese correo del colaborador"
          name="ingrese-correo-colaborador"
          type="email"
          onChange={capturaCorreo}
          value={colaboradorCorreo}
        ></input>
        <button>Agregar Colaborador</button>
      </form>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default App;
