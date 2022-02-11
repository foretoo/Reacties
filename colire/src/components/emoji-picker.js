import { h } from "preact"
import { emojiList } from "@utils/constants"
import "./css/emoji-picker.css"

const EmojiPicker = ({ style, handleSelectEmoji }) => {

  const list = emojiList.map((e) => (
    <li
      className="emoji"
      onClick={() => handleSelectEmoji(e)}
    >
      {e}
    </li>
  ))

  return (
    <ul className="emoji-picker" style={style}>
      {list}
    </ul>
  )
}

export default EmojiPicker
