export const booksLoaded = newBooks => {
  return {
    type: 'FETCH_BOOKS_SUCCES',
    payload: newBooks
  }
}
export const booksError = error => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}
export const clearBooks = () => {
  return {
    type: 'CLEAR_BOOKS'
  }
}
