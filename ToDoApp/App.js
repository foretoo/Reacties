const r = React.createElement

class App extends React.Component {
  constructor() {
    super()
    this.initID = 0
    this.state = { items: [] }
  }

  componentDidMount() {
    this.addItem("First item")
    this.addItem("Build dat app")
    this.addItem("Filch a cup of tea from nearby<br>colleague")
  }

  isClean = html => {
    return html.replace(/<[^>]*>?/gm,"").replace(/\s/g,"").replace(/&nbsp;/g,"") === ""
  }

  addItem = html => {
    this.setState(({ items }) => {
      const newItem = {
        id:         this.initID++,
        html:       html,
        done:       false,
        focused:    false
      }
      return { items: [...items, newItem] }
    })
  }

  deleteItem = id => {
    this.setState(({ items }) => {
      const idx = items.findIndex(item => item.id === id)
      const newItems = [...items.slice(0, idx), ...items.slice(idx + 1)]
      return { items: newItems }
    })
  }

  handleChange = (html, id) => {
    if (this.isClean(html)) {
      this.deleteItem(id)
      return
    }
    this.setState(({ items }) => {
      const newItems = items.map(item => item.id === id ? {...item, html: html} : item)
      return { items: newItems }
    })
  }

  markDone = id => {
    this.setState(({ items }) => {
      const newItems = items.map(item => item.id === id ? {...item, done: !item.done} : item)
      return { items: newItems }
    })
  }

  markFocused = id => {
    this.setState(({ items }) => {
      const newItems = items.map(item => item.id === id ? {...item, focused: !item.focused} : item)
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
          deleteItem:   this.deleteItem,
          markDone:     this.markDone
        }),
        r(AddItem, { addItem: this.addItem, isClean: this.isClean })
      ]
    )
  }
}

ReactDOM.render(r(App), document.getElementById("root"))
