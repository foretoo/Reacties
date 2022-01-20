import { h, Fragment } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { calcAngle, angleToColor, colorToAngle } from '@utils/helpers'
import chroma from 'chroma-js'
import './css/color-picker.css'

const ColorPicker = ({
  defaultValue = [ 0, 255, 127 ]
}) => {

  const initialPicker = {
    pointer: {
      start: false,
      a: 0,
    },
    picker: {
      origin: { x: 0, y: 0 },
      a: 0,
      color: [ 255, 255, 255 ],
    },
    value: defaultValue,
  }
  const [ GET, SET ] = useState(initialPicker)
  const [ log, setLog ] = useState({ r: 34, g: 67, b: 201 })
  const pickerRef = useRef()

  useEffect(() => {
    const pickerRect = pickerRef.current.getBoundingClientRect()
    const x = pickerRect.x + pickerRect.width / 2
    const y = pickerRect.y + pickerRect.height / 2
    const origin = { x, y }
    const a = chroma(log).hsl()[0]
    const color = angleToColor(a)
    SET(PREV => ({ ...PREV, picker: { origin, a, color } }))

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
      const delta = pointer.a - PREV.pointer.a
      let a = (PREV.picker.a + delta) % 360
      if (a < 0) a += 360
      const color = angleToColor(a)
      const picker = { ...PREV.picker, a, color }

      return { ...PREV, pointer, picker }
    })
  }
  const setR = e => {
    setLog(l => ({ ...l, r: e.target.value }))
    SET(PREV => {
      const a = chroma({ ...log, r: e.target.value }).hsl()[0]
      const color = angleToColor(a)
      return { ...PREV, picker: { ...PREV.picker, a, color } }
    })
  }
  const setG = e => {
    setLog(l => ({ ...l, g: e.target.value }))
    SET(PREV => {
      const a = chroma({ ...log, g: e.target.value }).hsl()[0]
      const color = angleToColor(a)
      return { ...PREV, picker: { ...PREV.picker, a, color } }
    })
  }
  const setB = e => {
    setLog(l => ({ ...l, b: e.target.value }))
    SET(PREV => {
      const a = chroma({ ...log, b: e.target.value }).hsl()[0]
      const color = angleToColor(a)
      return { ...PREV, picker: { ...PREV.picker, a, color } }
    })
  }

  return (
    <>
      <div className='log'>
        <div className='input'>
          <label>
            R: <input type='range' min='0' max='255' step='1' value={log.r} onChange={setR} />
          </label>
          <label>
            G: <input type='range' min='0' max='255' step='1' value={log.g} onChange={setG} />
          </label>
          <label>
            B: <input type='range' min='0' max='255' step='1' value={log.b} onChange={setB} />
          </label>
        </div>
        <div className='color' style={{ background: `rgb(${log.r},${log.g},${log.b})` }}></div>
      </div>
      <div className='color-picker-container'>
        <div className='picker-colors'>
          <div ref={pickerRef} className='picker'
            style={{ transform: `rotate(${GET.picker.a}deg)` }}
            onPointerDown={handleStart}
            onPointerMove={handleMove} >
            <svg className='picker-fill'
              width="228"
              height="228"
              viewBox="0 0 228 228"
              xmlns="http://www.w3.org/2000/svg" >
              <path d="M154 100a14 14 0 0 0 0 28h68.63a4 4 0 0 1 3.88 4.48a114 114 0 1 1 0-36.96a4 4 0 0 1-3.88 4.48Z" />
              <path d="M154 122 a8 8 0 0 1 0-16 h70 a4 4 0 0 1 4 4 v8 a4 4 0 0 1-4 4Z"
                fill={`rgb(${GET.picker.color[0]}, ${GET.picker.color[1]}, ${GET.picker.color[2]})`} />
              <circle cx='114' cy='114' r='14' fill="#222" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default ColorPicker