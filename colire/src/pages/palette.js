import { h, Fragment } from "preact"
import { useParams } from "react-router-dom"
import { usePalettes } from "@app/ctx"
import {
  Content,
  PageHeader,
  SwitcherMode,
  SliderLevel,
  Snackbar,
} from "@components"
import "./css/page.css"

const Palette = () => {

  const { paletteID, colorID } = useParams()

  const { palettes } = usePalettes()
  const palette = palettes.find((palette) => palette.id === paletteID)
  const color   = colorID ? palette.colors.find(c => c.id === colorID) : null

 

  return (
    <>
      <PageHeader palette={palette} color={color} />

      <aside className="controls">
        {colorID ? null : <SliderLevel id={paletteID} level={palette.activeLevel}/>}
        <SwitcherMode />
      </aside>

      <main className="content-container">
        <Content palette={palette} color={color} />
        <Snackbar />
      </main>
    </>
  )
}

export default Palette
