import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import './css/slider-neu.css'

const SliderNeu = () => {

  const [ state, setState ] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    ref.current && 
      ref.current.addEventListener("pointerdown", handleStart, false);
      ref.current.addEventListener("pointerup", handleEnd, false);
      ref.current.addEventListener("pointercancel", handleCancel, false);
      ref.current.addEventListener("pointermove", handleMove, false);
    return () => {
      ref.current.removeEventListener("pointerdown", handleStart);
      ref.current.removeEventListener("pointerup", handleEnd);
      ref.current.removeEventListener("pointercancel", handleCancel);
      ref.current.removeEventListener("pointermove", handleMove);
    }
  }, [])

  const handleStart = (e) => {
    console.log('DOWN—START');
  }
  const handleEnd = (e) => {
    console.log('UP—END');
  }
  const handleCancel = (e) => {
    console.log('CANCEL');
  }
  const handleMove = (e) => {
    console.log('MOVE');
  }

  return (
    <div ref={ref} className='slider-container'>
      <div className='slider-path'></div>
      <div className='slider-handler'></div>
    </div>
  )

}

export default SliderNeu