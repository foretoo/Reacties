import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import './css/loader.css'

const Loader = () => {

  const [ str, setStr ] = useState('loading')

  useEffect(() => {
    const spinning = setInterval(() => {
      setStr(prevStr => prevStr.concat('.'))
    }, 666)
    return () => clearInterval(spinning)
  }, [])

  return (
    <div class='loader'>{str}</div>
  )
}

export default Loader
