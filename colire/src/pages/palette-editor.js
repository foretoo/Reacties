import { h, Fragment } from "preact"
import { Link } from "react-router-dom"
import {
  Header,
  SortablePalette,
  PaletteEditorForm,
  NewPaletteNameForm,
} from "@components"
import "./css/palette-editor.css"

const PaletteEditor = () => (
  <>
    <Header className="edit-palette-header">
      <div className="header-container">
        <nav className="header-nav">
          <Link className="nav-link" to="/">root</Link>
          <span className="nav-slash">/</span>
          <span className="nav-palette-name">Create palette</span>
          <span className="nav-palette-emoji">🧑‍🎨</span>
        </nav>
      </div>
      <NewPaletteNameForm />
    </Header>

    <main className="edit-palette-container">
      <PaletteEditorForm />
      <section className="edit-palette-content">
        <SortablePalette />
      </section>
    </main>
  </>
)

export default PaletteEditor
