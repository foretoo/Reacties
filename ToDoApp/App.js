window.onload = function bundle() {

  class App extends React.Component {

    constructor() {
      super();
      this.state = {}
    }

    render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, null),
        React.createElement(Nav, null),
        React.createElement(List, null),
      )
    }
  }

  ReactDOM.render(App(), document.getElementById("root"))
}
