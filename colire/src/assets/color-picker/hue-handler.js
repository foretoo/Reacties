import { h } from "preact"
import { useContext, useState, useEffect, useRef } from "preact/hooks"
import { Context } from "./color-picker"
import { calc_angle, round_dec } from "./utils"

const HueHandler = ({ shift = 0, size = 240 }) => {

  const { GET, handleChange } = useContext(Context)
  const initHue = {
    origin:  { x: 0, y: 0 },
    pointer: 0,
    shift:   0,
  }
  const [ hue, setHue ] = useState(initHue)
  const pickerRef  = useRef()
  const handlerRef = useRef()

  useEffect(() => {
    !GET.start && setHue((prev) => {
      const shift = shift % 360
      const pickerRect = pickerRef.current.getBoundingClientRect()
      const origin = {
        x: pickerRect.x + pickerRect.width / 2,
        y: pickerRect.y + pickerRect.height / 2,
      }
      return { ...prev, origin, shift }
    })
  }, [ shift, size ])

  /*-----------*/
  /* HUE START */
  /*-----------*/
  const handleHueStart = (e) => {
    const pointer = calc_angle(
      e.pageX - hue.origin.x,
      e.pageY - hue.origin.y,
    ) - 90 - shift

    const hsl = GET.hsl
    if (pointer !== hsl[0]) {
      if (e.target === pickerRef.current) {
        pickerRef.current.setPointerCapture(e.pointerId)
        hsl[0] = pointer
        handleChange("START", hsl)
      }
      if (e.target === handlerRef.current) {
        handlerRef.current.setPointerCapture(e.pointerId)
        handleChange("START")
      }
      setHue((prev) => ({ ...prev, pointer }))
    }
    else handleChange("START")
  }
  /*---------*/
  /* HUE END */
  /*---------*/
  const handleHueEnd = (e) => {
    if (e.target === pickerRef.current)
      pickerRef.current.releasePointerCapture(e.pointerId)
    if (e.target === handlerRef.current)
      handlerRef.current.releasePointerCapture(e.pointerId)
    handleChange("END")
  }
  /*----------*/
  /* HUE MOVE */
  /*----------*/
  const handleHueMove = (e) => {
    if (GET.start) {
      e.preventDefault()
      const pointer = calc_angle(
        e.pageX - hue.origin.x,
        e.pageY - hue.origin.y,
      ) - 90 - shift

      let a = (GET.hsl[0] + (pointer - hue.pointer)) % 360
      if (a < 0) a += 360
      const hsl = [ a, GET.hsl[1], GET.hsl[2] ]
      handleChange("MOVE", hsl)
      setHue((prev) => ({ ...prev, pointer }))
    }
  }

  return (
    <div ref={pickerRef} className="color-picker"
      style={{
        background: `conic-gradient(
          from ${0.5 + shift / 360}turn,
          hsl(0,   100%, 50%),
          hsl(60,  100%, 50%),
          hsl(120, 100%, 50%),
          hsl(180, 100%, 50%),
          hsl(240, 100%, 50%),
          hsl(300, 100%, 50%),
          hsl(0,   100%, 50%)
        )`,
        "--hueSize": `${size}px`,
      }}
      onPointerDown={handleHueStart}
      onPointerMove={handleHueMove}
      onPointerUp={handleHueEnd}
      onPointerCancel={handleHueEnd} >


      <div className="color-picker-labels"
        style={{ transform: `rotate(${shift}deg)` }} >
        <label style={{ "--sign":
            (shift >=  -90 && shift <   90) ||
            (shift >=  270 || shift < -270)
              ? 0 : 1 }}>R</label>
        <label style={{ "--sign":
            (shift >=  -30 && shift <  150) ||
            (shift >=  330 || shift < -210)
              ? 1 : -2 }}>G</label>
        <label style={{ "--sign":
            (shift >= -150 && shift <   30) ||
            (shift >=  210 || shift < -330)
              ? 1 : -2 }}>B</label>
      </div>


      <div ref={handlerRef} className="picker-handler">
        <svg className="picker-handler-view"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          style={{ transform: `rotate(${GET.hsl[0] + shift}deg)` }} >
          <circle cx="30" cy="30" r="30" fill="#2a2a2a" />
          <g transform="rotate(90,30,30)">
            <radialGradient id="grad">
              <stop stop-color="#2a2a2a" offset="80%" />
              <stop stop-color="#0a0a0a" offset="100%" />
            </radialGradient>
            <path d={Array(120).fill("").reduce((path, _, i, arr) => {
              const rad = (Math.PI / arr.length * 2) * i
              if (rad < 0.209 || rad > 6.074) return path
              const [ w, h ] = [ 6, 0.8 ]
              const [ x, y ] = [
                round_dec(30 + (28 - w) * Math.cos(rad) + (h / 2) * Math.sin(rad), 3),
                round_dec(30 + (28 - w) * Math.sin(rad) - (h / 2) * Math.cos(rad), 3),
              ]
              return path +
                    `M${x} ${y}` +
                    `l${round_dec( w * Math.cos(rad), 3)} ${round_dec( w * Math.sin(rad), 3)}` +
                    `l${round_dec(-h * Math.sin(rad), 3)} ${round_dec( h * Math.cos(rad), 3)}` +
                    `l${round_dec(-w * Math.cos(rad), 3)} ${round_dec(-w * Math.sin(rad), 3)}` +
                    `Z`
            }, "")}
            fill="url(#grad)" />
          </g>
          <path d="M27 43a3 3 0 0 1 6 0v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" />
        </svg>
      </div>

    </div>
  )
}
export default HueHandler