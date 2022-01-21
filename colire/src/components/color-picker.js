import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { calcAngle } from '@utils/helpers'
import chroma from 'chroma-js'
import './css/color-picker.css'

const ColorPicker = ({
  mode = 'hsl',
  defaultValue = { h:270, s:100, l:50 },
  shift = 90,
}) => {

  const initialPicker = {
    pointer: {
      start: false,
      a: 0,
    },
    handler: {
      origin: { x: 0, y: 0 },
      a: 0,
    },
    h: 0,
    s: 100,
    l: 100,
    shift: shift % 360,
    value: defaultValue,
    mounted: false,
  }
  const [ GET, SET ] = useState(initialPicker)
  const pickerRef = useRef()
  const handlerRef = useRef()

  useEffect(() => {
    const pickerRect = pickerRef.current.getBoundingClientRect()
    const x = pickerRect.x + pickerRect.width / 2
    const y = pickerRect.y + pickerRect.height / 2
    const origin = { x, y }

    let a, h, s, l
    if (GET.value.hasOwnProperty('h')) ({ h, s, l } = GET.value, a = h)
    else ([ h, s, l ] = chroma(GET.value).hsl(), a = h)

    const handler = { origin, a }
    const mounted = true

    SET(PREV => ({ ...PREV, handler, h, s, l, mounted }))

    window.addEventListener("pointerup", handleEnd, false)
    window.addEventListener("pointercancel", handleEnd, false)
    return () => {
      window.removeEventListener("pointerup", handleEnd)
      window.removeEventListener("pointercancel", handleEnd)
    }
  }, [])

  const handleStart = (e) => {
    SET(PREV => {
      const a = calcAngle(
        e.pageX - GET.handler.origin.x,
        e.pageY - GET.handler.origin.y
      ) - GET.shift
      let h = PREV.h
      if (e.target.className === "color-picker") {
        pickerRef.current.setPointerCapture(e.pointerId)
        h = a
      }
      if (e.target.className === "picker-handler") {
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
  const handleEnd = (e) => {
    if (e.target.className === "color-picker") {
      pickerRef.current.releasePointerCapture(e.pointerId)
    }
    if (e.target.className === "picker-handler") {
      handlerRef.current.releasePointerCapture(e.pointerId)
    }
    SET(PREV => ({ ...PREV, pointer: { ...PREV.pointer, start: false } }))
  }
  const handleMove = (e) => {
    if (GET.pointer.start) {
      e.preventDefault()
      SET(PREV => {
        const pointer = {
          ...PREV.pointer,
          a: calcAngle(
            e.pageX - GET.handler.origin.x,
            e.pageY - GET.handler.origin.y
          ) - GET.shift
        }
        let a = (PREV.handler.a + (pointer.a - PREV.pointer.a)) % 360
        if (a < 0) a += 360
        const handler = { ...PREV.handler, a }

        return { ...PREV, pointer, handler, h: a }
      })
    }
  }
  const handleSat = (e) => {
    SET(PREV => ({ ...PREV, s: e.target.value }))
  }
  const handleLgt = (e) => {
    SET(PREV => ({ ...PREV, l: e.target.value }))
  }

  return (
    <div className='color-picker-container'>
      <div ref={pickerRef} className='color-picker'
        style={{ background:`conic-gradient(
          from ${0.25 + GET.shift / 360}turn,
          hsl(0,   ${GET.s}%, ${GET.l}%),
          hsl(60,  ${GET.s}%, ${GET.l}%),
          hsl(120, ${GET.s}%, ${GET.l}%),
          hsl(180, ${GET.s}%, ${GET.l}%),
          hsl(240, ${GET.s}%, ${GET.l}%),
          hsl(300, ${GET.s}%, ${GET.l}%),
          hsl(0,   ${GET.s}%, ${GET.l}%)
        )` }}
        onPointerDown={handleStart}
        onPointerMove={handleMove} >
        <div className='color-picker-labels' style={{ transform: `rotate(${GET.shift}deg)` }}>
          <label style={{ "--sign":
              (GET.shift <  180 && GET.shift >= 0) ||
              (GET.shift < -180)
                ? -1 : 1
            }}>R</label>
          <label style={{ "--sign":
              (GET.shift <  60  && GET.shift >= -120) ||
              (GET.shift < -300 || GET.shift >=  240)
                ? 1 : -5
            }}>G</label>
          <label style={{ "--sign":
              (GET.shift <  300 && GET.shift >=  120) ||
              (GET.shift < -60  && GET.shift >= -240)
                ? 5 : -1
            }}>B</label>
        </div>
        {GET.mounted &&
          <div ref={handlerRef} className='picker-handler'>
            <svg className='picker-view' xmlns="http://www.w3.org/2000/svg"
              width="100%" height="100%" viewBox="0 0 228 228"
              style={{ transform: `rotate(calc(${GET.handler.a + GET.shift}deg))` }} >
              <g>
                <path d="M154 100a14 14 0 0 0 0 28h68.63a4 4 0 0 1 3.88 4.48a114 114 0 1 1 0-36.96a4 4 0 0 1-3.88 4.48Z"
                  fill="#333" />
                <path d="M154 122 a8 8 0 0 1 0-16 h70 a4 4 0 0 1 4 4 v8 a4 4 0 0 1-4 4Z"
                  fill={`hsl(${GET.h}, ${GET.s}%, ${GET.l}%)`} />
                <g fill="#222">
                  <circle cx='114' cy='114' r='14' />
                  {/*
                  <path d="M28.06 82.86A16 16 0 0 1 44.06 55.14L87.36 80.14A16 16 0 0 1 71.36 107.86Z" />
                  <path d="M44.06 172.86A16 16 0 0 1 28.06 145.14L71.36 120.14A16 16 0 0 1 87.36 147.86Z" />
                  */}
                </g>
              </g>
            </svg>
          </div>
        }
      </div>
      <div className='picker-controls'>
        <label>
          Saturation
          <input className="picker-sat" type="range" min="0" max="100" step="1"
            value={GET.s}
            onChange={handleSat} />
        </label>
        <label>
          Lightness
          <input className="picker-lgt" type="range" min="0" max="100" step="1"
            value={GET.l}
            onChange={handleLgt} />
        </label>
      </div>
    </div>
  )
}

export default ColorPicker