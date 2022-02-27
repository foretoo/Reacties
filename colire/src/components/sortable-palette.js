import { h, Fragment } from "preact"
import chroma from "chroma-js"
import { DndContext, closestCenter, PointerSensor, useSensor } from "@dnd-kit/core"
import { SortableContext, arrayMove } from "@dnd-kit/sortable"
import { SortableColorBox } from "@components"
import { useCtx } from "@utils/hooks"
import "./css/color-box.css"


const SortablePalette = ({ paletteID }) => {

  const { state: { editor }, dispatch } = useCtx()
  let palette
  if (paletteID) ({ palette } = editor.toEdit)
  else ({ palette } = editor.toCreate)
  const names = []

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5,
    },
  })

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      const oldIndex = names.indexOf(active.id)
      const newIndex = names.indexOf(over.id)
      const newOrder = arrayMove(names, oldIndex, newIndex)

      dispatch({
        type:    "CHANGE_PALETTE_ORDER",
        payload: newOrder,
        paletteID,
      })
    }
  }
  const handleDeleteColor = (name) => {
    dispatch({
      type: "DELETE_COLOR",
      payload: name,
      paletteID,
    })
  }

  const paletteList = palette.map((c) => {
    const { name, color } = c
    names.push(name)
    const lumClass = chroma(color).luminance() < 0.333 ? " light" : " dark"
    return (
      <SortableColorBox
        key={name}
        name={name}
        color={color}
        lum={lumClass}
        handleDeleteColor={handleDeleteColor} />
    )
  })

  return (
    <DndContext sensors={[ pointerSensor ]} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={names}>
        {paletteList}
      </SortableContext>
    </DndContext>
  )

}

export default SortablePalette
