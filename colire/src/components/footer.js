import { h } from 'preact'
import './css/footer.css'

const Footer = ({ className, children }) => {
  return (
    <footer className={className}>
      {children}
    </footer>
  )
}

export default Footer
