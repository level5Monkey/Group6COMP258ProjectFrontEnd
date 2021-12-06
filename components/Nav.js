import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <div>
      <nav className={navStyles.nav}>
        <ul className={navStyles.navUl}>
          <li className={navStyles.navLiA}>
            <Link href='/'>Home</Link>
          </li>
          <li className={navStyles.navLiA}>
            <Link href='/history'>History</Link>
          </li>
          <li className={navStyles.navLiA}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}