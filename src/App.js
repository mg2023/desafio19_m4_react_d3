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
  // const list = listaColaboradores.map((colaborador) => <ul class="list-group list-group-horizontal-lg">
  //   <li class="list-group-item col-1" key={colaborador.id} > {colaborador.id} </li>
  //   <li class="list-group-item col" key={colaborador.id} > {colaborador.nombre} </li>
  //   <li class="list-group-item col" key={colaborador.id} > {colaborador.correo}</li>
  // </ul>)



  ///////////////////////AGREGA COLABORADORES/////////////////////////////////
  //Función al enviar el formulario
  const enviarFormulario = (e) => {
    // console.log("Enviar form")
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
    // console.log("Captura Nombre")
    // console.log(e.target.value)
    setColaboradorNombre(e.target.value)
  }

  const capturaCorreo = (e) => {
    // console.log("Captura Correo")
    // console.log(e.target.value)
    setColaboradorCorreo(e.target.value)
  }
  ///////////////////////FIN AGREGA COLABORADORES/////////////////////////////////



  ///////////////////////BUSCAR COLABORADORES POR NOMBRE/////////////////////////////////
  const enviarBusqueda = (e) => {
    e.preventDefault()
    // console.log(`Iniciar busqueda por nombre: ${busquedaPorNombre}`)

    const result = listaColaboradores.filter(user => user.nombre === busquedaPorNombre)
    if (result.length > 0) {
      setResultadoBusqueda(
        {
          id: result[0].id,
          nombre: result[0].nombre,
          correo: result[0].correo
        }
      )
    }
    else {
      // console.log("No encontrado")
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
    // console.log(`setBusquedaPorNombre: ${busquedaPorNombre}`)
  }

  ///////////////////////FIN BUSCAR COLABORADORES POR NOMBRE/////////////////////////////////

  return (
    <main className="container">
      <div className="row">
        <div className="col">
        </div>
        <div className="col-6 p-3 mb-2 bg-info text-dark">
          <header>
            <p className="fs-1">Registro colaboradores</p>
          </header>
          <form onSubmit={enviarFormulario}>
            <div className="mb-3">
              <label className="form-label">Nombre del colaborador</label>
              <input type="text" className="form-control" id="exampleInputName"
                placeholder="Ingresa el nombre del colaborador"
                name="ingrese-nombre-colaborador"
                onChange={capturaNombre}
                value={colaboradorNombre}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Correo del colaborador</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Ingresa el correo del colaborador"
                name="ingrese-correo-colaborador"
                onChange={capturaCorreo}
                value={colaboradorCorreo}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">Agregar colaborador</button>
          </form>
          <div>
            <form onSubmit={enviarBusqueda}>
              <div className="input-group mb-3 mt-3">
                {/* <label for="exampleInputName" class="form-label"></label> */}
                <input type="search" className="form-control" id="exampleInputName"
                  placeholder="Busca un colaborador"
                  name="busqueda-por-nombre"
                  onChange={capturaBusqueda}
                  value={busquedaPorNombre}
                ></input>
                <button type="submit" className="btn btn-primary">Buscar colaborador</button>
              </div>
            </form>
            {resultadoBusqueda.id > 0 ?
            <div>
              <p className="fs-3">Resultado búsqueda</p>
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item col-1">ID</li>
                <li className="list-group-item col-4">Nombre</li>
                <li className="list-group-item col">Correo</li>
              </ul>
              <ul className="list-group list-group-horizontal-lg" key={resultadoBusqueda.id} >
                <li className="list-group-item col-1" > {resultadoBusqueda.id} </li>
                <li className="list-group-item col-4" > {resultadoBusqueda.nombre} </li>
                <li className="list-group-item col" > {resultadoBusqueda.correo}</li>
              </ul>
            </div>
            : ''}
          </div>
          <div>
            <p className="fs-3 pt-3">Listado de colaboradores     </p>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item col-1">ID</li>
              <li className="list-group-item col-4">Nombre</li>
              <li className="list-group-item col">Correo</li>
            </ul>
            {listaColaboradores.map((colaborador) =>
              <ul className="list-group list-group-horizontal-lg" key={colaborador.id} >
                <li className="list-group-item col-1" > {colaborador.id} </li>
                <li className="list-group-item col-4" > {colaborador.nombre} </li>
                <li className="list-group-item col"  > {colaborador.correo}</li>
              </ul>)}
          </div>
          <footer>
            <p className="fs-5 text-center pt-3">Desafio colaboradores 2022</p>
          </footer>
        </div>
        <div className="col">
        </div>
      </div>
    </main>
  );
}

export default App;
