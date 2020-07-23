class SVGicon extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.dark !== nextProps.dark || this.props.light !== nextProps.light
  }

  render() {
    const { path, dark, light } = this.props
    const strokeColor = light ? "#eee" : dark ? "#ccc" : "none"
    return (
      r("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
        },
        r("path", {
          d: path,
          stroke: strokeColor,
          "stroke-width": "2"
        })
      )
    )
  }
}
