import { h, Component } from "preact"

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
      return <div>Something went badly wrong</div>
    }
    return props.children
  }
}
