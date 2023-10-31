import {NavLink} from 'react-router-dom'
import homeIcon from '../assets/home-icon.svg'
import userIcon from '../assets/user-icon.svg'
import contactIcon from '../assets/contact-icon.svg'

function NavBar() {
    return(
        <nav>
            <NavLink className="nav-link" to="/"><img src={homeIcon} alt="home icon"/></NavLink>
            <NavLink className="nav-link" to="/about"><img src={userIcon} alt="about me icon"/></NavLink>
            <NavLink className="nav-link" to="/contact"><img src={contactIcon} alt="contact icon" /></NavLink>
        </nav>
    )
}

export default NavBar