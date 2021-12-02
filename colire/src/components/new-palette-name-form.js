import { h, Fragment } from 'preact'
import { useState, useContext, useEffect, useRef } from 'preact/hooks'
import { useHistory } from 'react-router-dom'
import { Context } from '@app'
import EmojiPicker from './emoji-picker'
import './css/new-palette-page.css'

const NewPaletteNameForm = () => {

  const { state, dispatch } = useContext(Context)
  const { palettes, custom: { paletteName, emoji } } = state
  const [ formState, setFormState ] = useState({ displayEmojis: false, emojisOffset: 0, validName: true, warnText: '' })
  const inputRef = useRef()
  const divRef = useRef()
  const emojiButtonRef = useRef()
  const history = useHistory()

  useEffect(() => {
    const emojisOffset = emojiButtonRef.current.offsetLeft + 'px'
    setFormState(formState => ({ ...formState, emojisOffset }))
  }, [])

  let formClass = 'palette-name-form'
  if (!formState.validName) {
    formClass += ' warn'
  }

  const handleChangePaletteName = e => {
    const name = e.target.value
    if (name) {
      const validName = true
      const warnText = ''
      setFormState(formState => ({ ...formState, validName, warnText }))
    }

    divRef.current.innerHTML = name
    inputRef.current.style.width = divRef.current.clientWidth + 'px'
    const emojisOffset = emojiButtonRef.current.offsetLeft + 'px'
    setFormState(formState => ({ ...formState, emojisOffset }))

    dispatch({
      type: 'CHANGE_PALETTE_NAME',
      payload: name.replace(/\s\s+/g, ' ').trim()
    })
  }
  const handleDisplayformState = () => {
    const displayEmojis = !formState.displayEmojis
    setFormState(formState => ({ ...formState, displayEmojis }))
  }
  const handleSelectEmoji = emoji => {
    handleDisplayformState()
    dispatch({
      type: 'CHANGE_PALETTE_EMOJI',
      payload: emoji
    })
  }
  const handleSavePalette = () => {
    if (paletteName) {
      if (!palettes.some(p => p.id === paletteName.toLowerCase().replace(/ /g, '-'))) {
        dispatch({ type: 'SAVE_PALETTE' })
        history.push('/')
      }
      else {
        const validName = false
        const warnText = 'Palette name should be unique'
        setFormState(formState => ({ ...formState, validName, warnText }))
      }
    }
    else {
      const validName = false
      const warnText = 'Enter palette name'
      setFormState(formState => ({ ...formState, validName, warnText }))
    }
  }

  return (
    <>
      <div class={formClass}>
        <EmojiPicker
          style={{ left: formState.emojisOffset, visibility: formState.displayEmojis ? 'visible' : 'hidden' }}
          handleSelectEmoji={handleSelectEmoji}
        />
        <div class='input-palette-name'>
          <input ref={inputRef} value={paletteName} type='text' placeholder='Enter palette name...' onChange={handleChangePaletteName} />
          <div ref={emojiButtonRef} onClick={handleDisplayformState}>{emoji}</div>
        </div>
        <div class='warn-info'>{formState.warnText}</div>
        <button onClick={handleSavePalette}>Save palette</button>
      </div>
      <div class='hiddenHelper' ref={divRef}></div>
    </>
  )
}

export default NewPaletteNameForm
