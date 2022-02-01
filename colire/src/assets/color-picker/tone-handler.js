import { h } from "preact"
import { useContext } from "preact/hooks"
import { Context } from "./color-picker"
import { clamp } from "./utils"
import chroma from "chroma-js"

const ToneHandler = () => {

  const { GET, SET, handleChange } = useContext(Context)

  /*------------*/
  /* TONE START */
  const handleToneStart = (e) => {
    GET.tonerRef.current.setPointerCapture(e.pointerId)
    SET((PREV) => {
      const tone = {
        x: clamp(e.offsetX, 0, 100),
        y: clamp(e.offsetY, 0, 100),
      }
      if (tone.x !== PREV.tone.x || tone.y !== PREV.tone.y) {
        const [ h, s, v ] = [ PREV.hsl[0], tone.x / 100, (100 - tone.y) / 100 ]
        const hsl = chroma(h, s, v, "hsv").hsl()
        if (isNaN(hsl[0])) (hsl[0] = PREV.hsl[0])
        handleChange(hsl)

        return { ...PREV, tone, hsl, start: true }
      }
      return { ...PREV, start: true }
    })
  }
  /*------------*/
  /* TONE START */
  const handleToneEnd = (e) => {
    GET.tonerRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, start: false }))
  }
  /*------------*/
  /* TONE START */
  const handleToneMove = (e) => {
    if (GET.start) {
      e.preventDefault()
      SET((PREV) => {
        const tone = {
          x: clamp(e.offsetX, 0, 100),
          y: clamp(e.offsetY, 0, 100),
        }
        const [ h, s, v ] = [ PREV.hsl[0], tone.x / 100, (100 - tone.y) / 100 ]
        const hsl = chroma(h, s, v, "hsv").hsl()
        if (isNaN(hsl[0])) (hsl[0] = PREV.hsl[0])
        handleChange(hsl)

        return { ...PREV, tone, hsl }
      })
    }
  }

  return (
    <div ref={GET.tonerRef} className="picker-tone"
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