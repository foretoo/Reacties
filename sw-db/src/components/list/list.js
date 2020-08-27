import React, { useState, useEffect } from "react"
import Loader from "../loader"
import "./list.css"


const List = ({ type, getData, handleSelect }) => {

  const [list, setList] = useState(null)
  let output

  useEffect(() => {
    getData(type).then(data => {
      setList(data)
      handleSelect(data[0].id)
    })
  }, [type])

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
}

export default List
