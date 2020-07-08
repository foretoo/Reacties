const r = React.createElement

window.onload = function bundle() {

  class App extends React.Component {

    constructor() {
      super()
      this.state = {
        items: ["First item", "Build dat app", "Filch a cup of tea from nearby collegue"]
      }
    }

    render() {
      return r(
        React.Fragment,
        null,
        [
          r(Header, null),
          r(Nav, null),
          r(List, { items: this.state.items })
        ]
      )
    }
  }

  ReactDOM.render(r(App), document.getElementById("root"))
}
