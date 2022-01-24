import { h } from "preact"
import { ColorBox, withMore } from "@components"

const PaletteListContent = ({ colors, activeLevel, handleCopy }) => {

  const colorsList = []
  for (const color in colors) {
    colorsList.push(
      <ColorBox
        key={color}
        id={color}
        contentClass=" palette"
        {...colors[color][activeLevel]}
        handleCopy={handleCopy} />,
    )
  }
  return colorsList
}

export default withMore(PaletteListContent)
