import "./App.css"
import { useState } from "react"
import { ToDoList } from "./components/ToDoList"

function App() {
  const [tasks, setTasks] = useState([
    { id: 101, text: "Workout", completed: false },
    { id: 102, text: "Morning Coffee", completed: true },
    { id: 103, text: "Have a shower", completed: false },
    { id: 104, text: "Breakfast", completed: true },
  ])
  const [filter, setFilter] = useState("All")
  const changeToDoStatus = (id) => {
    setTasks([
      ...tasks.map((elm) =>
        elm.id !== id ? elm : { ...elm, completed: !elm.completed }
      ),
    ])
  }
  const handleAdd = (text) => {
    setTasks([{ text, completed: false, id: Date.now() }, ...tasks])
  }
  const handleDelete = (id) => {
    setTasks([...tasks.filter((elm) => elm.id !== id)])
  }
  const handleMakeAllActive = () => {
    setTasks([
      ...tasks.filter((elm) => {
        return (elm.completed = false)
      }),
      ...tasks,
    ])
  }
  return (
    <>
      <ToDoList
        items={tasks}
        onStatusChange={changeToDoStatus}
        onDelete={handleDelete}
        onAdd={handleAdd}
        filter={filter}
        onFilter={setFilter}
        onActive={handleMakeAllActive}
      />
    </>
  )
}

export default App

