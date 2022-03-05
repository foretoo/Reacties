import { h, Fragment } from "preact"
import { useState } from "preact/hooks"
import { usePalettes } from "@app/ctx"
import { useConst } from "@utils/hooks"
import { Overlay, PaletteListContent, ColorListContent } from "@components"

const Content = ({ palette, color }) => {

  const { format } = usePalettes()
  const [ overlay, setOverlay ] = useState({ code: "", lumClass: "", force: false })

  const handleCopy = useConst((code, lumClass) => {
    setOverlay((prev) => ({ code, lumClass, force: !prev.force }))
  })

  return (
    <>
      {color
        ? <ColorListContent
            id={color.id}
            name={color.name}
            format={format}
            levels={color.levels}
            handleCopy={handleCopy} />
        : <div className="palette-content">
            <PaletteListContent
              colors={palette.colors}
              format={format}
              activeLevel={palette.activeLevel}
              handleCopy={handleCopy} />
          </div>
      }
      <Overlay
        code={overlay.code}
        lumClass={overlay.lumClass}
        force={overlay.force} />
    </>
  )
}

export default Content