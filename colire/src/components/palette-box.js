import { h } from "preact"
import { Link } from "react-router-dom"
import "./css/palette-box.css"

const PaletteBox = ({ id, name, colors, handleDeletePalette }) => {
  const colorList = []
  for (const color in colors) {
    const style = { background: colors[color].levels[4].hex }
    colorList.push(<div className="palette-box-color" style={style}></div>)
  }
  return (
    <div className="palette-box-container">

      <Link to={`/${id}/`} className="palette-box">
        <div className="palette-box-name">{name}</div>
        <div className="palette-box-content">
          {colorList}
        </div>
      </Link>

    </div>
  )
}

export default PaletteBox
