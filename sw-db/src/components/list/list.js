import React, { memo } from "react"
import Loader from "../loader"
import "./list.css"

const List = memo(({ list, handleSelect }) => {

  let output

  if (list) {
    output = list.map(({ id, name }) => {
      return (
        <li key={id} onClick={() => handleSelect(id)}>
          {name}
        </li>
      )
    })
  }
  else output = <Loader />

  return <ul>{output}</ul>
})

export default List
