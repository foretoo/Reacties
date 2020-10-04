const reduceLib = (lib, { type, payload }) => {

  if (!lib) {
    lib = {
      loading: true,
      books: [],
      error: null
    }
  }

  switch (type) {
    case 'CLEAR_BOOKS':
      return {
        loading: true,
        books: [],
        error: null
      }
    case 'FETCH_BOOKS_SUCCES':
      return {
        loading: false,
        books: payload,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        loading: false,
        books: [],
        error: payload
      }
    default:
      return lib
  }
}

export default reduceLib
