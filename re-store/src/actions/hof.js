import * as actions from './index'
import BookstoreService from '../services/bookstore-service'

const boosto = new BookstoreService()

export const fetchBooks = dispatch => {
  dispatch(actions.booksRequested())
  boosto.getBooks()
    .then(books => dispatch(actions.booksLoaded(books)))
    .catch(err => dispatch(actions.booksError(err)))
}
