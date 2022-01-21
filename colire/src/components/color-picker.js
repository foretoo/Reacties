import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { calcAngle } from '@utils/helpers'
import chroma from 'chroma-js'
import './css/color-picker.css'

const ColorPicker = ({
  defaultValue = { h:48, s:96, l:80 }
}) => {

  const initialPicker = {
    pointer: {
      start: false,
      a: 0,
    },
    picker: {
      origin: { x: 0, y: 0 },
      a: 0,
      s: 100,
      l: 100,
    },
    value: defaultValue,
  }
  const [ GET, SET ] = useState(initialPicker)
  const pickerRef = useRef()

  useEffect(() => {
    const pickerRect = pickerRef.current.getBoundingClientRect()
    const x = pickerRect.x + pickerRect.width / 2
    const y = pickerRect.y + pickerRect.height / 2
    const origin = { x, y }

    let a, s, l
    if ('h' in GET.value) ({ h: a, s, l } = GET.value)
    else ([ a, s, l ] = chroma(GET.value).hsl())

    SET(PREV => ({ ...PREV, picker: { origin, a, s, l } }))

    window.addEventListener("pointerup", handleEnd, false)
    window.addEventListener("pointercancel", handleEnd, false)
    return () => {
      window.removeEventListener("pointerup", handleEnd)
      window.removeEventListener("pointercancel", handleEnd)
    }
  }, [])

  const handleStart = (e) => {
    pickerRef.current.setPointerCapture(e.pointerId)
    const a = calcAngle(
      e.pageX - GET.picker.origin.x,
      e.pageY - GET.picker.origin.y
    )
    SET(PREV => ({ ...PREV, pointer: { start: true, a } }))
  }
  const handleEnd = (e) => {
    pickerRef.current.releasePointerCapture(e.pointerId)
    SET(PREV => ({ ...PREV, pointer: { ...PREV.pointer, start: false } }))
  }
  const handleMove = (e) => {
    GET.pointer.start &&
    SET(PREV => {
      const pointer = {
        ...PREV.pointer,
        a: calcAngle(
          e.pageX - GET.picker.origin.x,
          e.pageY - GET.picker.origin.y
        )
      }
      let a = (PREV.picker.a + (pointer.a - PREV.pointer.a)) % 360
      if (a < 0) a += 360
      const picker = { ...PREV.picker, a }

      return { ...PREV, pointer, picker }
    })
  }

  return (
    <div className='color-picker-container'>
      <div className='picker-hue'
        style={{ background:`conic-gradient(
          from 0.25turn,
          hsl(0, ${GET.s}%, ${GET.l}%),
          hsl(60, ${GET.s}%, ${GET.l}%),
          hsl(120, ${GET.s}%, ${GET.l}%),
          hsl(180, ${GET.s}%, ${GET.l}%),
          hsl(240, ${GET.s}%, ${GET.l}%),
          hsl(300, ${GET.s}%, ${GET.l}%),
          hsl(0, ${GET.s}%, ${GET.l}%)
        )` }} >
        <div ref={pickerRef} className='picker-handler'
          style={{ transform: `rotate(${GET.picker.a}deg)` }}
          onPointerDown={handleStart}
          onPointerMove={handleMove} >
          <svg className='picker-view'
            width="228"
            height="228"
            viewBox="0 0 228 228"
            xmlns="http://www.w3.org/2000/svg" >
            <path d="M154 100a14 14 0 0 0 0 28h68.63a4 4 0 0 1 3.88 4.48a114 114 0 1 1 0-36.96a4 4 0 0 1-3.88 4.48Z"
              fill="#333" />
            <path d="M154 122 a8 8 0 0 1 0-16 h70 a4 4 0 0 1 4 4 v8 a4 4 0 0 1-4 4Z"
              fill={`hsl(${GET.picker.a}, ${GET.picker.s}%, ${GET.picker.l}%)`} />
            <g fill="#222">
              {/*<circle cx='114' cy='114' r='14' />*/}
              <rect x="140" y="98" width="82" height="32" rx="16"
                transform-origin="center"
                transform="rotate(-150)" />
              <rect x="140" y="98" width="82" height="32" rx="16"
                transform-origin="center"
                transform="rotate(150)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker