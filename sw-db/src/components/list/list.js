import React, { useState, useEffect, useContext } from "react"
import { Context } from "../context"
import Loader from "../loader"
import "./list.css"


const List = ({ getData }) => {

  const [list, setList] = useState(null)
  const {isMo, page, id, changeDetails, getList} = useContext(Context)
  let output

  useEffect(() => {
    getList(page).then(data => {
      setList(data.list)
      changeDetails(data.list[0].id)
    })
  }, [page])

  if (list) {
    output = list.map(item => {
      let className, active = null
      if (item.id === id) {
        className = "active"
        active = <span className="active-line"></span>
      }
      return (
        <li
          key={item.id}
          className={className}
          onClick={() => changeDetails(item.id)}
        >
          <span className="label-item">{item.name}</span>{active}
        </li>
      )
    })
  }
  else output = <Loader />

  return <ul className={isMo ? "list mobile" : "list"}>{output}</ul>
}

export default List
