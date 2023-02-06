import styles from "./style.module.css"
export const ToDoItem = (props) => {
  const { text, completed, id } = props.item
  const style =
    styles.flex + (completed ? " " + styles.done : " " + styles.active)

  return (
    <div className={styles.flex}>
      <p className={style}>{text}</p>
      <input
        onChange={() => props.onStatusChange(id)}
        type="checkbox"
        checked={completed}
      />
      {/* <span>{completed ? "Cancel" : "Complete"}</span> */}
      <button onClick={() => props.onDelete(id)} className={styles.delete}>
        Delete
      </button>
    </div>
  )
}
