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
    this.addItem("Filch a cup of tea from nearby<div>colleague</div>")
  }

  addItem = (html) => {
    this.setState(({ items }) => {
      const newItem = {
        id:         this.initID++,
        html:       html,
        done:       false,
        important:  false,
        ref:        React.createRef()
      }
      return { items: [...items, newItem] }
    })
  }

  deleteItem = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex(item => item.id === id)
      const newItems = [...items.slice(0, idx), ...items.slice(idx + 1)]
      return { items: newItems }
    })
  }

  handleChange = (html, id) => {
    if (html.replace(/<[^>]*>?/gm,"").replace(/\s/g,"") === "") {
      this.deleteItem(id)
      return
    }
    this.setState(({ items }) => {
      const newItems = items.map(item => item.id === id ? {...item, html: html} : item)
      return { items: newItems }
    })
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
