import { h, Fragment } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { clamp, round } from '@utils/helpers'
import './css/slider.css'

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  label = false,
  onChange = () => {},
}) => {

  const INIT = {
    pointer: {
      start: false,
      x: 0,
    },
    path: {
      width: 0,
      x: 0,
    },
    handler: {
      width: 0,
      offset: 0,
      translate: 0,
    },
    mounted: false,
    stepWidth: 0,
    stepRatio: 0,
    stepTotal: 0,
    value: defaultValue,
  }

  const [ GET, SET ] = useState(INIT)
  const pathRef      = useRef()
  const handlerRef   = useRef()

  useEffect(() => {

    const { width: pathWidth, x: pathX } = pathRef.current.getBoundingClientRect()
    const { width: handlerWidth }        = handlerRef.current.getBoundingClientRect()

    const path          = { width: pathWidth - handlerWidth, x: pathX }
    const stepTotal     = (max - min) / step
    const stepRatio     = 1 / stepTotal
    const stepWidth     = path.width / stepTotal
    const offset        = ((defaultValue - min) / step) * stepWidth 
    const translate     = offset
    const handler       = { width: handlerWidth, offset, translate }
    const mounted       = true

    SET({ ...GET, path, handler, mounted, stepWidth, stepRatio, stepTotal })

    window.addEventListener("pointerup", handleEnd, false)
    window.addEventListener("pointercancel", handleEnd, false)

    return () => {
      window.removeEventListener("pointerup", handleEnd)
      window.removeEventListener("pointercancel", handleEnd)
    }
  }, [min, max, step])

  const handleStart = (e) => {
    handlerRef.current.setPointerCapture(e.pointerId)
    SET(PREV => ({ ...PREV, pointer: { start: true, x: e.pageX } }))
  }
  const handleEnd = (e) => {
    handlerRef.current.releasePointerCapture(e.pointerId)
    SET(PREV => ({ ...PREV, pointer: { ...PREV.pointer, start: false } }))
  }

  const handleMove = (e) => {
    GET.pointer.start &&
    SET(PREV => {

      const pointer     = { ...PREV.pointer, x: e.pageX }
      const delta       = pointer.x - PREV.pointer.x
      const offset      = PREV.handler.offset + delta
      const offsetRatio = offset / GET.path.width
      const stepAmount  = clamp(round(offsetRatio / GET.stepRatio), 0, GET.stepTotal)
      const translate   = stepAmount * GET.stepWidth

      const handler     = { offset, translate }
      const value       = min + stepAmount * step

      if ( value !== PREV.value ) onChange(value)

      return { ...PREV, pointer, handler, value }
    })
  }

  return (
    <div className='slider-container'>
      <div ref={pathRef} className='slider-path'>
        {GET.mounted && label &&
        <>
          <div className='slider-min label'
            style={{
              left: `${GET.handler.width/2}px`,
              visibility: GET.value === min ? 'hidden' : 'visible'
            }} >
            {min}
          </div>
          <div className='slider-max label'
            style={{
              right: `${GET.handler.width/2}px`,
              visibility: GET.value === max ? 'hidden' : 'visible'
            }} >
            {max}
          </div>
        </>
        }
        <div ref={handlerRef} className='slider-handler'
          style={{ transform: `translate(${GET.handler.translate}px)` }}
          onPointerDown={handleStart}
          onPointerMove={handleMove} >
          {label &&
            <div className='slider-value label'>{GET.value}</div>
          }
        </div>
      </div>
    </div>
  )

}

export default Slider