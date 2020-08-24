import React from "react"
import "./header.css"

const Header = (props) => {

  const { page, handlePageChange } = props
  
  return (
    <header>
      <h1>StarWars Database</h1>
      <nav>
        <div
          className={page === "PEOPLE" ? "active" : null}
          onClick={() => handlePageChange("PEOPLE")}>
          People
        </div>
        <div
          className={page === "PLANETS" ? "active" : null}
          onClick={() => handlePageChange("PLANETS")}>
          Planets
        </div>
        <div
          className={page === "STARSHIPS" ? "active" : null}
          onClick={() => handlePageChange("STARSHIPS")}>
          Starships
        </div>
      </nav>
    </header>
  )
}
export default Header
