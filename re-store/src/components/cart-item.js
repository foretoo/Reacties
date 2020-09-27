import { h } from 'preact'
import './css/cart-item.css'

const CartItem = ({ book }) => {
  return (
    <li class='cart-item'>
      <span class='cart-item-title'>{book.title}</span>
      <div class='cart-item-count-container'>
        <button>-</button>
        <span class='cart-item-count'>{book.count}</span>
        <button>+</button>
      </div>
      <span class='cart-item-price'>{book.price}£</span>
      <button>x</button>
    </li>
  )
}

export default CartItem
