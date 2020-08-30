import React, { useState, useEffect } from "react"
import Loader from "../loader"
import isMobile from "../ismobile"
import "./list.css"


const List = ({ type, getData, changeDetailsID }) => {

  const [list, setList] = useState(null)
  const [itemId, setId] = useState(null)
  const handleSelect = (id) => {
    changeDetailsID(id)
    setId(id)
  }
  let output

  useEffect(() => {
    getData(type).then(data => {
      setList(data.list)
      handleSelect(data.list[0].id)
    })
  }, [type])

  if (list) {
    output = list.map(({ id, name }) => {
      let className, active = null
      if (id === itemId) {
        className = "active"
        active = <span>{">>>"}</span>
      }
      return (
        <li
          key={id}
          className={className}
          onClick={() => handleSelect(id)}
        >
          {name}{active}
        </li>
      )
    })
  }
  else output = <Loader />

  return <ul className={isMobile() ? "list mobile" : "list"}>{output}</ul>
}

export default List
