import { h, Fragment } from "preact"
import { useState } from "preact/hooks"
import { Link, useParams, useHistory } from "react-router-dom"
import { useCtx, useConst } from "@utils/hooks"
import { Button } from "@assets"
import {
  Header,
  Overlay,
  PaletteListContent,
  ColorListContent,
  SwitcherMode,
  SliderLevel,
  Snackbar,
} from "@components"
import "./css/page.css"

const Palette = () => {

  const history = useHistory()
  const { state: { palettes }, dispatch } = useCtx()
  const { paletteID, colorID } = useParams()
  const palette = palettes.find((palette) => palette.id === paletteID)
  const color = colorID ? palette.colors.find(c => c.id === colorID) : null

  const [ overlay, setOverlay ] = useState({ code: "", lumClass: "" })

  const handleCopy = useConst((code, lumClass) => {
    setOverlay({ code, lumClass })
  })
  const handleDeletePalette = useConst(() => {
    dispatch({
      type:    "DELETE_PALETTE",
      payload: paletteID,
    })
    history.push("/")
  })

  const Content = () => (
    colorID
    ? <ColorListContent
        id={color.id}
        name={color.name}
        levels={color.levels}
        handleCopy={handleCopy} />
    : <div className="palette-content">
        <PaletteListContent
          colors={palette.colors}
          activeLevel={palette.activeLevel}
          handleCopy={handleCopy} />
      </div>
  )
  const Navigation = () => (
    colorID
    ? <>
        <Link to={`/${paletteID}/`}>
          <span>{palette.name}</span>
        </Link>
        <span className="nav-palette-emoji">{palette.emoji}</span>
        <span className="nav-slash">/</span>
        <span className="nav-palette-name">{color.name}</span>
      </>
    : <>
        <span className="nav-palette-name">{palette.name}</span>
        <span className="nav-palette-emoji">{palette.emoji}</span>
      </>
  )

  return (
    <>
      <Header>
        <div className="header-container">
          <nav className="header-nav">
            <Link className="nav-link" to="/">root</Link>
            <span className="nav-slash">/</span>
            <Navigation />
          </nav>
          <div className="menu">
            <Button name="Export" type="idle" size={35} />
            {!colorID &&
            <>
              <Button name="Edit" type="idle" size={35} onClick={() => history.push("edit")} />
              <Button name="Delete" type="idle" size={35} onClick={handleDeletePalette} />
            </>
            }
          </div>
        </div>
      </Header>

      <aside className="controls">
        {colorID ? null : <SliderLevel id={paletteID} level={palette.activeLevel}/>}
        <SwitcherMode />
      </aside>

      <main className="content-container">
        <Content />
        <Overlay code={overlay.code} lumClass={overlay.lumClass} />
        <Snackbar />
      </main>
    </>
  )
}

export default Palette
