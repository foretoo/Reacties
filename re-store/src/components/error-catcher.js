import { h, Component } from "preact"
import ErrorIdicator from './error-indicator'

export default class ErrorCatcher extends Component {

  constructor() {
    super()
    this.state = { errored: false }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
    this.setState({ errored: true })
  }

  render(props, state) {
    if (state.errored) {
      return <ErrorIdicator />
    }
    return props.children
  }
}
