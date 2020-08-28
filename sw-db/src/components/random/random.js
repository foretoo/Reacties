import React, { PureComponent } from "react"
import SwapiService from "../../services/SwapiService"
import Loader from "../loader"
import Image from "../image"
import "./random.css"

export default class Random extends PureComponent {

  state = {
    listLength: null,
    planet: {},
    loading: true
  }

  swapi = new SwapiService
  updateData = () => {
    const id = Math.ceil(Math.random()*this.state.listLength)
    this.swapi.getPlanet(id)
      .then(planet => this.setState({ planet, loading: false }))
  }

  componentDidMount() {
    this.swapi.getAllPlanets().then(data => this.setState({ listLength: data.length }))
    setInterval(this.updateData, 7000)
  }
  componentWillUnmount() {
    clearInterval(this.updateData)
  }

  render() {
    const { planet, loading, error } = this.state
    const output = loading ? <Loader /> : <RandomView planet={planet} />

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
      <Image type={"planets"} id={id} />
      <div className="randomDetails">
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
