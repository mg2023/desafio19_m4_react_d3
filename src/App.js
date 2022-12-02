import { BaseColaboradores } from "./BaseColaboradores"
import { useState } from "react"

function App() {

  // const [resultadoBusqueda, setResultadoBusqueda] = useState(BaseColaboradores)
  const [resultadoBusqueda, setResultadoBusqueda] = useState({id: "", nombre: "",correo: ""})
  const [colaboradorNombre, setColaboradorNombre] = useState("")
  const [colaboradorCorreo, setColaboradorCorreo] = useState("")
  const [colaboradorId, setColaboradorId] = useState("4")
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [busquedaPorNombre, setBusquedaPorNombre] = useState("")
  const list = listaColaboradores.map((colaborador) => <li key={colaborador.id} > {colaborador.id} {colaborador.nombre} {colaborador.correo}</li>)
 


///////////////////////AGREGA COLABORADORES/////////////////////////////////
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
    }])
    
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
///////////////////////FIN AGREGA COLABORADORES/////////////////////////////////



///////////////////////BUSCAR COLABORADORES POR NOMBRE/////////////////////////////////
  const enviarBusqueda = (e) => {
    e.preventDefault()
    console.log(`Iniciar busqueda por nombre: ${busquedaPorNombre}`)

    const result = listaColaboradores.filter(user => user.nombre === busquedaPorNombre)
    if (result.length > 0){
      setResultadoBusqueda(
        {
          id: result[0].id,
          nombre: result[0].nombre,
          correo: result[0].correo
        }  
      )
    }
    else {
      console.log("No encontrado")
    }

    setBusquedaPorNombre("")

  }

  const capturaBusqueda = (e) => {
    setBusquedaPorNombre(e.target.value)
    console.log(`setBusquedaPorNombre: ${e.target.value}`)
  }



  return (
    <main className="container">
      <form onSubmit={enviarFormulario}>
        <input
          placeholder="Nombre"
          name="ingrese-nombre-colaborador"
          onChange={capturaNombre}
          value={colaboradorNombre}
        ></input>
        <input
          placeholder="Correo"
          name="ingrese-correo-colaborador"
          type="email"
          onChange={capturaCorreo}
          value={colaboradorCorreo}
        ></input>
        <button>Agregar Colaborador</button>
      </form>
      <form onSubmit={enviarBusqueda}>
        <input
          placeholder="Nombre"
          name="busqueda-por-nombre"
          type="search"
          onChange={capturaBusqueda}
          value={busquedaPorNombre}
        ></input>
        <button>Buscar colaborador</button>
      </form>
      
      ID:{resultadoBusqueda.id} , Nombre: {resultadoBusqueda.nombre}, Correo: {resultadoBusqueda.correo }
      <ul>
        {list}
      </ul>
    </main>
  );
}

export default App;
