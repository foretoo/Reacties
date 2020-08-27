import React, { Component } from "react"
import SwapiService from "../../services/SwapiService"
import Header from "../header"
import Random from "../random"
import Page from "../page"
import "./app.css"

export default class App extends Component {

  state = {
    page: "planets"
  }

  handlePageChange = (page) => {
    this.setState({ page: page })
  }

  render() {
    return (
      <>
        <Header
          page={this.state.page}
          handlePageChange={this.handlePageChange}
        />
        <Random />
        <Page page={this.state.page} />
      </>
    )
  }
}
