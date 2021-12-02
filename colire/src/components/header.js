import { h } from 'preact'
import './css/header.css'

const Header = ({ className, children }) => {
  return (
    <header className={className}>
      {children}
    </header>
  )
}

export default Header
