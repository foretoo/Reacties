import React from "react"
import "./header.css"

const Header = ({ page, changePage }) => {

  return (
    <header>
      <h1>StarWars Database</h1>
      <nav>
        <div
          className={page === "people" ? "active" : null}
          onClick={() => changePage("people")}>
          People
        </div>
        <div
          className={page === "planets" ? "active" : null}
          onClick={() => changePage("planets")}>
          Planets
        </div>
        <div
          className={page === "starships" ? "active" : null}
          onClick={() => changePage("starships")}>
          Starships
        </div>
      </nav>
    </header>
  )
}
export default Header
