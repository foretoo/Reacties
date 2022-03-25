import { h, Fragment } from "preact"
import { useEffect } from "preact/hooks"
import { useParams } from "react-router-dom"
import { usePalettes, usePalettesDispatch } from "@app/ctx"
import {
  Content,
  ExportContent,
  PageHeader,
  SwitcherMode,
  SliderLevel,
  Snackbar,
} from "@components"
import "./css/page.css"

const Palette = () => {

  const { paletteID, colorID } = useParams()

  const { palettes } = usePalettes()
  const dispatch = usePalettesDispatch()
  const palette = palettes.find((palette) => palette.id === paletteID)
  const color   = colorID ? palette.colors.find(c => c.id === colorID) : null

  useEffect(() => {
    dispatch({
      type: "EXPORT_CONTENT_CHANGE",
      payload: color || palette
    })
  }, [ paletteID, colorID, palette.activeLevel ])

 

  return (
    <>
      <PageHeader palette={palette} color={color} />

      <aside className="controls">
        {colorID ? null : <SliderLevel id={paletteID} level={palette.activeLevel}/>}
        <SwitcherMode color={!!color} />
      </aside>

      <main className="content-container">
        <Content palette={palette} color={color} />
        <Snackbar />
        <ExportContent colorID={colorID} />
      </main>
    </>
  )
}

export default Palette

