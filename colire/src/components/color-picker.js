import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { clamp, round, calcAngle, r3d } from "@utils/helpers"
import chroma from "chroma-js"
import "./css/color-picker.css"

const ColorPicker = ({
  mode = "hsl",
  defaultValue = { h: 135, s: 0.7, l: 0.75 },
  shift = 0,
  size = 320,
}) => {



  const initialPicker = {
    pointer: 0,
    hue:     {
      start:  false,
      origin: { x: 0, y: 0 },
      a:      0,
    },
    tone: {
      start: false,
      x:     0,
      y:     0,
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
    SET((PREV) => {
      const pickerRect = pickerRef.current.getBoundingClientRect()
      const origin = {
        x: pickerRect.x + pickerRect.width / 2,
        y: pickerRect.y + pickerRect.height / 2,
      }
      const [ h, s, l ] = chroma(GET.value).hsl()
      const [ , x, y ] = chroma(h, s, l, "hsl").hsv()

      const hue = { ...PREV.hue, origin, a: h }
      const tone = { ...PREV.tone, x: x * 100, y: 100 - y * 100 }

      return { ...PREV, hue, tone, h, s: s * 100, l: l * 100, mounted: true }
    })
  }, [])



  /*-----------*/
  /* HUE START */
  const handleHueStart = (e) => {
    SET((PREV) => {
      const pointer = calcAngle(
        e.pageX - GET.hue.origin.x,
        e.pageY - GET.hue.origin.y,
      ) - 90 - GET.shift
      let h = PREV.h
      if (e.target === pickerRef.current) {
        pickerRef.current.setPointerCapture(e.pointerId)
        h = pointer
      }
      if (e.target === handlerRef.current) {
        handlerRef.current.setPointerCapture(e.pointerId)
      }
      return {
        ...PREV,
        pointer,
        hue: { ...PREV.hue, start: true, a: h },
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
    SET((PREV) => ({ ...PREV, hue: { ...PREV.hue, start: false }}))
  }
  /*----------*/
  /* HUE MOVE */
  const handleHueMove = (e) => {
    GET.hue.start && (
      e.preventDefault(),
      SET((PREV) => {
        const pointer = calcAngle(
          e.pageX - GET.hue.origin.x,
          e.pageY - GET.hue.origin.y,
        ) - 90 - GET.shift

        let a = (PREV.hue.a + (pointer - PREV.pointer)) % 360
        if (a < 0) a += 360
        const hue = { ...PREV.hue, a }

        return { ...PREV, pointer, hue, h: a }
      })
    )
  }



  /*------------*/
  /* TONE START */
  const handleToneStart = (e) => {
    toneRef.current.setPointerCapture(e.pointerId)
    SET((PREV) => {
      const tone = {
        start: true,
        x:     clamp(round(e.offsetX), 0, 100),
        y:     clamp(round(e.offsetY), 0, 100),
      }
      const [ , s, l ] = chroma(PREV.h, tone.x / 100, (100 - tone.y) / 100, "hsv").hsl()
      return { ...PREV, tone, s: s * 100, l: l * 100 }
    })
  }
  /*------------*/
  /* TONE START */
  const handleToneEnd = (e) => {
    toneRef.current.releasePointerCapture(e.pointerId)
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
        const [ , s, l ] = chroma(PREV.h, tone.x / 100, (100 - tone.y) / 100, "hsv").hsl()
        return { ...PREV, tone, s: s * 100, l: l * 100 }
      })
    }
  }



  return (
    <div className="color-picker-container"
      style={{ "--size": `${size}px`, "--hue": GET.h }}>

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
            style={{ transform: `rotate(${GET.hue.a + GET.shift}deg)` }} >
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
          onPointerDown={handleToneStart}
          onPointerMove={handleToneMove}
          onPointerUp={handleToneEnd}
          onPointerCancel={handleToneEnd} >
          <div className="picker-tone-point"
            style={{
              top:        `${GET.tone.y}px`,
              left:       `${GET.tone.x}px`,
              background: `hsl(${GET.h}, ${GET.s}%, ${GET.l}%)`,
            }} >
          </div>
        </div>
        <button className="picker-value"
          style={{ background: `hsl(${GET.h}, ${GET.s}%, ${GET.l}%)` }}>
          ADD
        </button>
      </div>
    </div>
  )
}

export default ColorPicker