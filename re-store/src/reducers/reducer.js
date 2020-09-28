const initialState = {
  loading: true,
  books: [],
  error: null,
  cart: {
    books: [
      {
        id: 1,
        title: 'Production-ready Microservices',
        count: 1,
        price: 129,
        imgName: 'prm' },
      {
        id: 2,
        title: 'Realese It!',
        count: 1,
        price: 71,
        imgName: 'rli' }
    ],
    num: 2,
    sum: 200,
  }
}

const reducer = (state = initialState, action) => {
  let newCartNum, newCartSum, newCartBooks, newCartBook, idx
  switch (action.type) {
    case 'CLEAR_BOOKS':
      return {
        ...state,
        loading: true,
        books: [],
        error: null
      }
    case 'FETCH_BOOKS_SUCCES':
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        loading: false,
        books: [],
        error: action.payload
      }

    case 'ADD_CART_BOOK':
      newCartNum = state.cart.num
      newCartSum = state.cart.sum
      newCartBooks = state.cart.books
      idx = newCartBooks.findIndex(book => book.id === action.payload.id)

      if (idx >= 0) {
        newCartBook = {...newCartBooks[idx], count: ++newCartBooks[idx].count}
        newCartBooks.splice(idx, 1, newCartBook)
      }
      else {
        newCartBooks.push({...action.payload, count: 1})
      }
      newCartNum++
      newCartSum += action.payload.price

      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: newCartNum,
          sum: newCartSum
        }
      }

    case 'INC_CART_BOOK':
      newCartNum = state.cart.num
      newCartSum = state.cart.sum
      newCartBooks = state.cart.books.map(book => {
        if (book.id === action.payload) {
          book.count++
          newCartNum++
          newCartSum += book.price
        }
        return book
      })
      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: newCartNum,
          sum: newCartSum
        }
      }
    case 'DEC_CART_BOOK':
      newCartNum = state.cart.num
      newCartSum = state.cart.sum
      newCartBooks = state.cart.books.map(book => {
        if (book.id === action.payload) {
          book.count--
          newCartNum--
          newCartSum -= book.price
        }
        return book
      })
      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: newCartNum,
          sum: newCartSum
        }
      }
    case 'DEL_CART_BOOK':
      newCartNum = state.cart.num
      newCartSum = state.cart.sum
      newCartBooks = state.cart.books.filter(book => {
        if (book.id === action.payload) {
          newCartNum -= book.count
          newCartSum -= book.price * book.count
        }
        return book.id !== action.payload
      })
      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: newCartNum,
          sum: newCartSum
        }
      }
    default:
      return state
  }
}
export default reducer
