import { h, Fragment } from 'preact'
import { Link, Route } from 'react-router-dom'
import Home from '../pages/home'
import Cart from '../pages/cart'
import Loader from '../components/loader'

import './app.css'

const App = () => {
  return (
    <>
      <Loader />
      <header>
        <Link to='/'>Home</Link>
        /
        <Link to='/cart'>Cart</Link>
      </header>
      <Route path='/' exact component={Home}/>
      <Route path='/cart' component={Cart}/>
    </>
  )
}

export default App
