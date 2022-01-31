import { h, createContext } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import chroma from "chroma-js"
import "./color-picker.css"

const Context = createContext()

const ColorPicker = ({

  color = "#fff",
  shift = 0,
  size = 320,
  onChange = (color) => console.log(color.hex),
  children,

}) => {

  const handleChange = (hsl) => {
    const color = chroma(hsl, "hsl")
    const [ h, s, l ] = color.hsl()
    const [ r, g, b ] = color.rgb()
    const hex = color.hex()
    onChange({
      rgb: { r, g, b },
      hsl: { h, s, l },
      hex,
    })
  }

  const initialPicker = {
    pointer: 0,
    hue:     {
      start:      false,
      origin:     { x: 0, y: 0 },
      pickerRef:  useRef(),
      handlerRef: useRef(),
    },
    tone: {
      start:   false,
      x:       0,
      y:       0,
      ref:     useRef(),
    },
    shift: shift % 360,
    mounted: false,
    handleChange,
  }
  const HSL = useRef([ 0, 1, 1 ])
  const setHSL = (hsl) => (HSL.current = hsl)
  const [ GET, SET ] = useState(initialPicker)



  useEffect(() => {
    SET((PREV) => {
      const _color = chroma(color)
      let hsl = _color.hsl()
      if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
      else setHSL(hsl)
      const [ , x, y ] = _color.hsv()

      const pickerRect = GET.hue.pickerRef.current.getBoundingClientRect()
      const origin = {
        x: pickerRect.x + pickerRect.width / 2,
        y: pickerRect.y + pickerRect.height / 2,
      }

      return {
        ...PREV,
        hue: { ...PREV.hue, origin },
        tone: { ...PREV.tone, x: x * 100, y: 100 - y * 100 },
        mounted: true
      }
    })
  }, [ color, shift, size, onChange, children ])



  return (
    <Context.Provider value={{ GET, SET, HSL: HSL.current, setHSL }}>
      <div className="color-picker-container"
        style={{ "--size": `${size}px`, "--hue": HSL.current[0] }}>

        {children}

      </div>
    </Context.Provider>
  )
}

export { ColorPicker, Context }