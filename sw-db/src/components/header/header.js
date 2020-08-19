import React, {Component} from "react"
import "./header.css"

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>StarWars Database</h1>
        <nav>
          <div>People</div>
          <div>Planets</div>
          <div>Starships</div>
        </nav>
      </header>
    )
  }
}
