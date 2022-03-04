import { h, Fragment } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import "./slider.css"

const Slider = ({

  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  label = false,
  onChange = (value) => console.log(value),
  className = "",
  style = {},

}) => {

  const INIT = {
    pointer: {
      start: false,
      x:     0,
    },
    path: {
      width: 0,
      x:     0,
    },
    handler: {
      width:     0,
      offset:    0,
      translate: 0,
    },
    mounted:   false,
    stepWidth: 0,
    stepRatio: 0,
    stepMax:   0,
    value:     defaultValue,
  }
  const [ GET, SET ] = useState(INIT)
  const pathRef      = useRef()
  const handlerRef   = useRef()



  // refs are ready, get all sizes & set pointer listeners
  useEffect(() => {
    const { width: pathWidth, x: pathX } = pathRef.current.getBoundingClientRect()
    const { width: handlerWidth }        = handlerRef.current.getBoundingClientRect()

    const path      = { width: pathWidth - handlerWidth, x: pathX }
    const stepMax   = (max - min) / step
    const stepRatio = 1 / stepMax
    const stepWidth = path.width / stepMax
    const offset    = ((defaultValue - min) / step) * stepWidth
    const translate = offset
    const handler   = { width: handlerWidth, offset, translate }
    const mounted   = true

    SET({ ...GET, path, handler, mounted, stepWidth, stepRatio, stepMax })

    window.addEventListener("pointerup", handleEnd, false)
    window.addEventListener("pointercancel", handleEnd, false)
    return () => {
      window.removeEventListener("pointerup", handleEnd)
      window.removeEventListener("pointercancel", handleEnd)
    }
  }, [ min, max, step ])



  const handleStart = (e) => {
    e.preventDefault()
    handlerRef.current.setPointerCapture(e.pointerId)
    if (e.target === handlerRef.current) {
      SET((PREV) => ({ ...PREV, pointer: { start: true, x: e.pageX }}))
    }
    else 
      SET((PREV) => {
        const pointer = { start: true, x: e.pageX }
        const offset  = e.pageX - PREV.path.x - PREV.handler.width / 2
        const { handler, value } = calcSlider(PREV, offset, min, step )
        if ( value !== PREV.value ) onChange(value)
        return { ...PREV, pointer, handler, value }
      })
  }
  const handleEnd = (e) => {
    handlerRef.current.releasePointerCapture(e.pointerId)
    SET((PREV) => ({ ...PREV, pointer: { ...PREV.pointer, start: false }}))
  }
  const handleMove = (e) => {
    e.preventDefault()
    GET.pointer.start &&
    SET((PREV) => {
      const pointer = { ...PREV.pointer, x: e.pageX }
      const offset  = PREV.handler.offset + (pointer.x - PREV.pointer.x)
      const { handler, value } = calcSlider(PREV, offset, min, step )
      if ( value !== PREV.value ) onChange(value)
      return { ...PREV, pointer, handler, value }
    })
  }



  const classList = "slider-container" + (className && ` ${className}`)

  return (
    <div className={classList}
      style={style}
      onPointerDown={handleStart}
      onPointerMove={handleMove} >
      <div ref={pathRef} className="slider-path">
        {GET.mounted && label &&
          <>
            <div className="slider-min label"
              style={{
                left:       `${GET.handler.width / 2}px`,
                visibility: GET.value === min ? "hidden" : "visible",
              }} >
              {min}
            </div>
            <div className="slider-max label"
              style={{
                right:      `${GET.handler.width / 2}px`,
                visibility: GET.value === max ? "hidden" : "visible",
              }} >
              {max}
            </div>
          </>
        }
        <div ref={handlerRef} className="slider-handler"
          style={{
            transform:  `translate(${GET.handler.translate}px)`,
            visibility: GET.mounted ? `visible` : `hidden`,
          }}>
          {label &&
            <div className="slider-value label">{GET.value}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Slider

const calcSlider = (PREV, offset, min, step) => {
  const offsetRatio = offset / PREV.path.width
  const stepActual  = Math.round(offsetRatio / PREV.stepRatio)
  const stepClamped = clamp(stepActual, 0, PREV.stepMax)
  const translate   = stepClamped * PREV.stepWidth
  const handler     = { ...PREV.handler, offset, translate }
  const value       = min + stepClamped * step
  return { handler, value }
}

const clamp = (num, min, max) => num < min ? min : num > max ? max : num