import { h } from "preact"
import { ColorBox, withMore } from "@components"

const PaletteListContent = ({ colors, format, activeLevel, handleCopy }) => (
  colors.map(color => (
    <ColorBox
      key={color.id}
      id={color.id}
      name={color.name}
      format={format}
      level={activeLevel}
      contentClass=" palette"
      {...color.levels[(activeLevel / 100) - 1]}
      handleCopy={handleCopy} />
  ))
)

export default withMore(PaletteListContent)
