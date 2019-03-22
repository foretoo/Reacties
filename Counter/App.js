window.onload = function() {

  function App(props) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("h2", null, "Counter"),
      Counter(0)
    )
  }

  ReactDOM.render(App(), document.getElementById("root"))
}
