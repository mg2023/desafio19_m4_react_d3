import { BaseColaboradores } from "./BaseColaboradores"
import { useState } from "react"

function App() {

  // const [resultadoBusqueda, setResultadoBusqueda] = useState(BaseColaboradores)
  const [resultadoBusqueda, setResultadoBusqueda] = useState({ id: "", nombre: "", correo: "" })
  const [colaboradorNombre, setColaboradorNombre] = useState("")
  const [colaboradorCorreo, setColaboradorCorreo] = useState("")
  const [colaboradorId, setColaboradorId] = useState("4")
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [busquedaPorNombre, setBusquedaPorNombre] = useState("")
  const list = listaColaboradores.map((colaborador) => <ul class="list-group list-group-horizontal-lg">
    <li class="list-group-item" key={colaborador.id} > {colaborador.id} </li>
    <li class="list-group-item" key={colaborador.id} > {colaborador.nombre} </li>
    <li class="list-group-item" key={colaborador.id} > {colaborador.correo}</li>
  </ul>)



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
    setColaboradorId(Number(colaboradorId) + 1)
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
    if (result.length > 0) {
      <ul class="list-group list-group-horizontal">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
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
      setResultadoBusqueda(
        {
          id: '',
          nombre: '',
          correo: ''
        }
      )
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
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Nombre del colaborador</label>
          <input type="text" class="form-control" id="exampleInputName"
            placeholder="Ingresa el nombre del colaborador"
            name="ingrese-nombre-colaborador"
            onChange={capturaNombre}
            value={colaboradorNombre}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo del colaborador</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Ingresa el correo del colaborador"
            name="ingrese-correo-colaborador"
            onChange={capturaCorreo}
            value={colaboradorCorreo}
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">Agregar colaborador</button>
      </form>
      <form onSubmit={enviarBusqueda}>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label"></label>
          <input type="search" class="form-control" id="exampleInputName"
            placeholder="Busca un colaborador"
            name="busqueda-por-nombre"
            onChange={capturaBusqueda}
            value={busquedaPorNombre}
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">Buscar colaborador</button>
      </form>
      <div>
        ID:{resultadoBusqueda.id} , Nombre: {resultadoBusqueda.nombre}, Correo: {resultadoBusqueda.correo}
      </div>
      <div>
        <p class="fs-1">Listado de colaboradores     </p>
      </div>
      <div class="px-5 col-sm-12 col-md-8">
        <ul class="list-group list-group-horizontal-lg">
          <li class="list-group-item">ID</li>
          <li class="list-group-item">Nombre</li>
          <li class="list-group-item">Correo</li>
        </ul>
        {list}
      </div>

    </main>
  );
}

export default App;
