import { h, Fragment } from 'preact'
import { Link, Route } from 'react-router-dom'
import Loader from '../components/loader'
import Header from '../components/header'
import Home from '../pages/home'
import Cart from '../pages/cart'
import './app.css'

const App = () => {
  return (
    <>
      <Loader />
      <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/cart' component={Cart}/>
    </>
  )
}

export default App
