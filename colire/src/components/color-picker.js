import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import './css/color-picker.css'

const ColorPicker = () => {

  const initialPicker = {
    pointer: {
      start: false,
      x: 0,
      y: 0,
    },
    angle: 0,
  }
  const [ GET, SET ] = useState(initialPicker)
  const pickerRef = useRef()

  useEffect(() => {
    window.addEventListener("pointerup", handleEnd, false)
    window.addEventListener("pointercancel", handleEnd, false)
    return () => {
      window.removeEventListener("pointerup", handleEnd)
      window.removeEventListener("pointercancel", handleEnd)
    }
  }, [])

  const handleStart = (e) => {
    pickerRef.current.setPointerCapture(e.pointerId)
    SET(PREV => ({ ...PREV, pointer: { ...PREV.pointer, start: true } }))
  }
  const handleEnd = (e) => {
    pickerRef.current.releasePointerCapture(e.pointerId)
    SET(PREV => ({ ...PREV, pointer: { ...PREV.pointer, start: false } }))
  }
  const handleMove = (e) => {
    GET.pointer.start && 
    console.log(`MOVE`)
  }

  return (
    <div className='color-picker-container'>
      <div className='picker-colors'>
        <div ref={pickerRef} className='picker'
          style={{ transform: `rotate${GET.angle}deg` }}
          onPointerDown={handleStart}
          onPointerMove={handleMove} >
          <svg className='picker-fill'
            width="228"
            height="228"
            viewBox="0 0 228 228"
            xmlns="http://www.w3.org/2000/svg" >
            <path d="M154 100 h69 c2 0 4 -2 4 -4 a114 114 0 1 0 0 37 c0 -3 -2 -5 -4 -5 h-69 a14 14 0 0 1 0 -28Z"/>
            <path d="M154 122 a8 8 0 0 1 0 -16 h70 a4 4 0 0 1 4 4 v8 a4 4 0 0 1 -4 4Z" fill="#fff" />
            <circle cx='114' cy='114' r='14' fill="#222" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
//