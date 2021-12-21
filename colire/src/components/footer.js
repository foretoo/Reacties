import { h } from 'preact'
import './css/footer.css'

const Footer = ({ className = '', children = [] }) => {
  return (
    <footer className={'footer ' + (className && className)}>
      {children}
      <a href='githab.com/foretoo'>githab.com/foretoo</a>
    </footer>
  )
}

export default Footer
