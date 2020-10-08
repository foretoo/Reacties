import { h } from 'preact'
import { useState, useContext } from 'preact/hooks'
import { Context } from '../app/context'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './css/color-box.css'

const ColorBox = ({ name, hex, rgb }) => {

  const { state, dispatch } = useContext(Context)
  const [ copied, setCopied ] = useState(false)
  const colorCode = state.mode === 'HEX' ? hex : rgb

  const handleCopy = () => {
    dispatch({ type: 'COPY', payload: colorCode })
    setCopied(true,
      setTimeout(() => {
        dispatch({ type: 'ANIMATION_DONE'})
        setCopied(false)
      }, 1600)
    )
  }

  const copiedClass = copied ? ' copy' : ''
  return (
    <CopyToClipboard text={colorCode} onCopy={handleCopy}>
      <div class='color-box' style={{ background: hex }}>
        <div class={'color-box-overlay' + copiedClass} style={{ background: hex }}></div>
        <button class='color-box-button'>COPY</button>
        <div class='color-box-info'>
          <div class='color-box-info-name'>{name}</div>
          <button class='color-box-info-more'>MORE</button>
        </div>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
