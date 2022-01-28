import { h } from "preact"
import { useContext, useRef } from "preact/hooks"
import { Context } from "./color-picker"
import { clamp, round } from "./utils"
import chroma from "chroma-js"

const ToneHandler = () => {

  const { GET, SET } = useContext(Context)

  /*------------*/
  /* TONE START */
  const handleToneStart = (e) => {
    GET.tone.ref.current.setPointerCapture(e.pointerId)
    SET((PREV) => {
      const tone = {
        ...PREV.tone,
        start: true,
        x:     clamp(round(e.offsetX), 0, 100),
        y:     clamp(round(e.offsetY), 0, 100),
      }
      if (tone.x !== PREV.tone.x || tone.y !== PREV.tone.y) {
        const hsl = chroma(PREV.hsl[0], tone.x / 100, (100 - tone.y) / 100, "hsv").hsl()
        if (isNaN(hsl[0])) (hsl[0] = PREV.hsl[0])
        GET.handleChange(hsl)
        return { ...PREV, tone, hsl }
      }
    })
  }
  /*------------*/
  /* TONE START */
  const handleToneEnd = (e) => {
    GET.tone.ref.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, tone: { ...PREV.tone, start: false }}))
  }
  /*------------*/
  /* TONE START */
  const handleToneMove = (e) => {
    if (GET.tone.start) {
      e.preventDefault()
      SET((PREV) => {
        const tone = {
          ...PREV.tone,
          x: clamp(round(e.offsetX), 0, 100),
          y: clamp(round(e.offsetY), 0, 100),
        }
        const hsl = chroma(PREV.hsl[0], tone.x / 100, (100 - tone.y) / 100, "hsv").hsl()
        if (isNaN(hsl[0])) (hsl[0] = PREV.hsl[0])
        GET.handleChange(hsl)
        return { ...PREV, tone, hsl }
      })
    }
  }

  return (
    <div ref={GET.tone.ref} className="picker-tone"
      onPointerDown={handleToneStart}
      onPointerMove={handleToneMove}
      onPointerUp={handleToneEnd}
      onPointerCancel={handleToneEnd} >
      <div className="picker-tone-point"
        style={{
          top:        `${GET.tone.y}px`,
          left:       `${GET.tone.x}px`,
          background: `hsl(${GET.hsl[0]}, ${GET.hsl[1] * 100}%, ${GET.hsl[2] * 100}%)`,
        }} >
      </div>
    </div>
  )

}

export default ToneHandler