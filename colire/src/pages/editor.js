import { h, Fragment } from "preact"
import { useState, useRef, useLayoutEffect } from "preact/hooks"
import { useHistory, useParams } from "react-router-dom"
import gsap from "gsap"
import { useAgent } from "@app/ctx"
import { useCtx } from "@utils/hooks"
import { getID } from "@utils/helpers"
import { Button } from "@assets"
import {
  SortablePalette,
  PageHeader,
  PaletteEditorForm,
  PaletteEditorNameForm,
} from "@components"
import "./css/palette-editor.css"

const Editor = () => {

  const { paletteID } = useParams()
  const { state: { palettes, editor }, dispatch } = useCtx()
  const { agent } = useAgent()

  if (paletteID && editor.toEdit.id !== paletteID) {
    dispatch({
      type:    "INIT_EDIT_PALETTE",
      payload: paletteID,
    })
    return null
  }

  const history = useHistory()
  const target = paletteID ? "toEdit" : "toCreate"
  const { palette, name, emoji, id } = editor[target]
  const [ warn, setWarn ] = useState("")
  const [ width, setWidth ] = useState(0)
  const formRef = useRef(null)

  useLayoutEffect(() => {
    setWidth(formRef.current.offsetWidth)
    const marginLeft = (paletteID && agent.width < 769)
      ? -formRef.current.offsetWidth
      : 0 
    gsap.set(formRef.current, { marginLeft })
  }, [])
  const toggleForm = () => {
    const marginLeft =
      formRef.current.style.marginLeft === "0px" ? -width : 0
    gsap.to(formRef.current, { marginLeft })
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
      <PageHeader
        palette={paletteID ? { name, emoji, id } : null}
        editor={true} />

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
            <div className="warn-info">{warn}</div>
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

export default Editor
