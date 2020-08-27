import React, { Component } from "react"
import SwapiService from "../../services/SwapiService"
import List from "../list"
import Details from "../details"
import "./page.css"

export default class Page extends Component {

  init = {
    list: null,
    details: null
  }
  state = { ...this.init }

  swapi = new SwapiService
  getList = (type) => {
    if (type === "planets") {
      this.swapi.getAllPlanets().then(list => {
        this.setState({ list })
        this.getDetails(type, list[0].id)
      })
    }
    if (type === "people") {
      this.swapi.getAllPeople().then(list => {
        this.setState({ list })
        this.getDetails(type, list[0].id)
      })
    }
    if (type === "starships") {
      this.swapi.getAllStarships().then(list => {
        this.setState({ list })
        this.getDetails(type, list[0].id)
      })
    }
  }
  getDetails = (type, id) => {
    if (type === "planets")   this.swapi.getPlanet(id).then(planet => this.setState({ details: planet }))
    if (type === "people")    this.swapi.getPerson(id).then(person => this.setState({ details: person }))
    if (type === "starships") this.swapi.getStarship(id).then(starship => this.setState({ details: starship }))
  }
  handleSelect = (id) => {
    this.setState({ details: null })
    this.getDetails(this.props.page, id)
  }

  componentDidMount() {
    this.getList(this.props.page)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.setState({ ...this.init })
      this.getList(this.props.page)
    }
  }

  render() {
    return (
      <main>
        <List list={this.state.list} handleSelect={this.handleSelect} />
        <Details type={this.props.page} details={this.state.details} />
      </main>
    )
  }
}
