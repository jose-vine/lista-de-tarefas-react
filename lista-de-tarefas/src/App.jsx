import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarefa from "./Tarefa/Tarefa";
import ListaDeTarefas from "./ListaDeTarefas/ListaDeTarefas";

function App() {
  const [count, setCount] = useState(0)
  let tarefas = ["Siara", "Lara", "Pedro", "Vine", "Stênia"];

  /*<Tarefa tarefa=""/>*/

  return (
    <>
      <ListaDeTarefas >
        {tarefas.map((tarefa) => <Tarefa tarefa={tarefa}/>)}
      </ListaDeTarefas>
    </>
  )
}

export default App
