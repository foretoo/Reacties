import { h, Fragment } from "preact"
import { ColorBox } from "@components"

const ColorListContent = ({ id, name, levels, handleCopy }) => {
  console.log(levels);

  const lightLevels = [],
        darkLevels  = []

  levels.forEach((level, i) => {
    if (i < 4)
      lightLevels.push(
        <ColorBox
          key={`${id}-${(i + 1) * 100}`}
          name={name}
          level={(i + 1) * 100}
          contentClass=" color"
          {...level}
          handleCopy={handleCopy} />
      )
    else if (i > 4)
      darkLevels.push(
        <ColorBox
          key={`${id}-${(i + 1) * 100}`}
          name={name}
          level={(i + 1) * 100}
          contentClass=" color"
          {...level}
          handleCopy={handleCopy} />
      )
  })

  return (
    <div className="color-content">
      <div className="light-levels">
        {lightLevels}
      </div>
      <div className="init-color">
        <ColorBox
          name={name}
          level={500}
          contentClass=" color"
          {...levels[4]}
          handleCopy={handleCopy} />
      </div>
      <div className="dark-levels">
        {darkLevels}
      </div>
    </div>
  )
}

export default ColorListContent
