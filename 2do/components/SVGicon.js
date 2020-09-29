class SVGicon extends React.Component {

  shouldComponentUpdate(nextProps) {
    return this.props.dark !== nextProps.dark || this.props.light !== nextProps.light
  }

  render() {
    const { path, dark, light } = this.props
    const strokeColor = light ? "#eee" : dark ? "#ccc" : "none"
    return (
      r("svg", {
        width: "40",
        height: "60",
        viewBox: "0 0 40 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
        },
        r("path", {
          d: path,
          stroke: strokeColor,
          "stroke-width": "2",
          transform: "translate(0,20)"
        })
      )
    )
  }
}
