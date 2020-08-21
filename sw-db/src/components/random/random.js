import React, {Component} from "react"
import SwapiService from "../../services/SwapiService"
import "./random.css"

export default class Random extends Component {

  constructor() {
    super()
    this.updateData()
  }

  state = {
    planet: {}
  }

  swapi = new SwapiService

  updateData() {
    let id = Math.floor(Math.random()*19) + 2
    id === 20 && id++
    this.swapi
      .getPlanet(id)
      .then(planet => this.setState({planet}))
  }

  render() {
    const { id, name, population, diameter, rotationPeriod } = this.state.planet
    return (
      <section className="random">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
        <div>
          <h2>{name}</h2>
          <ul>
            <li>population: {population}</li>
            <li>diameter: {diameter}</li>
            <li>rotationPeriod: {rotationPeriod}</li>
          </ul>
        </div>
      </section>
    )
  }
}
