import { h } from 'preact'
import './css/add-palette-btn.css'

const AddPaletteBtn = () => {
  return (
    <div className='add-palette-btn-container'>
      <input className='add-palette-btn' type='button' value='CREATE PALETTE'></input>
      <svg className="add-palette-btn-bg" width="250" height="160" viewBox="0 0 250 160" xmlns="http://www.w3.org/2000/svg">
        <symbol
          id="rect"
          width="50"
          height="40"
          viewbox="0 0 50 40"
          fill="white" >
          <rect
            x="0"
            y="0"
            width="50"
            height="40"
            rx="5" />
        </symbol>

        <use href="#rect" />
        <use href="#rect" x="50" />
        <use href="#rect" x="100" />
        <use href="#rect" x="150" />
        <use href="#rect" x="200" />

        <use href="#rect" y="40" />
        <use href="#rect" x="50" y="40" />
        <use href="#rect" x="100" y="40" />
        <use href="#rect" x="150" y="40" />
        <use href="#rect" x="200" y="40" />

        <use href="#rect" y="80" />
        <use href="#rect" x="50" y="80" />
        <use href="#rect" x="100" y="80" />
        <use href="#rect" x="150" y="80" />
        <use href="#rect" x="200" y="80" />

        <use href="#rect" y="120" />
        <use href="#rect" x="50" y="120" />
        <use href="#rect" x="100" y="120" />
        <use href="#rect" x="150" y="120" />
        <use href="#rect" x="200" y="120" />
      </svg>
    </div>
  )
}

export default AddPaletteBtn
