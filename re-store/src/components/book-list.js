import { h } from 'preact'
import BookItem from './book-item'

const BookList = ({ books }) => {

  const list = books.map( book => <li key={book.id}><BookItem book /></li> )

  return (
    <ul>
      {list}
    </ul>
  )
}
export default BookList
