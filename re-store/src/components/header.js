import { h } from 'preact'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/header.css'

const Header = ({ num, sum }) => {
  return (
    <nav class='navigation'>
      <Link to='/'>boo§+o</Link>
      <div class='cart-info'>
        <Link to='/cart'><div class='cart-ellipse'></div></Link>
        <div>Cart—<b>{ num }</b><i>—{ sum }£</i></div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => state.cart

export default connect(mapStateToProps)(Header)
