import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { connect } from 'react-redux'
import ErrorIdicator from './error-indicator'
import Loader from './loader'
import BookList from './book-list'
import { fetchBooks } from '../actions/hof'
import { clearBooks } from '../actions'

const BookListContainer = ({ books, loading, error, fetchBooks, clearBooks }) => {

  useEffect(() => {
    fetchBooks()
    return () => clearBooks()
  }, [])

  if (error) return <ErrorIdicator />
  else if (loading) return <Loader />
  else return <BookList books={books} />
}

const mapStateToProps = state => state.lib
const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => fetchBooks(dispatch),
    clearBooks: () => dispatch(clearBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
