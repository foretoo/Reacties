import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { clamp } from '@utils/helpers'
import './css/slider-neu.css'

const SliderNeu = () => {

  const initialState = {
    start: false,
    pointerX: 0,
    translate: 0,
    width: 0,
  }

  const [ state, setState ] = useState(initialState)
  const pathRef = useRef(null)
  const handlerRef = useRef(null)

  useEffect(() => {
    setState(prevState => {
      const width = pathRef.current.getBoundingClientRect().width
      return { ...prevState, width }
    })
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
  const handleEnd = () => {
    handlerRef.current.releasePointerCapture(e.pointerId);
    setState(prevState => ({ ...prevState, start: false }))
  }
  const handleMove = (e) => {
    state.start &&
    setState(prevState => {
      const translate = prevState.translate + (e.pageX - prevState.pointerX)
      return {
        ...prevState,
        pointerX: e.pageX,
        translate: clamp(translate, 0, state.width),
      }
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