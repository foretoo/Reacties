import gsap from "gsap"
import { h } from "preact"
import { useEffect, useRef } from "preact/hooks"
import "./css/add-palette-btn.css"

const AddPaletteBtn = () => {

  const ref = useRef(null)

  const rects = []
  for (let y = 0; y <= 120; y += 40) {
    for (let x = 0; x <= 200; x += 50) {
      rects.push( <use href="#rect" x={x} y={y} /> )
    }
  }

  useEffect(() => {
    gsap.set(ref.current, { scaleX: 0.84, scaleY: 0.8, transformOrigin: "center" })
    gsap.defaults({ duration: 0.3 })
  }, [])
  const handleHover = () => {
    gsap.to(ref.current, { attr: { rx: 0 }, scale: 1 })
  }
  const handleIdle = () => {
    gsap.to(ref.current, { attr: { rx: 5 },scaleX: 0.84, scaleY: 0.8 })
  }

  return (
    <div className="add-palette-btn-container">
      <input className="add-palette-btn"
        type="button"
        value="CREATE PALETTE"
        onMouseEnter={handleHover}
        onMouseLeave={handleIdle} />
      <svg className="add-palette-btn-bg"
        width="250"
        height="160"
        viewBox="0 0 250 160"
        xmlns="http://www.w3.org/2000/svg" >

        <symbol id="rect"
          width="50"
          height="40" >
          <rect ref={ref}
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
