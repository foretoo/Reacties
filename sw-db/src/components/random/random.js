import React, {Component} from "react"
import SwapiService from "../../services/SwapiService"
import Loader from "../loader"
import Error from "../error"
import "./random.css"

export default class Random extends Component {

  componentDidMount() {
    setInterval(this.updateData, this.interval)
  }

  state = {
    planet: {},
    loading: true,
    error: false
  }

  swapi = new SwapiService
  interval = 10000
  updateData = () => {
    let id = Math.floor(Math.random()*19) + 2
    if (id === 20) id++
    this.swapi.getPlanet(id)
      .then(planet => this.setState({ planet, loading: false }))
      .catch(err => this.setState({ error: true, loading: false }))
  }

  render() {
    const { planet, loading, error } = this.state
    const output = error ? <Error /> : loading ? <Loader /> : <RandomView planet={planet} />

    return (
      <section className="random">
        {output}
      </section>
    )
  }
}

const RandomView = (props) => {
  const { id, name, population, diameter, rotationPeriod } = props.planet
  return (
    <>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div>
        <h2>{name}</h2>
        <ul>
          <li>population: {population}</li>
          <li>diameter: {diameter}</li>
          <li>rotationPeriod: {rotationPeriod}</li>
        </ul>
      </div>
    </>
  )
}
