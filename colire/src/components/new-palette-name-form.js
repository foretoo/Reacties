import { h, Fragment } from "preact"
import { useState, useContext, useEffect, useRef } from "preact/hooks"
import { useHistory } from "react-router-dom"
import { Context } from "@app"
import { Button } from "@assets"
import { EmojiPicker } from "@components"

const NewPaletteNameForm = ({ paletteID }) => {

  const { state: { palettes, editor }, dispatch } = useContext(Context)
  let name, emoji
  if (paletteID) ({ toEdit: { name, emoji }} = editor)
  else ({ toCreate: { name, emoji }} = editor)

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
    setFormState((formState) => ({ ...formState, emojisOffset: { x, y }}))
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
      setFormState((formState) => ({ ...formState, validName, warnText }))
    }

    dispatch({
      type:    "CHANGE_PALETTE_NAME",
      payload: name,
      paletteID,
    })
  }
  const handleDisplayFormState = () => {
    setFormState((formState) => ({ ...formState, displayEmojis: !formState.displayEmojis }))
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
    if (name.trim()) {

      const paletteId = name
        .replace(/\s\s+/g, " ")
        .trim()
        .toLowerCase()
        .replace(/ /g, "-")

      if (paletteID) {
        if (
          paletteId === paletteID ||
          paletteId !== paletteID && !palettes.some((p) => p.id === paletteId)
        ) {
          dispatch({
            type: "SAVE_PALETTE",
            paletteID,
          })
          history.push("/")
        }
        else {
          const validName = false
          const warnText = "Palette name should be unique"
          setFormState((formState) => ({ ...formState, validName, warnText }))
        }
      }
      else if (!palettes.some((p) => p.id === paletteId)) {
        dispatch({
          type: "SAVE_PALETTE",
          paletteID,
        })
        history.push("/")
      }
      else {
        const validName = false
        const warnText = "Palette name should be unique"
        setFormState((formState) => ({ ...formState, validName, warnText }))
      }
    }
    else {
      const validName = false
      const warnText = "Enter palette name"
      setFormState((formState) => ({ ...formState, validName, warnText }))
    }
  }
  const handleClearPalette = () => {
    dispatch({
      type: "CLEAR_PALETTE",
      paletteID,
    })
  }

  const formClass = "palette-name-form" + (!formState.validName ? " warn" : "")

  return (
    <>
      <div className={formClass}>
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
        <div className="warn-info">{formState.warnText}</div>
        <Button name="Save"
          type="idle"
          onClick={handleSavePalette}
          style={{ marginLeft: "1rem" }} />
        <Button name="Clear"
          type="idle"
          onClick={handleClearPalette} />
      </div>
    </>
  )
}

export default NewPaletteNameForm
