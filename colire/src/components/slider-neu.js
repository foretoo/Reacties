import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { clamp } from '@utils/helpers'
import './css/slider-neu.css'

const SliderNeu = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
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
      offset: 0,
      translate: 0,
      translateStep: 0,
    },
    value: 0,
  }

  const [ GET, SET ] = useState(INIT)
  const pathRef = useRef()
  const handlerRef = useRef()

  useEffect(() => {

    const { width: pathWidth, x: pathX } = pathRef.current.getBoundingClientRect()
    const { width: handlerWidth } = handlerRef.current.getBoundingClientRect()
    const path = { width: pathWidth - handlerWidth, x: pathX }

    const translateStep = path.width / ((max - min) / step)
    const offset = ((defaultValue - min) / step) * translateStep
    const translate = offset
    const handler = { offset, translate, translateStep }

    SET({ ...GET, path, handler })

    window.addEventListener("pointerup", handleEnd, false)
    window.addEventListener("pointercancel", handleEnd, false)

    return () => {
      window.removeEventListener("pointerup", handleEnd)
      window.removeEventListener("pointercancel", handleEnd)
    }
  }, [])

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
    e.pageX >= GET.path.x &&
    e.pageX <= GET.path.x + GET.path.width &&
    SET(PREV => {

      const pointer = { ...PREV.pointer, x: e.pageX }
      const delta = pointer.x - PREV.pointer.x
      const offset = clamp(PREV.handler.offset + delta, 0, GET.path.width)
      const steps = Math.round((offset / GET.path.width) / (step / (max - min)))
      const translate = steps * GET.handler.translateStep
      const handler = { ...PREV.handler, offset, translate }

      const value = min + steps * step
      if (PREV.value !== value) onChange(value)

      return { ...PREV, pointer, handler, value }
    })
  }

  return (
    <div className='slider-container'>
      <div ref={pathRef} className='slider-path'>
        <div ref={handlerRef} className='slider-handler'
          style={{ transform: `translate(${GET.handler.translate}px)` }}
          onPointerDown={handleStart}
          onPointerMove={handleMove} >
        </div>
      </div>
    </div>
  )

}

export default SliderNeu