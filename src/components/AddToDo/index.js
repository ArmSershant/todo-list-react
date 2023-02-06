import { useState } from "react"
import styles from "./style.module.css"
export const AddToDo = (props) => {
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!text.trim()) {
      setError("Please write something...")
    } else if (
      props.items.find((elm) => elm.text.toLowerCase() === text.toLowerCase())
    ) {
      setError("You can't add the same ToDo")
    } else {
      setError("")
      setText("")
      props.onAdd(text)
      event.target.reset()
    }
  }
  return (
    <div>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Add new to do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className={styles.btnAdd}>Add</button>
        </label>
      </form>
    </div>
  )
}
