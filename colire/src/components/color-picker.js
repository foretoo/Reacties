import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { calcAngle, r3d } from "@utils/helpers"
import chroma from "chroma-js"
import "./css/color-picker.css"

const ColorPicker = ({
  mode = "hsl",
  defaultValue = { h: 270, s: 100, l: 50 },
  shift = 0,
  size = 320,
}) => {



  const initialPicker = {
    pointer: {
      start: false,
      a:     0,
    },
    handler: {
      origin: { x: 0, y: 0 },
      a:      0,
    },
    h:       0,
    s:       100,
    l:       100,
    shift:   shift % 360,
    value:   defaultValue,
    mounted: false,
  }
  const [ GET, SET ] = useState(initialPicker)
  const pickerRef    = useRef()
  const handlerRef   = useRef()
  const toneRef      = useRef()



  useEffect(() => {
    const pickerRect = pickerRef.current.getBoundingClientRect()
    const x = pickerRect.x + pickerRect.width / 2
    const y = pickerRect.y + pickerRect.height / 2
    const origin = { x, y }

    let a, h, s, l
    if (GET.value.hasOwnProperty("h")) ({ h, s, l } = GET.value, a = h)
    else ([ h, s, l ] = chroma(GET.value).hsl(), a = h)

    const handler = { origin, a }
    const mounted = true

    SET((PREV) => ({ ...PREV, handler, h, s, l, mounted }))
  }, [])



  /*-----------*/
  /* HUE START */
  const handleHueStart = (e) => {
    SET((PREV) => {
      const a = calcAngle(
        e.pageX - GET.handler.origin.x,
        e.pageY - GET.handler.origin.y,
      ) - 90 - GET.shift
      let h = PREV.h
      if (e.target === pickerRef.current) {
        pickerRef.current.setPointerCapture(e.pointerId)
        h = a
      }
      if (e.target === handlerRef.current) {
        handlerRef.current.setPointerCapture(e.pointerId)
      }
      return {
        ...PREV,
        pointer: { start: true, a },
        handler: { ...PREV.handler, a: h },
        h,
      }
    })
  }
  /*---------*/
  /* HUE END */
  const handleHueEnd = (e) => {
    if (e.target === pickerRef.current) {
      pickerRef.current.releasePointerCapture(e.pointerId)
    }
    if (e.target === handlerRef.current) {
      handlerRef.current.releasePointerCapture(e.pointerId)
    }
    SET((PREV) => ({ ...PREV, pointer: { ...PREV.pointer, start: false }}))
  }
  /*----------*/
  /* HUE MOVE */
  const handleHueMove = (e) => {
    GET.pointer.start && (
      e.preventDefault(),
      SET((PREV) => {
        const pointer = {
          ...PREV.pointer,
          a: calcAngle(
            e.pageX - GET.handler.origin.x,
            e.pageY - GET.handler.origin.y,
          ) - 90 - GET.shift,
        }
        let a = (PREV.handler.a + (pointer.a - PREV.pointer.a)) % 360
        if (a < 0) a += 360
        const handler = { ...PREV.handler, a }

        return { ...PREV, pointer, handler, h: a }
      })
    )
  }



  /*------------*/
  /* TONE START */
  const handleToneStart = (e) => {
    toneRef.current.setPointerCapture(e.pointerId)
    const [ xVal, yVal ] = [ 50 - e.offsetX / 2, 50 - e.offsetY / 2 ]
    SET((PREV) => ({
      ...PREV,
      pointer: { ...PREV.pointer, start: true },
      s:       e.offsetX,
      l:       xVal * 2 * (yVal / 50) + yVal / 2 * (e.offsetX / 50),
    }))
  }
  /*------------*/
  /* TONE START */
  const handleToneEnd = (e) => {
    toneRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, pointer: { ...PREV.pointer, start: false }}))
  }
  /*------------*/
  /* TONE START */
  const handleToneMove = (e) => {
    if (GET.pointer.start) {
      e.preventDefault()
      const [ xVal, yVal ] = [ 50 - e.offsetX / 2, 50 - e.offsetY / 2 ]
      SET((PREV) => ({
        ...PREV,
        s: e.offsetX,
        l: xVal * 2 * (yVal / 50) + yVal / 2 * (e.offsetX / 50),
      }))
    }

  }



  return (
    <div className="color-picker-container" style={{ "--size": `${size}px` }}>

      <div ref={pickerRef} className="color-picker"
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


        <div className="color-picker-labels" style={{ transform: `rotate(${GET.shift}deg)` }}>
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


        <div ref={handlerRef} className="picker-handler">
          { GET.mounted &&
          <svg className="picker-handler-view"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            style={{ transform: `rotate(${GET.handler.a + GET.shift}deg)` }} >
            <circle cx="30" cy="30" r="30" fill="#2a2a2a" />
            <g transform="rotate(90,30,30)">
              <radialGradient id="grad">
                <stop stop-color="#2a2a2a" offset="80%" />
                <stop stop-color="#0a0a0a" offset="100%" />
              </radialGradient>
              <path d={Array(120).fill("").reduce((path, _, i, a) => {
                const [ r, deg ] = [ (Math.PI / a.length * 2) * i, (360 / a.length) * i ]
                if (deg < 12 || deg > 348) return path
                const [ w, h ] = [ 6, 0.8 ]
                const [ x, y ] = [
                  r3d(30 + (28 - w) * Math.cos(r) + (h / 2) * Math.sin(r)),
                  r3d(30 + (28 - w) * Math.sin(r) - (h / 2) * Math.cos(r)),
                ]
                return `${path} M${x} ${y}
                  l${r3d( w * Math.cos(r))} ${r3d( w * Math.sin(r))}
                  l${r3d(-h * Math.sin(r))} ${r3d( h * Math.cos(r))}
                  l${r3d(-w * Math.cos(r))} ${r3d(-w * Math.sin(r))}
                  Z`.replace(/\s+(?=[MlZ])/g, "")
              }, "")}
              fill="url(#grad)" />
            </g>
            <path d="M27 43a3 3 0 0 1 6 0v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
              fill={`hsl(${GET.h}, 100%, 50%)`} />
          </svg> }
        </div>
      </div>


      <div className="picker-controls">
        <div ref={toneRef} className="picker-tone"
          style={{ "--hue": GET.h }}
          onPointerDown={handleToneStart}
          onPointerMove={handleToneMove}
          onPointerUp={handleToneEnd}
          onPointerCancel={handleToneEnd} >
        </div>
        <div className="picker-value"
          style={{ background: `hsl(${GET.h}, ${GET.s}%, ${GET.l}%)` }}>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker