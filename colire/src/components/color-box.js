import { h } from 'preact'
import { useState, useContext } from 'preact/hooks'
import chroma from 'chroma-js'
import { Context } from '../app/context'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './css/color-box.css'

const ColorBox = ({ name, hex, rgb, button, addClass }) => {

  const { state, dispatch } = useContext(Context)
  const { animate, code } = state.copy
  
  const colorCode = state.format.label === 'HEX' ? hex : rgb
  const overlayShow = animate && code === colorCode ? ' copy' : ''

  const lum = chroma(hex).luminance()
  const lumClass = lum < 0.333 ? ' light' : ' dark'

  const handleCopy = () => {
    dispatch({
      type: 'COPY',
      payload: {
        code: colorCode,
        class: lumClass
      }
    })
    setTimeout(() => {
      dispatch({ type: 'COPY_ANIMATION_DONE' })
    }, 1600)
  }

  return (
    <CopyToClipboard text={colorCode} onCopy={handleCopy}>
      <div class={'color-box' + addClass + lumClass} style={{ background: hex }}>
        <div class={'color-box-overlay' + overlayShow} style={{ background: hex }}></div>
        <button class='color-box-button'>COPY</button>
        <div class='color-box-info'>
          <div class='color-box-info-name'>{name}</div>
          {button ? button : null}
        </div>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
