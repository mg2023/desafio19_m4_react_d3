import { BaseColaboradores } from "./BaseColaboradores"

const list = BaseColaboradores.map((colaborador) => <li key={colaborador} > {colaborador.id} {colaborador.nombre} {colaborador.correo}</li>)

// const lista = listaOrdenada.map(color => <li key={color}> {color} </li>)


function App() {
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default App;
