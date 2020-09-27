import { h } from 'preact'
import { connect } from 'react-redux'
import CartItem from './cart-item'
import './css/cart-list.css'

const CartList = ({ books }) => {

  const cartList = books.map(book => {
    return <CartItem key={book.id} book={book} />
  })

  return (
    <main class='cart-container'>
      <div class='cart-container-head'>Your order</div>
      <div class='cart-list-head'>
        <span class='cart-list-head-title'>TITLE</span>
        <span class='cart-list-head-count'>COUNT</span>
        <span class='cart-list-head-price'>PRICE</span>
      </div>
      <ul class='cart-list'>{cartList}</ul>
    </main>
  )
}

const mapStateToProps = state => state.cart

export default connect(mapStateToProps)(CartList)
