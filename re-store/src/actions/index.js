export const booksLoaded = newBooks => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}
export const booksRequested = newBooks => {
  return {
    type: 'BOOKS_REQUESTED'
  }
}
