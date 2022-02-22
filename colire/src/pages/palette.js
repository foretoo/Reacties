import { h, Fragment } from "preact"
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

  const handleCopy = useConst((code, lumClass) => {
    dispatch({
      type:    "COPY",
      payload: { code, lumClass },
    })
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
        id={colorID}
        name={palette.colors[colorID].name}
        levels={palette.colors[colorID].levels}
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
          <span>{palette.paletteName}</span>
          <span className="nav-palette-emoji">{palette.emoji}</span>
        </Link>
        <span className="nav-slash">/</span>
        <span className="nav-palette-name">{palette.colors[colorID].name}</span>
      </>
    : <>
        <span className="nav-palette-name">{palette.paletteName}</span>
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
          <div >
            <Button name="Export" type="idle" />
            <Button name="Edit" type="idle" />
            <Button name="Delete" type="idle" onClick={handleDeletePalette} />
          </div>
        </div>
        <section className="controls">
          {colorID ? null : <SliderLevel id={paletteID} level={palette.activeLevel}/>}
          <SwitcherMode />
        </section>
      </Header>

      <main className="content-container">
        <Content />
        <Overlay />
        <Snackbar />
      </main>
    </>
  )
}

export default Palette
