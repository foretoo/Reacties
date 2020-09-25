import { h } from 'preact'
import * as images from '../assets'
import './css/book-item.css'

const BookItem = ({ book }) => {

  const { title, author, imgName } = book
  const angel = Math.floor(Math.random()*17 - 8)
  const style = { transform: `rotate(${angel}deg)` }

  return (
    <li class='book-item'>
      <div style={style} class='book-ellipse'></div>
      <img class='book-img' src={images[imgName]} />
      <div class='book-info'>
        <p class='book-title'>{title}</p>
        <p class='book-author'>{author}</p>
      </div>
    </li>
  )
}
export default BookItem
