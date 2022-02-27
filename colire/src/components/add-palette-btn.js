import gsap from "gsap"
import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { useCtx } from "@utils/hooks"
import "./css/add-palette-btn.css"

const AddPaletteBtn = () => {

  const { state: { actualTheme, agent }} = useCtx()
  const [ hover, setHover ] = useState(false)
  const rectRef = useRef(null)
  const svgRef  = useRef(null)

  const rects = []
  for (let y = 0; y <= 120; y += 40) {
    for (let x = 0; x <= 200; x += 50) {
      rects.push( <use href="#rect" x={x} y={y} /> )
    }
  }

  const bg = actualTheme === "dark" ? [ "#4440", "#444f" ] : [ "#fff0", "#ffff" ]

  useEffect(() => {
    gsap.set(rectRef.current, {
      scaleX: 0.84, scaleY: 0.8, transformOrigin: "center"
    })
    gsap.set(svgRef.current, { backgroundColor: bg[0] })
    gsap.defaults({ duration: 0.3 })
  }, [ actualTheme ])
  const handleMouseEnter = () => {
    setHover(true)
    gsap.to(rectRef.current, {
      attr: { rx: 0 }, scale: 1, ease: "power1.out"
    })
    gsap.to(svgRef.current, {
      backgroundColor: bg[1], scale: 1.05, ease: "power1.in"
    })
  }
  const handleMouseLeave = () => {
    setHover(false)
    gsap.to(rectRef.current, {
      attr: { rx: 5 }, scaleX: 0.84, scaleY: 0.8, ease: "power1.in"
    })
    gsap.to(svgRef.current, {
      backgroundColor: bg[0], scale: 1, ease: "power1.out"
    })
  }

  const isChrome = agent.name === "Chrome"
  const filter   = isChrome && hover ? "url(#filter)" : "none"

  return (
    <div className="add-palette-btn-container">
      <input className="add-palette-btn"
        type="button"
        value="CREATE PALETTE"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} />
      <svg ref={svgRef}
        className="add-palette-btn-bg"
        style={{ filter }}
        width="250"
        height="160"
        viewBox="0 0 250 160"
        xmlns="http://www.w3.org/2000/svg" >

        <symbol id="rect"
          width="50"
          height="40" >
          <rect ref={rectRef}
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
