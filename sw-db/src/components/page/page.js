import React, { Component } from "react"
import SwapiService from "../../services/SwapiService"
import List from "../list"
import Details from "../details"
import "./page.css"

export default class Page extends Component {

  state = { detailsID: null }

  swapi = new SwapiService
  getList = (type) => {
    if (type === "planets")   return this.swapi.getAllPlanets()
    if (type === "people")    return this.swapi.getAllPeople()
    if (type === "starships") return this.swapi.getAllStarships()
  }
  getDetails = (type, id) => {
    if (type === "planets")   return this.swapi.getPlanet(id)
    if (type === "people")    return this.swapi.getPerson(id)
    if (type === "starships") return this.swapi.getStarship(id)
  }
  handleSelect = (id) => this.setState({ detailsID: id })

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) this.setState({ detailsID: null })
  }

  render() {
    return (
      <main>
        <List
          type={this.props.page}
          getData={this.getList}
          handleSelect={this.handleSelect}
        />
        <Details
          type={this.props.page}
          id={this.state.detailsID}
          getData={this.getDetails}
        />
      </main>
    )
  }
}
