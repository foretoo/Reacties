import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { Context } from '../app/context'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const SortableColorBox = ({ name, color, lum }) => {

  const { dispatch } = useContext(Context)
  const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: name })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color,
    zIndex: isDragging ? 100 : 'auto'
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} class={'color-box palette' + lum}>

      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"
        fill="none"
        class='icon-trash'
        onClick={() => dispatch({ type: 'DELETE_COLOR', payload: color })}
      >
        <path d="M18.5 7.5H11.5M14.5 14.5H12C10.9691 14.5 10.1744 14.2639 9.77816 14.1161M9.77816 14.1161L9.5 10.5C9.5 10.5 10.5 11.5 12 11.5H18C19.5 11.5 20.5 10.5 20.5 10.5L19.5 23.5H10.5L9.77816 14.1161Z" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div class='color-box-info'>
        <div class='color-box-info-name'>{name}</div>
      </div>

    </div>
  )
}

export default SortableColorBox
