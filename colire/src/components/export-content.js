import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { gsap } from "gsap"
import { useAgent, usePalettes, usePalettesDispatch } from "@app/ctx"
import { useConst } from "@utils/hooks"
import { Button, Switcher } from "@assets"
import "./css/export-content.css" 

const ExportContent = ({ colorID }) => {

  const { actualTheme, agent } = useAgent()
  const isDark   = actualTheme === "dark" ? true : false
  const isMobile = agent.width < 769 ? true : false

  const { toExport: { css, json, display }, format } = usePalettes()
  const dispatch = usePalettesDispatch()

  const [ mode, setModes ] = useState("CSS")
  const copiedRef = useRef(null)

  const modes = useConst([ "CSS", "JSON" ])
  const handleClose = useConst(() => dispatch({ type: "EXPORT_CONTENT_HIDE" }))
  const content = mode === "CSS"
    ? css[format.toLowerCase()]
    : json[format.toLowerCase()]

  useEffect(handleClose, [ colorID ])
  useEffect(() => {
    if (display && navigator.clipboard) {
      gsap.fromTo(copiedRef.current,
        { backgroundColor: isDark ? "#fff7" : "#ffff" },
        { backgroundColor: "#fff0", ease: "power1.in", duration: 1.5 }
      )
      navigator.clipboard.writeText(content)
    }
  }, [ display, format, mode ])

  return (
    <div className="export-container"
      style={{ visibility: display ? "visible" : "hidden" }}>
      <div className="export-wrapper">
        <div className="export-content"
          style={isMobile ? { flexGrow: 1 } : null}>
          <div className="export-controls">
            <Switcher
              style={{
                "--font-size": "13px",
                "--padding":   "7px",
                "--border":    "2px",
              }}
              options={modes}
              defaultValue={mode}
              onChange={setModes} />
            {navigator.clipboard &&
              <span ref={copiedRef}>Copied</span>
            }
          </div>
          <p>{content}</p>
        </div>
        <Button
          name="close"
          type="idle"
          size={33}
          onClick={handleClose} />
      </div>
    </div>
  )
}

export default ExportContent