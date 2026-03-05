import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <Link to='/'>
                    <img src='src/assets/images/gamecompare-logo.png' className='logo' />
                </Link>
            </div>
            <div className='navigation-links'>
                <NavLink to="comparatore" className='nav-link'>COMPARATORE</NavLink>
                <NavLink to="preferiti" className='nav-link'>PREFERITI</NavLink>
            </div>
        </nav>
    )
}