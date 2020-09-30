import { h, Fragment } from 'preact'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/header.css'

const Header = ({ num, sum }) => {
  const cartInfo = num ? <><b>{ num }</b><i>—{ sum }£</i></> : <i>empty</i>
  return (
    <nav class='navigation'>
      <Link to='/'>boo§+o</Link>
      <div class='cart-info'>
        <Link to='/cart'><div class='cart-ellipse'></div></Link>
        <div>Cart—{cartInfo}</div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => state.cart

export default connect(mapStateToProps)(Header)
