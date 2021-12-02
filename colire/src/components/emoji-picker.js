import { h } from 'preact'
import { emojiList } from '@utils/constants'
import './css/emoji-picker.css'

const EmojiPicker = ({ style, handleSelectEmoji }) => {

  const list = emojiList.map(e => {
    return (
      <div
        className='emoji'
        onClick={() => handleSelectEmoji(e)}
      >
        {e}
      </div>
    )
  })

  return (
    <div className='emoji-picker' style={style}>
      {list}
    </div>
  )
}

export default EmojiPicker
