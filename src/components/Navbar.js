import { Link } from 'react-router-dom'

import home1 from '../Assets/home1.png'
import menu1 from '../Assets/menu1.png'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link to="/">
        <img src={home1} alt="home navbar" />
      </Link>
      <Link to="/menu">
        <img src={menu1} alt="menu navbar" />
      </Link>
    </nav>
  )
}
