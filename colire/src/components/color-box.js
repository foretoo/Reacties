import { h } from "preact"
import { useContext } from "preact/hooks"
import chroma from "chroma-js"
import { Context } from "@app"
import { CopyToClipboard } from "react-copy-to-clipboard"
import "./css/color-box.css"

const ColorBox = ({ name, hex, rgb, level, button, contentClass, handleCopy }) => {

  const { state } = useContext(Context)

  const code = state.format.label === "HEX" ? hex : rgb
  const lum = chroma(hex).luminance()
  const lumClass = lum < 0.333 ? " light" : " dark"

  return (
    <CopyToClipboard text={code} onCopy={() => handleCopy(code, lumClass)}>
      <div className={"color-box" + contentClass + lumClass} style={{ background: hex }}>
        <button className="color-box-button">COPY</button>
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
