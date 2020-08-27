import React from "react"
import "./header.css"

const Header = (props) => {

  const { page, handlePageChange } = props

  return (
    <header>
      <h1>StarWars Database</h1>
      <nav>
        <div
          className={page === "people" ? "active" : null}
          onClick={() => handlePageChange("people")}>
          People
        </div>
        <div
          className={page === "planets" ? "active" : null}
          onClick={() => handlePageChange("planets")}>
          Planets
        </div>
        <div
          className={page === "starships" ? "active" : null}
          onClick={() => handlePageChange("starships")}>
          Starships
        </div>
      </nav>
    </header>
  )
}
export default Header
