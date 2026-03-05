import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div>
                <img src='src/assets/images/gamecompare-logo.png' />
            </div>
            <div>
                <NavLink to="comparatore">COMPARATORE</NavLink>
                <NavLink to="preferiti">PREFERITI</NavLink>
            </div>
        </nav>
    )
}