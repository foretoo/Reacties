import { h } from "preact"
import { useContext, useEffect } from "preact/hooks"
import { Context } from "./color-picker"
import { calc_angle, round_dec } from "./utils"

const HueHandler = ({
  size = 240,
  shift = 0,
  className = "",
  style = {},
  font = "",
}) => {

  const { GET, SET, handleChange } = useContext(Context)

  useEffect(() => {
    SET((PREV) => ({ ...PREV, hue: { ...GET.hue, size, shift: shift % 360 } }))
  }, [ size, shift ])

  /*-----------------*/
  /*    HUE START    */
  /*-----------------*/
  const handleHueStart = (e) => {
    const pointer = (calc_angle(
      e.pageX - GET.hue.origin.x,
      e.pageY - GET.hue.origin.y,
    ) - 90 - GET.hue.shift + 360) % 360
    const hsl = GET.hsl
    if (e.target === GET.pickerRef.current) {
      GET.pickerRef.current.setPointerCapture(e.pointerId)
      if (pointer !== hsl[0]) (hsl[0] = pointer, handleChange(hsl))
    }
    if (e.target === GET.handlerRef.current)
      GET.handlerRef.current.setPointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, hsl, start: true, pointer }))
  }
  /*---------------*/
  /*    HUE END    */
  /*---------------*/
  const handleHueEnd = (e) => {
    if (e.target === GET.pickerRef.current)
      GET.pickerRef.current.releasePointerCapture(e.pointerId)
    if (e.target === GET.handlerRef.current)
      GET.handlerRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, start: false, moving: false }))
  }
  /*----------------*/
  /*    HUE MOVE    */
  /*----------------*/
  const handleHueMove = (e) => {
    if (GET.start) {
      e.preventDefault()
      const pointer = (calc_angle(
        e.pageX - GET.hue.origin.x,
        e.pageY - GET.hue.origin.y,
      ) - 90 - GET.hue.shift + 360) % 360
      let a = (GET.hsl[0] + (pointer - GET.pointer)) % 360
      if (a < 0) a += 360
      const hsl = [ a, GET.hsl[1], GET.hsl[2] ]
      handleChange(hsl)
      SET((PREV) => ({ ...PREV, hsl, pointer, moving: true }))
    }
  }

  const classList = `picker` + (className && ` ${className}`)

  return (
    <div ref={GET.pickerRef} className={classList}
      style={{
        background: `conic-gradient(
          from ${0.5 + GET.hue.shift / 360}turn,
          hsl(   0, 100%, 50% ),
          hsl(  60, 100%, 50% ),
          hsl( 120, 100%, 50% ),
          hsl( 180, 100%, 50% ),
          hsl( 240, 100%, 50% ),
          hsl( 300, 100%, 50% ),
          hsl(   0, 100%, 50% )
        )`,
        "--hueSize": `${GET.hue.size}px`,
        "--font": font,
        ...style,
      }}
      onPointerDown={handleHueStart}
      onPointerMove={handleHueMove}
      onPointerUp={handleHueEnd}
      onPointerCancel={handleHueEnd} >


      <div className="picker-labels"
        style={{ transform: `rotate(${GET.hue.shift}deg)` }} >
        <label style={{ "--sign":
            (GET.hue.shift >=  -90 && GET.hue.shift <   90) ||
            (GET.hue.shift >=  270 || GET.hue.shift < -270)
              ? 0 :  1 }}>R</label>
        <label style={{ "--sign":
            (GET.hue.shift >=  -30 && GET.hue.shift <  150) ||
            (GET.hue.shift >=  330 || GET.hue.shift < -210)
              ? 1 : -2 }}>G</label>
        <label style={{ "--sign":
            (GET.hue.shift >= -150 && GET.hue.shift <   30) ||
            (GET.hue.shift >=  210 || GET.hue.shift < -330)
              ? 1 : -2 }}>B</label>
      </div>


      <div ref={GET.handlerRef} className="picker-handler">
        <svg className="picker-handler-view"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          style={{
            transform: `rotate(${GET.hsl[0] + GET.hue.shift}deg)`,
            transition: GET.moving ? "none" : "0.2s",
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