import { h } from "preact"
import { useContext, useRef } from "preact/hooks"
import { Context } from "./color-picker"
import { calc_angle, get_matrix, round_dec } from "./utils"

const HueHandler = ({
  size = 240,
  shift = 0,
  className = "",
  style = {},
  font = "",
}) => {

  const { GET, SET, handleChange } = useContext(Context)
  const pickerRef  = useRef()
  const handlerRef = useRef()

  /*-----------------*/
  /*    HUE START    */
  /*-----------------*/
  const handleHueStart = (e) => {
    let pointer
    const hsl = [ ...GET.hsl ]

    if (e.target === pickerRef.current) {
      pointer = calc_angle(e.offsetX, e.offsetY, size, shift)
      pickerRef.current.setPointerCapture(e.pointerId)
      if (pointer !== hsl[0]) ( hsl[0] = pointer, handleChange(hsl) )
    }
    if (e.target === handlerRef.current) {
      pointer = calc_angle(e.offsetX, e.offsetY, size * 0.75, shift)
      handlerRef.current.setPointerCapture(e.pointerId)
    }

    SET((PREV) => ({ ...PREV, hsl, start: true, pointer }))
  }
  /*---------------*/
  /*    HUE END    */
  /*---------------*/
  const handleHueEnd = (e) => {
    if (e.target === pickerRef.current)
      pickerRef.current.releasePointerCapture(e.pointerId)
    if (e.target === handlerRef.current)
      handlerRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, start: false, moving: false }))
  }
  /*----------------*/
  /*    HUE MOVE    */
  /*----------------*/
  const handleHueMove = (e) => {
    if (GET.start) {
      e.preventDefault()
      let pointer, hue

      if (e.target === pickerRef.current) {
        pointer = calc_angle(e.offsetX, e.offsetY, size, shift)
        hue = pointer
      }
      if (e.target === handlerRef.current) {
        pointer = calc_angle(e.offsetX, e.offsetY, size * 0.75, shift)
        hue = (GET.hsl[0] + (pointer - GET.pointer)) % 360
      }

      if (hue < 0) hue += 360
      const hsl = [ hue, GET.hsl[1], GET.hsl[2] ]

      handleChange(hsl)
      SET((PREV) => ({ ...PREV, hsl, pointer, moving: true }))
    }
  }

  const classList = `picker` + (className.length ? ` ${className}` : ``)

  return (
    <div ref={pickerRef} className={classList}
      style={{
        background: `conic-gradient(
          from ${0.5 + shift / 360}turn,
          hsl(   0, 100%, 50% ),
          hsl(  60, 100%, 50% ),
          hsl( 120, 100%, 50% ),
          hsl( 180, 100%, 50% ),
          hsl( 240, 100%, 50% ),
          hsl( 300, 100%, 50% ),
          hsl(   0, 100%, 50% )
        )`,
        "--hueSize": `${size}px`,
        "--font": font,
        ...style,
      }}
      onPointerDown={handleHueStart}
      onPointerMove={handleHueMove}
      onPointerUp={handleHueEnd}
      onPointerCancel={handleHueEnd} >


      <div className="picker-labels"
        style={{ transform: `rotate(${shift}deg)` }} >
        <label style={{ "--sign":
            (shift >=  -90 && shift <   90) ||
            (shift >=  270 || shift < -270)
              ? 0 :  1 }}>R</label>
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
          style={{
            transform:  get_matrix(GET.hsl[0] + shift),
            "--hueDur": GET.moving ? "none" : "0.3s",
          }} >
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