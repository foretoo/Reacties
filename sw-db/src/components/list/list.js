import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { Context } from "../context"
import Loader from "../loader"
import "./list.css"


const List = () => {

  const [list, setList] = useState(null)
  const {isMo, page, id, changeDetails, getList} = useContext(Context)
  const history = useHistory()
  let output

  useEffect(() => {
    if (page) getList(page).then(data => setList(data.list))
  }, [page])

  if (list) {
    output = list.map(item => {
      let className, activeLine = null
      if (item.id === id) {
        className = "active"
        activeLine = <span className="active-line"></span>
      }
      return (
        <li
          key={item.id}
          className={className}
          onClick={() => history.push(item.id)}
        >
          <span className="label-item">{item.name}</span>{activeLine}
        </li>
      )
    })
  }
  else output = <Loader />

  return <ul className={isMo ? "list mobile" : "list"}>{output}</ul>
}

export default List
