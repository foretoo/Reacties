import { h } from 'preact'
import './css/add-palette-btn.css'

const AddPaletteBtn = () => {
  return (
    <div className='add-palette-btn-container'>
      <input type='button' className='add-palette-btn' value='CREATE PALETTE'></input>
    </div>
  )
}

export default AddPaletteBtn
