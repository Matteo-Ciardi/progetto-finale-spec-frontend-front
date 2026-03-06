import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/gamecompare-logo.png'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <Link to='/'>
                    <img src={Logo} className='logo' alt='logo'/>
                </Link>
            </div>
            <div className='navigation-links'>
                <NavLink to="comparatore" className='nav-link'>COMPARATORE</NavLink>
                <NavLink to="preferiti" className='nav-link'>PREFERITI</NavLink>
            </div>
        </nav>
    )
}