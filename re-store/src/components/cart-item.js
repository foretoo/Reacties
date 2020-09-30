import { h } from 'preact'
import './css/cart-item.css'

const CartItem = ({ book, incCartBook, decCartBook, delCartBook }) => {

  const { title, count, price } = book

  return (
    <li class='cart-item'>
      <span class='cart-item-title'>{title}</span>
      <div class='cart-item-count-container'>
        <button onClick={decCartBook}>-</button>
        <span class='cart-item-count'>{count}</span>
        <button onClick={incCartBook}>+</button>
      </div>
      <span class='cart-item-price'>{price}£</span>
      <button onClick={delCartBook}>x</button>
    </li>
  )
}

export default CartItem
