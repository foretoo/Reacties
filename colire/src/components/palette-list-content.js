import { h } from "preact"
import { ColorBox, withMore } from "@components"

const PaletteListContent = ({ colors, activeLevel, handleCopy }) => {

  const colorsList = []
  for (const colorID in colors) {
    colorsList.push(
      <ColorBox
        key={colorID}
        id={colorID}
        name={colors[colorID].name}
        level={activeLevel}
        contentClass=" palette"
        {...colors[colorID].levels[(activeLevel / 100) - 1]}
        handleCopy={handleCopy} />,
    )
  }
  return colorsList
}

export default withMore(PaletteListContent)
