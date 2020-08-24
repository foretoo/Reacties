import React, {Component} from "react"
import SwapiService from "../../services/SwapiService"
import "./app.css"

import Header from "../header"
import Random from "../random"
import List from "../list"
import Details from "../details"

export default class App extends Component {

  state = {
    page: "planets",
    list: null,
    hasList: false,
    selectedId: null,
    details: null,
    hasDetails: false,
  }

  componentDidMount() {
    this.getList(this.state.page)
  }

  swapi = new SwapiService
  getList = (type) => {
    if (type === "planets") {
      this.swapi.getAllPlanets()
        .then(list => {
          this.setState({ list, hasList: true, selectedId: list[0].id })
          this.getObject(type, list[0].id)
        })
    }
    if (type === "people") {
      this.swapi.getAllPeople()
        .then(list => {
          this.setState({ list, hasList: true, selectedId: list[0].id })
          this.getObject(type, list[0].id)
        })
    }
    if (type === "starships") {
      this.swapi.getAllStarships()
        .then(list => {
          this.setState({ list, hasList: true, selectedId: list[0].id })
          this.getObject(type, list[0].id)
        })
    }
  }
  getObject = (type, id) => {
    if (type === "planets") {
      this.swapi.getPlanet(id)
        .then(planet => this.setState({ details: {...planet}, hasDetails: true }))
    }
    if (type === "people") {
      this.swapi.getPerson(id)
        .then(person => this.setState({ details: {...person}, hasDetails: true }))
    }
    if (type === "starships") {
      this.swapi.getStarship(id)
        .then(starship => this.setState({ details: {...starship}, hasDetails: true }))
    }
  }

  handlePageChange = (page) => {
    this.setState({ page: page, hasList: false, selectedId: null, hasDetails: false })
    this.getList(page)
  }
  handleSelected = (id) => {
    this.setState({ selectedId: id })
    this.getObject(this.state.page, id)
  }

  render() {
    return (
      <>
        <Header
          page={this.state.page}
          handlePageChange={this.handlePageChange}
        />
        <Random />
        <main>
          <List
            list={this.state.list}
            hasList={this.state.hasList}
            handleSelected ={this.handleSelected}
          />
          <Details
            type={this.state.page}
            details={this.state.details}
            hasDetails={this.state.hasDetails}
          />
        </main>
      </>
    )
  }
}
