import React, { useContext } from "react"
import { Context } from "../context"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {

  const {page, changePage} = useContext(Context)

  return (
    <header>
      <h1>StarWars Database</h1>
      <nav>
        <div className={page === "people" ? "active" : null}>
          <Link to="/people/">People</Link>
        </div>
        <div className={page === "planets" ? "active" : null}>
          <Link to="/planets/">Planets</Link>
        </div>
        <div className={page === "starships" ? "active" : null}>
          <Link to="/starships/">Starships</Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
