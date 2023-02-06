import React, { useState } from "react"
import styles from "./style.module.css"
export const ToDoFilter = (props) => {
  const [filters, setFilters] = useState(["All", "Completed", "Active"])
  return (
    <div>
      {filters.map((elm, i) => {
        return (
          <React.Fragment key={i}>
            <input
              className={styles.rad}
              type="radio"
              checked={elm === props.currentFilter}
              onChange={() => props.onFilter(elm)}
              name="filter"
            />
            {elm}
          </React.Fragment>
        )
      })}
    </div>
  )
}
