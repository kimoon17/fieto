import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-wrapper-1">
                <li className="navbar-list-item"><Link className="navbar-link" to="/">Home</Link></li>
                <li className="navbar-list-item"><Link className="navbar-link" to="/about">Articles</Link></li>
                <li className="navbar-list-item"><Link className="navbar-link" to="/contact">Contact</Link></li>
                <li className="navbar-list-item"><Link className="navbar-link" to="/signup">Sign Up</Link></li>
                <li className="navbar-list-item"><Link className="navbar-link" to="/login">Login</Link></li>
            </div>
        </div>
    )
}

export default Navbar;