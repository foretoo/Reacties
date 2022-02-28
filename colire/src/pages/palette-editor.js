import { h, Fragment } from "preact"
import { useState, useRef, useLayoutEffect } from "preact/hooks"
import { Link, useHistory, useParams } from "react-router-dom"
import gsap from "gsap"
import { useCtx } from "@utils/hooks"
import { getID } from "@utils/helpers"
import { Button } from "@assets"
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

  if (paletteID && editor.toEdit.id !== paletteID) {
    dispatch({
      type:    "INIT_EDIT_PALETTE",
      payload: paletteID,
    })
    return null
  }

  const history = useHistory()
  const target = paletteID ? "toEdit" : "toCreate"
  const { palette, name } = editor[target]
  const [ warn, setWarn ] = useState("")
  const [ width, setWidth ] = useState(0)
  const formRef = useRef(null)

  useLayoutEffect(() => {
    setWidth(formRef.current.offsetWidth)
    gsap.set(formRef.current, { marginLeft: -formRef.current.offsetWidth - 20 })
  }, [])
  const toggleForm = () => {
    const margin = formRef.current.style.marginLeft
    gsap.to(formRef.current, { marginLeft: margin === "0px" ? -width - 20 : 0 })
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

  const handleSavePalette = () => {
    if (!palette.length) setWarn("Palette is empty")
    else if (name.trim()) {
      const curPaletteID = getID(name)
      const curPaletteIdIsUnique = !palettes.some((p) => p.id === curPaletteID)
      if (
        paletteID && (
          curPaletteID === paletteID ||
          curPaletteID !== paletteID && curPaletteIdIsUnique
        ) ||
        curPaletteIdIsUnique
      ) {
        dispatch({
          type:    "SAVE_PALETTE",
          payload: target,
        })
        history.push( paletteID ? `/${curPaletteID}/` : `/` )
      }
      else setWarn("Palette name should be unique")
    }
    else setWarn("Enter palette name")
  }
  const handleClearPalette = () => {
    dispatch({
      type:    "CLEAR_PALETTE",
      payload: target,
    })
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
      </Header>

      <main className="edit-palette-container">

        <aside ref={formRef} className="edit-palette-form">
          <PaletteEditorNameForm target={target} setWarn={setWarn} />
          <PaletteEditorForm target={target} />
        </aside>

        <section className="edit-palette-view">

          <div className="edit-palette-menu">
            <Button name="🌈"
              type="minor"
              onClick={toggleForm} />
            <div className="warn-info" >{warn}</div>
            <Button name="Save"
              type="idle"
              onClick={handleSavePalette} />
            <Button name="Clear"
              type="idle"
              onClick={handleClearPalette} />
          </div>

          <div className="edit-palette-content">
            <SortablePalette target={target} />
          </div>

        </section>

      </main>
    </>
  )
}

export default PaletteEditor
