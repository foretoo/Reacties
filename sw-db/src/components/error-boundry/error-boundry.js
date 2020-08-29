import React, { Component } from "react"
import Error from "../error"

export default class ErrorBoundry extends Component {

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) return <Error />
    return this.props.children
  }
}
