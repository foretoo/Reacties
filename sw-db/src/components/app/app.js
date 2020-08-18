import React, {Component} from "react"
import "./app.css"

import Header from "../header"
import Random from "../random"
import List from "../list"
import Details from "../details"

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Random />
        <List />
        <Details />
      </>
    )
  }
}
