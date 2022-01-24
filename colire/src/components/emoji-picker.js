import { h } from "preact"
import { emojiList } from "@utils/constants"
import "./css/emoji-picker.css"

const EmojiPicker = ({ style, handleSelectEmoji }) => {

  const list = emojiList.map((e) => (
    <ul
      className="emoji"
      onClick={() => handleSelectEmoji(e)}
    >
      {e}
    </ul>
  ))

  return (
    <li className="emoji-picker" style={style}>
      {list}
    </li>
  )
}

export default EmojiPicker
