import { h, Fragment } from 'preact'

const BookItem = ({ book }) => {

  const { title, author } = book

  return (
    <>
      <div>{title}</div>
      <div>{author}</div>
    </>
  )
}
export default BookItem
