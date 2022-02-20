import { h, Fragment } from "preact"
import { useContext } from "preact/hooks"
import { Link, useParams } from "react-router-dom"
import { Context } from "@app"
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

  const { state: { palettes }, dispatch } = useContext(Context)
  const { paletteID, colorID } = useParams()
  const palette = palettes.find((palette) => palette.id === paletteID)

  const handleCopy = (code, lumClass) => {
    dispatch({
      type:    "COPY",
      payload: { code, lumClass },
    })
    dispatch({ type: "COPY_OVERLAY_SHOW" })
    setTimeout(() => {
      dispatch({ type: "COPY_OVERLAY_HIDE" })
    }, 1600)
  }

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
        <nav className="nav">
          <Link className="nav-link" to="/">root</Link>
          <span className="nav-slash">/</span>
          <Navigation />
        </nav>
        <section className="controls">
          {colorID ? null : <SliderLevel id={paletteID} level={palette.activeLevel}/>}
          <SwitcherMode />
        </section>
      </Header>

      <main className="content-container">
        <Snackbar />
        <Overlay />
        <Content />
      </main>
    </>
  )
}

export default Palette
