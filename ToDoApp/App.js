const r = React.createElement

const App = createReactClass({

  getInitialState: function() {
    return { items: [
        {id: 1, text: ["First item"]},
        {id: 2, text: ["Build dat app"]},
        {id: 3, text: ["Filch a cup of tea from nearby", "colleague"]}
      ]
    }
  },

  handleChange: function (childs, id) {

    const items = this.state.items.map(item => {
      if (item.id === id) return { id: id, text: Array.from(childs).map(child => {
        return child.textContent
      })}
      else return item
    })

    console.log(items)
    this.setState({ items })
    console.log(this.state.items)
  },

  render: function() {
    return r(
      React.Fragment,
      null,
      [
        r(Header, null),
        r(Nav, null),
        r(List, { items: this.state.items, handleChange: this.handleChange })
      ]
    )
  }
})

ReactDOM.render(r(App), document.getElementById("root"))
