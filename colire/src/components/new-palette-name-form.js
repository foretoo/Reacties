import { h, Fragment, createRef } from "preact"
import { useState, useContext, useEffect, useRef } from "preact/hooks"
import { useHistory } from "react-router-dom"
import { Context } from "@app"
import { Button } from "@assets"
import { EmojiPicker } from "@components"

const NewPaletteNameForm = () => {

  const { state, dispatch } = useContext(Context)
  const { palettes, custom: { paletteName, emoji }} = state

  const initForm = {
    displayEmojis: false,
    emojisOffset:  { x: 0, y: 0 },
    validName:     true,
    warnText:      "",
  }
  const [ formState, setFormState ] = useState(initForm)
  const inputRef = useRef()
  const divRef = useRef()
  const emojiButtonRef = useRef()
  const history = useHistory()

  useEffect(() => {
    const { offsetLeft: x, offsetTop: y } = emojiButtonRef.current
    setFormState((formState) => ({ ...formState, emojisOffset: { x, y }}))
    window.addEventListener("click", handleClick, false)
  }, [])

  const handleClick = (e) => {
    setFormState(prev => {
      if (prev.displayEmojis && !e.path.includes(emojiButtonRef.current)) {
        return { ...prev, displayEmojis: !prev.displayEmojis }
      }
      return prev
    })
  }

  let formClass = "palette-name-form"
  if (!formState.validName) {
    formClass += " warn"
  }

  const handleChangePaletteName = (e) => {
    const name = e.target.value
    if (name) {
      const validName = true
      const warnText = ""
      setFormState((formState) => ({ ...formState, validName, warnText }))
    }

    divRef.current.innerHTML = name
    inputRef.current.style.width = divRef.current.clientWidth + "px"
    const emojisOffset = emojiButtonRef.current.offsetLeft + "px"
    setFormState((formState) => ({ ...formState, emojisOffset }))

    dispatch({
      type:    "CHANGE_PALETTE_NAME",
      payload: name,
    })
  }
  const handleDisplayformState = () => {
    setFormState((formState) => ({ ...formState, displayEmojis: !formState.displayEmojis }))
  }
  const handleSelectEmoji = (emoji) => {
    handleDisplayformState()
    dispatch({
      type:    "CHANGE_PALETTE_EMOJI",
      payload: emoji,
    })
  }
  const handleSavePalette = () => {
    if (paletteName.trim()) {

      const paletteId = paletteName
        .replace(/\s\s+/g, " ")
        .trim()
        .toLowerCase()
        .replace(/ /g, "-")

      if (!palettes.some((p) => p.id === paletteId)) {
        dispatch({ type: "SAVE_PALETTE" })
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
    })
  }

  return (
    <>
      <div class={formClass}>
        <EmojiPicker
          style={{
            top:  formState.emojisOffset.y,
            left: formState.emojisOffset.x,
            visibility: formState.displayEmojis ? "visible" : "hidden"
          }}
          handleSelectEmoji={handleSelectEmoji} />
        <div class="input-palette-name">
          <input ref={inputRef} value={paletteName} type="text" placeholder="Enter palette name..." onChange={handleChangePaletteName} />
          <div ref={emojiButtonRef} onClick={handleDisplayformState}>{emoji}</div>
        </div>
        <div class="warn-info">{formState.warnText}</div>
        <Button name="Save"
          type="idle"
          onClick={handleSavePalette}
          style={{ marginLeft: "1rem" }} />
        <Button name="Clear"
          type="idle"
          onClick={handleClearPalette} />
      </div>
      <div class="hiddenHelper" ref={divRef}></div>
    </>
  )
}

export default NewPaletteNameForm
