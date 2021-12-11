import { h } from 'preact'
import { useContext } from 'preact/hooks'
import chroma from 'chroma-js'
import { Context } from '@app'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './css/color-box.css'

const ColorBox = ({ name, hex, rgb, button, contentClass }) => {

  const { state, dispatch } = useContext(Context)

  const colorCode = state.format.label === 'HEX' ? hex : rgb
  const lum = chroma(hex).luminance()
  const lumClass = lum < 0.333 ? ' light' : ' dark'

  const handleCopy = () => {
    dispatch({
      type: 'COPY',
      payload: {
        code: colorCode,
        lumClass
      }
    })
    dispatch({ type: 'COPY_OVERLAY_SHOW' })
    setTimeout(() => {
      dispatch({ type: 'COPY_OVERLAY_HIDE' })
    }, 1600)
  }

  return (
    <CopyToClipboard text={colorCode} onCopy={handleCopy}>
      <div class={'color-box' + contentClass + lumClass} style={{ background: hex }}>
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
