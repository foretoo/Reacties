import { h, Fragment } from "preact"
import { Link, useParams } from "react-router-dom"
import { useCtx } from "@utils/hooks"
import {
  Header,
  SortablePalette,
  PaletteEditorForm,
  PaletteEditorNameForm,
} from "@components"
import "./css/palette-editor.css"

const PaletteEditor = () => {
  const { paletteID } = useParams()
  const { state: { palettes, editor }, dispatch } = useCtx()
  const target = paletteID ? "toEdit" : "toCreate"

  if (paletteID && editor.toEdit.id !== paletteID) {
    dispatch({
      type: "INIT_EDIT_PALETTE",
      payload: paletteID,
    })
    return null
  }

  const Navigation = () => {
    if (paletteID) {
      const { name, emoji } = palettes.find((palette) => palette.id === paletteID)
      return (
        <>
          <Link to={`/${paletteID}/`}>
            <span>{name}</span>
          </Link>
          <span className="nav-palette-emoji">{emoji}</span>
          <span className="nav-slash">/</span>
          <span className="nav-palette-name">edit</span>
        </>
      )
    }
    else return (
      <>
        <span className="nav-palette-name">Create palette</span>
        <span className="nav-palette-emoji">🧑‍🎨</span>
      </>
    )
  }
  return (
    <>
      <Header className="edit-palette-header">
        <div className="header-container">
          <nav className="header-nav">
            <Link className="nav-link" to="/">root</Link>
            <span className="nav-slash">/</span>
            <Navigation />
          </nav>
        </div>
        <PaletteEditorNameForm paletteID={paletteID} target={target} />
      </Header>

      <main className="edit-palette-container">
        <PaletteEditorForm target={target} />
        <section className="edit-palette-content">
          <SortablePalette target={target} />
        </section>
      </main>
    </>
  )
}

export default PaletteEditor
