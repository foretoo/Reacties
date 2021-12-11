import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '@app'
import './css/overlay.css'

const Overlay = () => {

  const { state } = useContext(Context)
  const { overlay, lumClass, code } = state.copy

  const showClass = overlay ? ' show' : ''
  
  return (
    <section
      class={'overlay' + showClass + lumClass}
      style={{background: code}}
    >
      <h1>Copied</h1>
      <span>{code}</span>
    </section>
  )
}

export default Overlay
