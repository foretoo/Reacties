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
export const addCartBook = id => {
  return {
    type: 'ADD_CART_BOOK',
    payload: id
  }
}
export const incCartBook = id => {
  return {
    type: 'INC_CART_BOOK',
    payload: id
  }
}
export const decCartBook = id => {
  return {
    type: 'DEC_CART_BOOK',
    payload: id
  }
}
export const delCartBook = id => {
  return {
    type: 'DEL_CART_BOOK',
    payload: id
  }
}
