const SVGicon = ({ path, dark, light }) => {
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
