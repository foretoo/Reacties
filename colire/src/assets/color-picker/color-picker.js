import { h, createContext } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import chroma from "chroma-js"
import "./color-picker.css"

const Context = createContext()

const ColorPicker = ({
  color = "#fff",
  onChange = (color) => console.log(color.hex),
  children,
}) => {

  const initPicker = {
    hue: {
      size:   240,
      origin: { x: 0, y: 0 },
      shift:  0,
    },
    tone: {
      size:  100,
      point: { x: 0, y: 0 },
    },
    hsl:     [ 0, 0, 1, 1 ],
    start:   false,
    pointer: 0,

    pickerRef:  useRef(),
    handlerRef: useRef(),
    tonerRef:   useRef(),
  }
  const [ GET, SET ] = useState(initPicker)

  useEffect(() => {
    !GET.start && SET((PREV) => {
      const _color = chroma(color)
      const hsl = _color.hsl()
      if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
      const [ , x, y ] = _color.hsv()
      const point = { x: x * PREV.tone.size, y: PREV.tone.size - y * PREV.tone.size }
      const pickerRect = PREV.pickerRef.current.getBoundingClientRect()
      const origin = {
        x: pickerRect.x + PREV.hue.size / 2,
        y: pickerRect.y + PREV.hue.size / 2,
      }
      return {
        ...PREV,
        hue:  { ...PREV.hue, origin },
        tone: { ...PREV.tone, point },
        hsl,
      }
    })
  }, [ color, GET.hue.size, GET.tone.size ])



  const handleChange = (hsl) => {
    const color = chroma(hsl, "hsl")
    const [ h, s, l ] = hsl
    const [ r, g, b ] = color.rgb()
    const hex = color.hex()
    onChange({
      rgb: { r, g, b },
      hsl: { h, s, l },
      hex,
    })
  }



  return (
    <Context.Provider value={{ GET, SET, handleChange }}>
      <div className="color-picker-container" style={{ "--hue": GET.hsl[0] }}>

        {children}

      </div>
    </Context.Provider>
  )
}

export { ColorPicker, Context }