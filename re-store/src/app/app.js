import { h, Fragment } from 'preact'
import { Link, Route } from 'react-router-dom'
import Home from '../pages/home'
import Card from '../pages/card'
import Loader from '../components/loader'

import './app.css'

const App = () => {
  return (
    <>
      <Loader />
      <header>
        <Link to='/home'>Home</Link>
        /
        <Link to='/card'>Card</Link>
      </header>
      <Route path='/home' component={Home}/>
      <Route path='/card' component={Card}/>
    </>
  )
}

export default App
