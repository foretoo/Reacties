const r = React.createElement

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        {id: 1, html: "<div>First item</div>", ref: React.createRef()},
        {id: 2, html: "<div>Build dat app</div>", ref: React.createRef()},
        {id: 3, html: "<div>Filch a cup of tea from nearby</div><div>colleague</div>", ref: React.createRef()}
      ]
    }
  }

  handleChange = (e, id) => {
    const items = this.state.items.map(item => {
      if (item.id === id) return {id: id, html: e.target.value}
      else return item
    })
    this.setState({ items })
  }

  render() {
    console.log(this.state.items);
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
}

ReactDOM.render(r(App), document.getElementById("root"))
