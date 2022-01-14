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

  const initialState = {
    start: false,
    pointerX: 0,
    offset: 0,
    translate: 0,
    width: 0,
    stepWidth: 0,
    value: 0,
  }

  const [ state, setState ] = useState(initialState)
  const pathRef = useRef(null)
  const handlerRef = useRef(null)

  useEffect(() => {

    const width = pathRef.current.getBoundingClientRect().width
    const stepWidth = width / ((max - min) / step)
    const offset = ((defaultValue - min) / step) * stepWidth
    const translate = offset
    setState({ ...state, offset, translate, width, stepWidth })

    window.addEventListener("pointerup", handleEnd, false);
    window.addEventListener("pointercancel", handleEnd, false);

    return () => {
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointercancel", handleEnd);
    }
  }, [])

  const handleStart = (e) => {
    handlerRef.current.setPointerCapture(e.pointerId)
    setState(prevState => ({ ...prevState, start: true, pointerX: e.pageX }))
  }
  const handleEnd = (e) => {
    handlerRef.current.releasePointerCapture(e.pointerId);
    setState(prevState => ({ ...prevState, start: false }))
  }
  const handleMove = (e) => {
    state.start &&
    setState(prevState => {
      const pointerX = e.pageX
      const offset = clamp(prevState.offset + (e.pageX - prevState.pointerX), 0, state.width)
      const steps = Math.round((offset / state.width) / (step / (max - min)))
      const translate = steps * state.stepWidth
      const value = min + steps * step
      if (prevState.value !== value) onChange(value)
      return { ...prevState, pointerX, offset, translate, value }
    })
  }

  return (
    <div className='slider-container'>
      <div ref={pathRef} className='slider-path'>
        <div ref={handlerRef} className='slider-handler'
          style={{ transform: `translate(${state.translate}px)` }}
          onPointerDown={handleStart}
          onPointerMove={handleMove} >
        </div>
      </div>
    </div>
  )

}

export default SliderNeu