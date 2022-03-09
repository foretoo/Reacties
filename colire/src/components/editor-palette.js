import { h, Fragment } from "preact"
import chroma from "chroma-js"
// import { DndContext, closestCenter, PointerSensor, useSensor } from "@dnd-kit/core"
// import { SortableContext, arrayMove } from "@dnd-kit/sortable"
import { EditorColorBox } from "@components"
import { useEditor, useEditorDispatch } from "@app/ctx"
import { useDynamicImport, useConst } from "@utils/hooks"
import "./css/color-box.css"


const EditorPalette = ({ target }) => {

  const upload = useConst(() => import(
    /* webpackChunkName: "dnd-kit" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    "@assets/sortables"
  ))
  const names = useConst([
    "DndContext", "closestCenter", "PointerSensor", "useSensor",
    "SortableContext", "arrayMove"
  ])
  const { module } = useDynamicImport(names, upload)
  if (module) {
    const {
      DndContext, closestCenter, PointerSensor, useSensor,
      SortableContext, arrayMove
    } = module

    const editor = useEditor()
    const dispatch = useEditorDispatch()
    const { colors } = editor[target]
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
          payload: { newOrder, target },
        })
      }
    }
    const handleDeleteColor = (name) => {
      dispatch({
        type: "DELETE_COLOR",
        payload: { name, target },
      })
    }

    const paletteList = colors.map((c) => {
      const { name, color } = c
      names.push(name)
      const lumClass = chroma(color).luminance() < 0.333 ? " light" : " dark"
      return (
        <EditorColorBox
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
}

export default EditorPalette
