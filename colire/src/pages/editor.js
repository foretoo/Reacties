import { h, Fragment } from "preact"
import { useState, useRef, useLayoutEffect } from "preact/hooks"
import { useHistory, useParams } from "react-router-dom"
import gsap from "gsap"
import {
  useAgent,
  useEditor,
  useEditorDispatch,
  usePalettes,
  usePalettesDispatch,
} from "@app/ctx"
import { getID } from "@utils/helpers"
import { Button } from "@assets"
import {
  EditorPalette,
  PageHeader,
  EditorColorForm,
  EditorNameForm,
} from "@components"
import "./css/palette-editor.css"

const Editor = () => {

  const { paletteID } = useParams()
  const editor = useEditor()
  const dispatchEditor = useEditorDispatch()
  const { palettes } = usePalettes()
  const palette = palettes.find((palette) => palette.id === paletteID)

  if (paletteID && !editor.toEdit.id) {
    dispatchEditor({
      type:    "INIT_EDIT_PALETTE",
      payload: palette,
    })
    return null
  }

  const history = useHistory()
  const target = paletteID ? "toEdit" : "toCreate"
  const dispatchPalettes = usePalettesDispatch()
  const { agent } = useAgent()

  const { colors, name, emoji, id } = editor[target]
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
    if (!colors.length) setWarn("Palette is empty")
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
        dispatchEditor({
          type:    "SAVE_PALETTE",
          payload: target,
        })
        dispatchPalettes({
          type:    "SAVE_PALETTE",
          payload: { colors, name, emoji, id },
        })
        history.push( paletteID ? `/${curPaletteID}/` : `/` )
      }
      else setWarn("Palette name should be unique")
    }
    else setWarn("Enter palette name")
  }
  const handleClearPalette = () => {
    dispatchEditor({
      type:    "CLEAR_PALETTE",
      payload: target,
    })
  }

  return (
    <>
      <PageHeader
        palette={paletteID ? palette : null}
        editor={true} />

      <main className="edit-palette-container">

        <aside ref={formRef} className="edit-palette-form">
          <EditorNameForm target={target} setWarn={setWarn} />
          <EditorColorForm target={target} />
        </aside>

        <section className="edit-palette-view">

          <div className="edit-palette-menu">
            <Button name="🌈"
              type="minor"
              onClick={toggleForm} />
            <div className="warn-info">{warn}</div>
            <Button name="Save"
              type="idle"
              size={33}
              onClick={handleSavePalette} />
            <Button name="Clear"
              type="idle"
              size={33}
              onClick={handleClearPalette} />
          </div>

          <div className="edit-palette-content">
            <EditorPalette target={target} />
          </div>

        </section>

      </main>
    </>
  )
}

export default Editor
