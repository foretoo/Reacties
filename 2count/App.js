window.onload = function bundle() {

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return 0;
    }
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
