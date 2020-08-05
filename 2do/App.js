import AddItem from "./Additem.js"
import List from "./List.js"
import Nav from "./Nav.js"
import Header from "./Header.js"

class App extends React.Component {
  constructor() {
    super()
    this.initID = 0
    this.state = {
      items: [],
      filter: "ALL",
      searchText: ""
    }
  }

  componentDidMount() {
    this.addItem("First item")
    this.addItem("Build dat app")
    this.addItem("Filch a cup of tea from nearby<br>colleague")
  }

  normalize = html => {
    return html.replace(/<[^>]*>?/gm,"").replace(/\s/g,"").replace(/&nbsp;/g,"").toLowerCase()
  }

  addItem = html => {
    this.setState(({ items }) => {
      const newItem = {
        id:         this.initID++,
        html:       html,
        done:       false,
        focused:    false,
        display:    true
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
    if (this.normalize(html) === "") {
      this.deleteItem(id)
      return
    }
    this.setState(({ items }) => {
      const newItems = items.map(item => {
        if (this.state.searchText) this.handleFilter(this.state.filter, this.state.searchText)
        return item.id === id ? {...item, html: html} : item
      })
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

  handleFilter = (flag, text) => {

    if (this.state.filter !== flag) this.setState({ filter: flag })
    if (this.state.searchText !== text) this.setState({ searchText: text })

    this.setState(({ items }) => {
      const newItems = items.map(item => {
        item.display = text ? (this.normalize(item.html).includes(text) ? true : false) : true
        if (flag === "ALL") {
          item.display = item.display && true
        }
        else if (flag === "ACTIVE") {
          item.display = item.done ? false : (item.display && true)
        }
        else if (flag === "DONE") {
          item.display = item.done ? (item.display && true) : false
        }
        return item
      })
      return { items: newItems }
    })
  }

  render() {
    return r(
      React.Fragment, null,
      [
        r(Header, null),
        r(Nav, {
          handleFilter: this.handleFilter,
          normalize:    this.normalize
        }),
        r(List, {
          items:        this.state.items,
          handleChange: this.handleChange,
          deleteItem:   this.deleteItem,
          markDone:     this.markDone,
          markFocused:  this.markFocused
        }),
        r(AddItem, {
          addItem:      this.addItem,
          normalize:    this.normalize
        }),
        r("footer", null,
          r("span", null, [ "by ", r("a", { href: "https://github.com/foretoo" }, "foretoo") ])
        )
      ]
    )
  }
}

ReactDOM.render(r(App), document.getElementById("root"))
