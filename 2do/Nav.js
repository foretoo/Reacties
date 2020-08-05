export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = { flag: "ALL", text: "" }
  }

  handleFlag = flag => {
    this.setState({ flag: flag })
    this.props.handleFilter(flag, this.state.text)
  }

  handleSearch = text => {
    this.setState({ text: this.props.norm(text) })
    this.props.handleFilter(this.state.flag, this.props.norm(text))
  }

  render() {
    return r("nav", null, [
      r("input", {
        className: "search",
        placeholder: "search_",
        onInput: e => this.handleSearch(e.target.value)
      }),
      r("ul", { className: "filter" }, [
        r("li", {
          className: this.state.flag === "ALL" ? "filtered" : "",
          onClick: () => this.handleFlag("ALL")
        }, r("span", null, "All")),
        r("li", {
          className: this.state.flag === "ACTIVE" ? "filtered" : "",
          onClick: () => this.handleFlag("ACTIVE")
        }, r("span", null, "Active")),
        r("li", {
          className: this.state.flag === "DONE" ? "filtered" : "",
          onClick: () => this.handleFlag("DONE")
        }, r("span", null, "Done"))
      ])
    ])
  }
}
