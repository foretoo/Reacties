import React, {Component} from "react"
import SwapiService from "../../services/SwapiService"
import "./random.css"

export default class Random extends Component {

  constructor() {
    super()
    this.state = {
      id: null,
      name: null,
      population: null,
      diameter: null,
      rotationPeriod: null
    }
    this.updateData()
  }

  swapi = new SwapiService
  updateData() {
    const id = Math.floor(Math.random()*19) + 2
    this.swapi.getPlanet(id)
      .then(planet => {
        this.setState({
          id,
          name: planet.name,
          population: new Intl.NumberFormat("RU").format(planet.population),
          diameter: new Intl.NumberFormat("RU").format(planet.diameter),
          rotationPeriod: new Intl.NumberFormat("RU").format(planet.rotation_period)
        })
      })
  }

  render() {
    const { id, name, population, diameter, rotationPeriod } = this.state
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
