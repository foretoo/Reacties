import { h } from 'preact'
import { connect } from 'react-redux'
import BookItem from './book-item'

const BookList = ({ books }) => {

  const list = books.map( book => <li key={book.id}><BookItem book={book} /></li> )

  return (
    <ul>
      {list}
    </ul>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(BookList)
