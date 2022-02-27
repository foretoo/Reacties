import { h } from "preact"
import { ColorBox, withMore } from "@components"

const PaletteListContent = ({ colors, activeLevel, handleCopy }) => (
  colors.map(color => (
    <ColorBox
      key={color.id}
      id={color.id}
      name={color.name}
      level={activeLevel}
      contentClass=" palette"
      {...color.levels[(activeLevel / 100) - 1]}
      handleCopy={handleCopy} />
  ))
)

export default withMore(PaletteListContent)
