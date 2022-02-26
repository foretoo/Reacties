import { h, Fragment } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { useHistory } from "react-router-dom"
import { useCtx } from "@utils/hooks"
import { getID } from "@utils/helpers"
import { Button } from "@assets"
import { EmojiPicker } from "@components"

const PaletteEditorNameForm = ({ paletteID }) => {

  const { state: { palettes, editor }, dispatch } = useCtx()
  let name, palette, emoji
  if (paletteID) ({ name, palette, emoji } = editor.toEdit)
  else ({ name, palette, emoji } = editor.toCreate)

  const initForm = {
    displayEmojis: false,
    emojisOffset:  { x: 0, y: 0 },
    validName:     true,
    warnText:      "",
  }
  const [ formState, setFormState ] = useState(initForm)
  const emojiButtonRef = useRef()
  const history = useHistory()

  useEffect(() => {
    const { offsetLeft: x, offsetTop: y } = emojiButtonRef.current
    setFormState((prev) => ({ ...prev, emojisOffset: { x, y }}))
    window.addEventListener("click", handleClick, false)
    return () => window.removeEventListener("click", handleClick)
  }, [])
  const handleClick = (e) => {
    setFormState((prev) => {
      if (prev.displayEmojis && !e.path.includes(emojiButtonRef.current)) {
        return { ...prev, displayEmojis: !prev.displayEmojis }
      }
      return prev
    })
  }

  const handleChangePaletteName = (e) => {
    const name = e.target.value
    if (name) {
      const validName = true
      const warnText = ""
      setFormState((prev) => ({ ...prev, validName, warnText }))
    }

    dispatch({
      type:    "CHANGE_PALETTE_NAME",
      payload: name,
      paletteID,
    })
  }
  const handleDisplayFormState = () => {
    setFormState((prev) => ({ ...prev, displayEmojis: !prev.displayEmojis }))
  }
  const handleSelectEmoji = (emoji) => {
    handleDisplayFormState()
    dispatch({
      type:    "CHANGE_PALETTE_EMOJI",
      payload: emoji,
      paletteID,
    })
  }
  const handleSavePalette = () => {
    if (!palette.length) {
      setFormState((prev) => {
        const warnText = "Palette is empty\n"
        return { ...prev, warnText }
      })
    }
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
        dispatch({ type: "SAVE_PALETTE", paletteID })
        history.push("/")
      }
      else
        setFormState((prev) => {
          const validName = false
          const warnText = "Palette name should be unique\n"
          return { ...prev, validName, warnText }
        })
    }
    else
      setFormState((prev) => {
        const validName = false
        const warnText = "Enter palette name\n"
        return { ...prev, validName, warnText }
      })
  }
  const handleClearPalette = () => {
    dispatch({
      type: "CLEAR_PALETTE",
      paletteID,
    })
  }

  return (
    <>
      <div className="palette-name-form">
        <EmojiPicker
          style={{
            top:        formState.emojisOffset.y,
            left:       formState.emojisOffset.x,
            visibility: formState.displayEmojis ? "visible" : "hidden",
          }}
          handleSelectEmoji={handleSelectEmoji} />
        <div className="input-palette-name">
          <input value={name} type="text" placeholder="Enter palette name..." onChange={handleChangePaletteName} />
          <div ref={emojiButtonRef} onClick={handleDisplayFormState}>{emoji}</div>
        </div>
        <div className="warn-info" >
          {formState.warnText}
        </div>
        <Button name="Save"
          type="idle"
          onClick={handleSavePalette} />
        <Button name="Clear"
          type="idle"
          onClick={handleClearPalette} />
      </div>
    </>
  )
}

export default PaletteEditorNameForm