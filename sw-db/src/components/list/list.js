import React from "react"
import Loader from "../loader"
import "./list.css"

const List = (props) => {

  let output
  if (props.hasList) {
    output = props.list.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => props.handleSelected(item.id)}>
          {item.name}
        </li>
      )
    })
  }
  else output = <Loader />

  return (
    <ul>
      {output}
    </ul>
  )
}
export default List
