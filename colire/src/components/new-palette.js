import { h, Fragment } from 'preact'
import { useState, useEffect, useContext } from 'preact/hooks'
import { Context } from '../app/context'
import chroma from 'chroma-js'
import { DndContext, closestCenter, PointerSensor, useSensor } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import SortableColorBox from './sortable-color-box'
import './css/color-box.css'


const NewPalette = () => {

  const { state, dispatch } = useContext(Context)
  const { palette } = state.custom
  const names = []

  const paletteList = palette.map(c => {
    const { name, color } = c
    names.push(name)
    const lumClass = chroma(color).luminance() < 0.333 ? ' light' : ' dark'
    return <SortableColorBox key={name} id={name} name={name} color={color} lum={lumClass} />
  })

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5,
    }
  })

  const handleDragEnd = ({active, over}) => {
    if (active.id !== over.id) {
      const oldIndex = names.indexOf(active.id)
      const newIndex = names.indexOf(over.id)
      const newOrder = arrayMove(names, oldIndex, newIndex)

      dispatch({
        type: 'CHANGE_PALETTE',
        payload: newOrder
      })
    }
  }

  return (
    <DndContext sensors={[pointerSensor]} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={names}>
        {paletteList}
      </SortableContext>
    </DndContext>
  )

}

export default NewPalette
