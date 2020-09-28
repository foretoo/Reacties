import { h } from 'preact'
import { useEffect, useContext } from 'preact/hooks'
import { connect } from 'react-redux'
import { Context } from '../app/context'
import Loader from './loader'
import BookItem from './book-item'
import * as actions from '../actions'

const BookList = ({ books, loading, booksRequested, booksLoaded }) => {

  const { boosto } = useContext(Context)

  useEffect(() => {
    booksRequested()
    boosto.getBooks().then(books => booksLoaded(books))
  }, [])

  if (loading) return <Loader />

  const list = books.map(book => {
    return <BookItem key={book.id} book={book} />
  })

  return <ul>{list}</ul>
}

const mapStateToProps = ({ books, loading }) => ({ books, loading })

export default connect(mapStateToProps, actions)(BookList)
