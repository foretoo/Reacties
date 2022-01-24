import { h } from "preact"
import "./css/add-palette-btn.css"

const AddPaletteBtn = () => {

  const rects = []
  for (let y = 0; y <= 120; y += 40) {
    for (let x = 0; x <= 200; x += 50) {
      rects.push( <use href="#rect" x={x} y={y} /> )
    }
  }

  return (
    <div className="add-palette-btn-container">
      <input className="add-palette-btn"
        type="button"
        value="CREATE PALETTE" />
      <svg className="add-palette-btn-bg"
        width="250"
        height="160"
        viewBox="0 0 250 160"
        xmlns="http://www.w3.org/2000/svg" >

        <symbol id="rect"
          width="50"
          height="40"
          viewbox="0 0 50 40"
          fill="white" >
          <rect
            x="0"
            y="0"
            width="50"
            height="40"
            rx="5" />
        </symbol>

        {rects}

      </svg>
    </div>
  )
}

export default AddPaletteBtn
