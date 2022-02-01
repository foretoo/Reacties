import { h, createContext } from "preact"
import { useState, useEffect } from "preact/hooks"
import chroma from "chroma-js"
import "./color-picker.css"

const Context = createContext()

const ColorPicker = ({
  color = "#fff",
  onChange = (color) => console.log(color.hex),
  children,
}) => {

  const init = {
    start: false,
    hsl:   [ 0, 0, 1, 1 ],
  }
  const [ GET, SET ] = useState(init)

  useEffect(() => {
    !GET.start && SET((prev) => {
      const hsl = chroma(color).hsl()
      if (isNaN(hsl[0])) hsl[0] = color.hasOwnProperty("h") ? color.h : 0
      return { ...prev, hsl }
    })
  }, [ color ])



  const handleChange = (mode, hsl) => {
    switch (mode) {
      case "START":
        if (hsl) {
          SET({ start: true, hsl })
          output(hsl)
        }
        else SET((prev) => ({ ...prev, start: true }))
        break
      case "END":
        SET((prev) => ({ ...prev, start: false }))
        break
      case "MOVE":
        SET((prev) => ({ ...prev, hsl }))
        output(hsl)
        break
    }
  }
  const output = (hsl) => {
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
    <Context.Provider value={{ GET, handleChange }}>
      <div className="color-picker-container" style={{ "--hue": GET.hsl[0] }}>

        {children}

      </div>
    </Context.Provider>
  )
}

export { ColorPicker, Context }