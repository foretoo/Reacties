import { h } from "preact"
import { useContext } from "preact/hooks"
import { Context } from "./color-picker"
import { calc_angle, round_dec } from "./utils"

const HueHandler = () => {

  const { GET, SET, handleChange } = useContext(Context)

  /*-----------*/
  /* HUE START */
  const handleHueStart = (e) => {
    SET((PREV) => {
      const pointer = calc_angle(
        e.pageX - GET.hue.x,
        e.pageY - GET.hue.y,
      ) - 90 - GET.shift

      let hsl = PREV.hsl
      if (pointer !== hsl[0]) {
        if (e.target === GET.pickerRef.current) {
          GET.pickerRef.current.setPointerCapture(e.pointerId)
          hsl[0] = pointer
          handleChange(hsl)
        }
        if (e.target === GET.handlerRef.current)
          GET.handlerRef.current.setPointerCapture(e.pointerId)

        return { ...PREV, pointer, hsl, start: true }
      }
      return { ...PREV, start: true }
    })
  }
  /*---------*/
  /* HUE END */
  const handleHueEnd = (e) => {
    if (e.target === GET.pickerRef.current)
      GET.pickerRef.current.releasePointerCapture(e.pointerId)
    if (e.target === GET.handlerRef.current)
      GET.handlerRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, start: false }))
  }
  /*----------*/
  /* HUE MOVE */
  const handleHueMove = (e) => {
    GET.start && (
      e.preventDefault(),
      SET((PREV) => {
        const pointer = calc_angle(
          e.pageX - GET.hue.x,
          e.pageY - GET.hue.y,
        ) - 90 - GET.shift

        let a = (PREV.hsl[0] + (pointer - PREV.pointer)) % 360
        if (a < 0) a += 360
        const hsl = [ a, PREV.hsl[1], PREV.hsl[2] ]
        handleChange(hsl)

        return { ...PREV, pointer, hsl }
      })
    )
  }

  return (
    <div ref={GET.pickerRef} className="color-picker"
      style={{ background: `conic-gradient(
        from ${0.5 + GET.shift / 360}turn,
          hsl(0,   100%, 50%),
          hsl(60,  100%, 50%),
          hsl(120, 100%, 50%),
          hsl(180, 100%, 50%),
          hsl(240, 100%, 50%),
          hsl(300, 100%, 50%),
          hsl(0,   100%, 50%)
      )` }}
      onPointerDown={handleHueStart}
      onPointerMove={handleHueMove}
      onPointerUp={handleHueEnd}
      onPointerCancel={handleHueEnd} >


      <div className="color-picker-labels"
        style={{ transform: `rotate(${GET.shift}deg)` }} >
        <label style={{ "--sign":
            (GET.shift >=  -90 && GET.shift <   90) ||
            (GET.shift >=  270 || GET.shift < -270)
              ? 0 : 1 }}>R</label>
        <label style={{ "--sign":
            (GET.shift >=  -30 && GET.shift <  150) ||
            (GET.shift >=  330 || GET.shift < -210)
              ? 1 : -2 }}>G</label>
        <label style={{ "--sign":
            (GET.shift >= -150 && GET.shift <   30) ||
            (GET.shift >=  210 || GET.shift < -330)
              ? 1 : -2 }}>B</label>
      </div>


      <div ref={GET.handlerRef} className="picker-handler">
        <svg className="picker-handler-view"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          style={{ transform: `rotate(${GET.hsl[0] + GET.shift}deg)` }} >
          <circle cx="30" cy="30" r="30" fill="#2a2a2a" />
          <g transform="rotate(90,30,30)">
            <radialGradient id="grad">
              <stop stop-color="#2a2a2a" offset="80%" />
              <stop stop-color="#0a0a0a" offset="100%" />
            </radialGradient>
            <path d={Array(120).fill("").reduce((path, _, i, arr) => {
              const [ rad, deg ] = [ (Math.PI / arr.length * 2) * i, (360 / arr.length) * i ]
              if (deg < 12 || deg > 348) return path
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