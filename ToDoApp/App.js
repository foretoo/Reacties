const r = React.createElement

window.onload = function bundle() {

  class App extends React.Component {

    constructor() {
      super();
      this.state = {}
    }

    render() {
      return r(
        React.Fragment,
        null,
        [
          r(Header, null),
          r(Nav, null),
          r(List, null)
        ]
      )
    }
  }

  ReactDOM.render(r(App), document.getElementById("root"))
}
