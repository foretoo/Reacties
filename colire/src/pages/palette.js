import { h, Fragment } from "preact"
import { Link, useParams, useHistory } from "react-router-dom"
import { useCtx, useConst } from "@utils/hooks"
import { Button } from "@assets"
import {
  Header,
  Content,
  SwitcherMode,
  SliderLevel,
  Snackbar,
} from "@components"
import "./css/page.css"

const Palette = () => {

  const history = useHistory()
  const { paletteID, colorID } = useParams()

  const { state: { palettes }, dispatch } = useCtx()
  const palette = palettes.find((palette) => palette.id === paletteID)
  const color   = colorID ? palette.colors.find(c => c.id === colorID) : null

  const handleDeletePalette = useConst(() => {
    dispatch({
      type:    "DELETE_PALETTE",
      payload: paletteID,
    })
    history.push("/")
  })

  
  const Navigation = () => (
    colorID
    ? <>
        <Link to={`/${paletteID}/`}>
          <span>{palette.name}</span>
          <span className="nav-palette-emoji">{palette.emoji}</span>
        </Link>
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
        <nav className="header-nav">
          <Link className="nav-link" to="/">root</Link>
          <span className="nav-slash">/</span>
          <Navigation />
        </nav>
        <div className="header-menu">
          <Button name="Export" type="idle" size={35} />
          {!colorID &&
          <>
            <Button name="Edit" type="idle" size={35} onClick={() => history.push("edit")} />
            <Button name="Delete" type="idle" size={35} onClick={handleDeletePalette} />
          </>
          }
        </div>
      </Header>

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
