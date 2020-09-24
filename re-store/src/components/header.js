import { h } from 'preact'
import { Link } from 'react-router-dom'
import './css/header.css'

const Header = ({ cartNum }) => {
  return (
    <nav class='navigation'>
      <Link to='/'>boo§+o</Link>
      <div class='cart-info'>
        <Link to='/cart'><div class='cart-ellipse'></div></Link>
        <div>Cart—<b>{ cartNum }</b><i> items</i></div>
      </div>
    </nav>
  )
}

export default Header
