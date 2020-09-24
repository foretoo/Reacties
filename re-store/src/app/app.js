import { h, Fragment } from 'preact'
import { Route } from 'react-router-dom'
import Loader from '../components/loader'
import Header from '../components/header'
import Home from '../pages/home'
import Cart from '../pages/cart'

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
