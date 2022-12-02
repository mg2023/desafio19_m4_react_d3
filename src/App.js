import { BaseColaboradores } from "./BaseColaboradores"
import { useState } from "react"

function App() {

  // const [resultadoBusqueda, setResultadoBusqueda] = useState(BaseColaboradores)
  const [resultadoBusqueda, setResultadoBusqueda] = useState({id:"", nombre: "", correo:""})
  const [colaboradorNombre, setColaboradorNombre] = useState("")
  const [colaboradorCorreo, setColaboradorCorreo] = useState("")
  const [colaboradorId, setColaboradorId] = useState("4")
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [busquedaPorNombre, setBusquedaPorNombre] = useState("")
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

  const enviarBusqueda = (e) => {
    e.preventDefault()
    console.log(`Iniciar busqueda por nombre ${busquedaPorNombre}`)

    const result = listaColaboradores.filter(user => user.nombre === busquedaPorNombre)
    console.log(`result id : ${result.id}`)
    console.log(result)
    // setResultadoBusqueda({
    //   id: "hola",
    //   nombre: result.nombre,
    //   correo: result.correo
    // }
    // )
    console.log(resultadoBusqueda.id)
    console.log(resultadoBusqueda.correo)
    console.log(resultadoBusqueda.nombre)

    // resultRender = <div> Id:{result.id} Nombre:{result.nombre} correo:{result.correo}</div>
 
    // console.log(`result = ${result.value}`)
    


    // for (let elem in listaColaboradores){
    //     if (listaColaboradores[elem].nombre === busquedaPorNombre){
    //       console.log("Nombre encontrado!!")
    //     }


    // }

    setBusquedaPorNombre("")

  }

  const capturaBusqueda = (e) => {
    console.log("Captura busqueda")
    setBusquedaPorNombre(e.target.value)
    console.log(e.target.value)
  }



  return (
    <div>
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
    </div>
  );
}

export default App;
