import { h, Fragment } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { useEditor, useEditorDispatch } from "@app/ctx"
import { EmojiPicker } from "@components"

const EditorNameForm = ({ target, setWarn }) => {

  const editor = useEditor()
  const dispatch = useEditorDispatch()
  const { name, emoji } = editor[target]
  const [ formState, setFormState ] = useState({ displayEmojis: false, emojisOffset: { x: 0, y: 0 }})
  const emojiButtonRef = useRef()

  useEffect(() => {
    const { offsetLeft: x, offsetTop: y } = emojiButtonRef.current
    setFormState((prev) => ({ ...prev, emojisOffset: { x, y }}))
    window.addEventListener("click", handleClick, false)
    return () => window.removeEventListener("click", handleClick)
  }, [])
  const handleClick = (e) => {
    setFormState((prev) => (
      prev.displayEmojis && !e.path.includes(emojiButtonRef.current)
        ? { ...prev, displayEmojis: !prev.displayEmojis }
        : prev
    ))
  }
  const handleDisplayFormState = () => {
    setFormState((prev) => ({ ...prev, displayEmojis: !prev.displayEmojis }))
  }

  const handleChangePaletteName = (e) => {
    const name = e.target.value
    if (name.trim()) setWarn("")
    dispatch({
      type:    "CHANGE_PALETTE_NAME",
      payload: { name, target },
    })
  }
  const handleSelectEmoji = (emoji) => {
    handleDisplayFormState()
    dispatch({
      type:    "CHANGE_PALETTE_EMOJI",
      payload: { emoji, target },
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
      </div>
    </>
  )
}

export default EditorNameForm