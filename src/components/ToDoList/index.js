import { AddToDo } from "../AddToDo"
import { ToDoFilter } from "../ToDoFilter"
import { ToDoItem } from "../ToDoItem"
import styles from "./style.module.css"

export const ToDoList = (props) => {
  let items = props.items
  if (props.filter === "Completed") {
    items = items.filter((elm) => elm.completed === true)
  } else if (props.filter === "Active") {
    items = items.filter((elm) => elm.completed === false)
  }

  return (
    <div>
      <h3 className={styles.title}>ToDoList</h3>
      <h4 className={styles.count}>You have {items.length} ToDo's</h4>
      <AddToDo onAdd={props.onAdd} items={items} />
      <ToDoFilter onFilter={props.onFilter} currentFilter={props.filter} />
      <div className={styles.flex}>
        <button className={styles.activeBtn} onClick={() => props.onActive()}>Make All Active</button>
        {items.map((elm) => {
          return (
            <ToDoItem
              onStatusChange={props.onStatusChange}
              key={elm.id}
              item={elm}
              onDelete={props.onDelete}
            />
          )
        })}
      </div>
    </div>
  )
}
