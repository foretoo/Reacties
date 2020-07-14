const r = React.createElement

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  initID = 0

  componentDidMount() {
    this.addItem("First item")
    this.addItem("Build dat app")
    this.addItem("Filch a cup of tea from nearby colleague")
  }

  addItem = (html) => {
    const newItem = {
      id:         this.initID++,
      html:       html,
      done:       false,
      important:  false,
      ref:        React.createRef()
    }
    this.setState(({items}) => {
      return { items: [...items, newItem] }
    })
  }

  handleChange = (el, id) => {
    const items = this.state.items.map( item => item.id === id ? {html: el.value} : item )
    this.setState({ items })
  }

  render() {
    return r(
      React.Fragment,
      null,
      [
        r(Header, null),
        r(Nav, null),
        r(List, {
          items:        this.state.items,
          handleChange: this.handleChange,
          addItem:      this.addItem
        })
      ]
    )
  }
}

ReactDOM.render(r(App), document.getElementById("root"))
