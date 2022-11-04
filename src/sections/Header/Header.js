import {Link} from 'react-router-dom';
import './Header.css';
import NavItem from '../../components/NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return(
<div className="navbar navbar-expand-md navbar-dark berlla-navbar">
        <div className="container">
            <Link to="/" className='nav-brand'>Berlla</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <Link to="/" className='nav-link'>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/profile" className='nav-link'>Profile</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/new-collection" className='nav-link'>New Collection</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/products" className="nav-link">All Products</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/settings" className="nav-link">Settings <FontAwesomeIcon icon={faGear} /></Link>
                    </NavItem>
                </ul>
            </div>
        </div>
    </div>
    );
}
export default Header;