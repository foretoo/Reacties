window.onload = function bundle() {

  function reducer() {
        return 0;
  }

  var store = Redux.createStore(reducer)

  function App() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("p", null, "Counter"),
      Counter(store)
    )
  }

  function render() {
    ReactDOM.render(App(), document.getElementById("root"))
  }
  render()
  store.subscribe(render)
}
