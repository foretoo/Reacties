import { h } from "preact"
import { Link } from "react-router-dom"
import "./css/palette-box.css"

const PaletteBox = ({ id, paletteName, colors, handleDeletePalette }) => {
  const colorList = []
  for (const color in colors) {
    const style = { background: colors[color].levels[4].hex }
    colorList.push(<div className="palette-box-color" style={style}></div>)
  }
  return (
    <div className="palette-box-container">

      <Link to={`/${id}/`} className="palette-box">
        <div className="palette-box-name">{paletteName}</div>
        <div className="palette-box-content">
          {colorList}
        </div>
      </Link>

      <svg className="delete-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => handleDeletePalette(id)} >
        <symbol id="line-symbol"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          stroke="#ccc"
          stroke-width="4" >
          <line
            x1="0"
            y1="5"
            x2="10"
            y2="5" />
        </symbol>
        <g className="use-line">
          <use x="5" y="15"
            href="#line-symbol"
            transform-origin="center"
            transform="rotate(45)" /></g>
        <g className="use-line">
          <use x="5" y="15"
            href="#line-symbol"
            transform-origin="center"
            transform="rotate(135)" /></g>
        <g className="use-line">
          <use x="5" y="15"
            href="#line-symbol"
            transform-origin="center"
            transform="rotate(225)" /></g>
        <g className="use-line">
          <use x="5" y="15"
            href="#line-symbol"
            transform-origin="center"
            transform="rotate(315)" /></g>
      </svg>

    </div>
  )
}

export default PaletteBox
