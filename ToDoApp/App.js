const r = React.createElement

const App = createReactClass({

  getInitialState: function() {
    return { items: ["First item", "Build dat app", "Filch a cup of tea from nearby collegue"] };
  },

  render: function() {
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
})

ReactDOM.render(r(App), document.getElementById("root"))
