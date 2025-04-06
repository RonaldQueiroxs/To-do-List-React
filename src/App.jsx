// Importações do Arquivo components
import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar Programação",
    description: "Estudar Programação para se tornar um desenvolvedor Full Stack",
    isCompleted: false
  }, {
    id: 2,
    title: "Estudar Qumica",
    description: "Estudar Pra Prova de Amanhã",
    isCompleted: false
  }, {
    id: 3,
    title: "Curso de Coursera",
    description: "Fazer o Curso da Google de Analise de Dados",
    isCompleted: false
  }
])

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
            <h1 className='text-3xl text-slate-100 font-bold text-center'>
              Gerenciador de Tarefas
            </h1>
            <Tasks tasks = {tasks}/>
            <AddTask />
        </div>
      </div>
    </>
  )
}

export default App
