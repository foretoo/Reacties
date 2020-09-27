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
      <div class='cart-list-head'>Your order</div>
      <ul class='cart-list'>{cartList}</ul>
    </main>
  )
}

const mapStateToProps = state => state.cart

export default connect(mapStateToProps)(CartList)
