import { h, Fragment } from "preact"
import { useHistory } from "react-router-dom"
import { ColorBox } from "@components"

const ColorListContent = ({ id, name, levels, handleCopy }) => {

  const history = useHistory()

  const colorsList = levels.map((level, i) => (
    <ColorBox
      key={`${id}-${level}`}
      name={name}
      level={(i + 1) * 100}
      contentClass=" color"
      {...level}
      handleCopy={handleCopy} />
  ))

  return (
    <>
      {colorsList}
      <div className="color-box back">
        <button className="color-box-button" onClick={history.goBack}>GO BACK</button>
      </div>
    </>
  )
}

export default ColorListContent
