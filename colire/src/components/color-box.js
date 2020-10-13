import { h } from 'preact'
import { useState, useContext } from 'preact/hooks'
import { Context } from '../app/context'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './css/color-box.css'

const ColorBox = ({ id, name, hex, rgb, button }) => {

  const { state, dispatch } = useContext(Context)
  const colorCode = state.format.label === 'HEX' ? hex : rgb

  const handleCopy = () => {
    dispatch({
      type: 'COPY',
      payload: colorCode
    })
    setTimeout(() => {
      dispatch({ type: 'COPY_ANIMATION_DONE' })
    }, 1600)
  }

  const { animate, code } = state.copy
  const overlayShow = animate && code === colorCode ? ' copy' : ''
  return (
    <CopyToClipboard text={colorCode} onCopy={handleCopy}>
      <div class='color-box' style={{ background: hex }}>
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
