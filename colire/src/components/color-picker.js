import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { calcAngle, angleToColor } from '@utils/helpers'
import './css/color-picker.css'

const ColorPicker = () => {

  const initialPicker = {
    pointer: {
      start: false,
      a: 0,
    },
    picker: {
      origin: { x: 0, y: 0 },
      a: 0,
    },
    value: [ 255, 0, 0 ],
  }
  const [ GET, SET ] = useState(initialPicker)
  const pickerRef = useRef()

  useEffect(() => {
    const pickerRect = pickerRef.current.getBoundingClientRect()
    const x = pickerRect.x + pickerRect.width / 2
    const y = pickerRect.y + pickerRect.height / 2
    const origin = { x, y }
    SET(PREV => ({ ...PREV, picker: { ...PREV.picker, origin } }))

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
      const picker = {
        ...PREV.picker,
        a: (PREV.picker.a + delta) % 360
      }
      if (picker.a < 0) picker.a += 360

      const value = angleToColor(picker.a)
      return { pointer, picker, value }
    })
  }

  return (
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
              fill={`rgb(${GET.value[0]}, ${GET.value[1]}, ${GET.value[2]})`} />
            <circle cx='114' cy='114' r='14' fill="#222" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker