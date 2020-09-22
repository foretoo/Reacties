import { h, Fragment } from 'preact'
import { connect } from 'react-redux'
import * as actions from './actions'

const App = ({ value, inc, dec, rnd }) => {
	return (
		<>
			<p>{value}</p>
			<button onClick={inc}>INC</button>
			<button onClick={dec}>DEC</button>
			<button onClick={rnd}>RND</button>
		</>
	)
}

const mapStateToProps = state => ({ value: state })

export default connect(mapStateToProps, actions)(App)
