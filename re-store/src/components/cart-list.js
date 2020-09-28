import { h } from 'preact'
import { connect } from 'react-redux'
import CartItem from './cart-item'
import { incCartBook, decCartBook, delCartBook } from '../actions'
import './css/cart-list.css'

const CartList = ({ books, sum, incCartBook, decCartBook, delCartBook }) => {

  const cartList = books.map(book => {
    return (
      <CartItem
        key={book.id}
        book={book}
        incCartBook={() => incCartBook(book.id)}
        decCartBook={() => decCartBook(book.id)}
        delCartBook={() => delCartBook(book.id)}
      />
    )
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
      <div class='cart-container-footer'>Total price: {sum}£</div>
    </main>
  )
}

const mapStateToProps = state => state.cart
const mapDispatchToProps = dispatch => {
  return {
    incCartBook: id => dispatch(incCartBook(id)),
    decCartBook: id => dispatch(decCartBook(id)),
    delCartBook: id => dispatch(delCartBook(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
