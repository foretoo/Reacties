import { h } from "preact"
import { useRef } from "preact/hooks"
import { Link } from "react-router-dom"
import { useCtx } from "@utils/hooks"
import gsap from "gsap"
import "./css/palette-box.css"

const PaletteBox = ({ id, name, colors }) => {

  const { state: { agent }} = useCtx()
  const contentRef = useRef(null)
  gsap.defaults({ duration: 0.5 })

  const colorList = []
  for (const color in colors) {
    const style = { background: colors[color].levels[4].hex }
    colorList.push(<div className="palette-box-color" style={style}></div>)
  }

  const handleMouseEnter = () => {
    gsap.to(contentRef.current, { scale: 1.05 })
  }
  const handleMouseLeave = () => {
    gsap.to(contentRef.current, { scale: 1 })
  }

  const isChrome = agent.name === "Chrome"
  const filter   = isChrome ? "url(#filter)" : "none"

  return (
    <div className="palette-box-container"
      style={{ filter }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >

      <Link to={`/${id}/`} className="palette-box">
        <div className="palette-box-name">{name}</div>
        <div className="palette-box-content"
          ref={contentRef} >
          {colorList}
        </div>
      </Link>

    </div>
  )
}

export default PaletteBox
