import React, {Component} from "react"
import "./app.css"

import Header from "../header"
import Random from "../random"
import List from "../list"
import Details from "../details"

export default class App extends Component {

  state = {
    page: "PLANETS"
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
        <main>
          <List />
          <Details />
        </main>
      </>
    )
  }
}
