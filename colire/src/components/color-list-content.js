import { h, Fragment } from "preact"
import { ColorBox } from "@components"

const ColorListContent = ({ colors, handleCopy }) => {

  const colorsList = []
  for (const level in colors) {
    colorsList.push(
      <ColorBox
        key={level}
        id={level}
        contentClass=" color"
        {...colors[level]}
        handleCopy={handleCopy} />,
    )
  }

  return (
    <>
      {colorsList}
      <div class="color-box back">
        <button class="color-box-button" onClick={() => history.back()}>GO BACK</button>
      </div>
    </>
  )
}

export default ColorListContent
