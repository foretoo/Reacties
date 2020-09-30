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

const prepareCartChange = (state, id) => {
  const newCartBooks = state.cart.books
  const idx = newCartBooks.findIndex(book => book.id === id)
  return { newCartBooks, idx }
}

const reducer = (state = initialState, action) => {
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

    case 'ADD_CART_BOOK': {
      const { newCartBooks, idx } = prepareCartChange(state, action.payload)
      let newBook
      if (idx >= 0) {
        newBook = newCartBooks[idx]
        newBook.count++
        newCartBooks.splice(idx, 1, newBook)
      }
      else {
        newBook = state.books.filter(book => book.id === action.payload)[0]
        newCartBooks.push({...newBook, count: 1})
      }
      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: state.cart.num + 1,
          sum: state.cart.sum + newBook.price
        }
      }
    }

    case 'INC_CART_BOOK': {
      const { newCartBooks, idx } = prepareCartChange(state, action.payload)
      const newBook = newCartBooks[idx]
      newBook.count++
      newCartBooks.splice(idx, 1, newBook)
      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: state.cart.num + 1,
          sum: state.cart.sum + newBook.price
        }
      }
    }

    case 'DEC_CART_BOOK': {
      const { newCartBooks, idx } = prepareCartChange(state, action.payload)
      const newBook = newCartBooks[idx]
      if (newBook.count === 1) {
        newCartBooks.splice(idx, 1)
      }
      else {
        newBook.count--
        newCartBooks.splice(idx, 1, newBook)
      }
      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: state.cart.num - 1,
          sum: state.cart.sum - newBook.price
        }
      }
    }

    case 'DEL_CART_BOOK': {
      const { newCartBooks, idx } = prepareCartChange(state, action.payload)
      const [ price, count ] = [ newCartBooks[idx].price, newCartBooks[idx].count ]
      newCartBooks.splice(idx, 1)
      return {
        ...state,
        cart: {
          books: newCartBooks,
          num: state.cart.num - count,
          sum: state.cart.sum - price*count
        }
      }
    }

    default:
      return state
  }
}
export default reducer
