import { h } from "preact"
import chroma from "chroma-js"
import { CopyToClipboard } from "react-copy-to-clipboard"
import "./css/color-box.css"

const ColorBox = ({ name, hex, rgb, format, level, button, contentClass, handleCopy }) => {

  const code = format === "HEX" ? hex : rgb
  const lum = chroma(hex).luminance()
  const lumClass = lum < 0.333 ? " light" : " dark"

  return (
    <CopyToClipboard text={code} onCopy={() => handleCopy(code, lumClass)}>
      <div className={"color-box" + contentClass + lumClass} style={{ background: hex }}>
        <div className="color-box-button">COPY</div>
        <div className="color-box-info">
          <div className="color-box-info-name">
            {`${name} ${level}`}
          </div>
          {button ? button : null}
        </div>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
