import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'
import { connect } from 'react-redux'
import { Context } from './context'
import Loader from './loader'

import './app.css'

const App = ({ str }) => {
  const { cnx } = useContext(Context)
  return (
    <>
      <div>{str.concat(' ', cnx)}</div>
      <Loader />
    </>
  )
}

const mapStateToProps = state => ({ str: state })

export default connect(mapStateToProps)(App)
