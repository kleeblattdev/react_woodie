//library import
import { Link } from 'react-router-dom';

//image import
import Logo from '../../images/Logo.png';

//Navigationsbar auf jeder Seite
const Navigation = () => {
    return ( 
        <nav>
            <img src={Logo} alt="woodies logo" />
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
        </nav>
    )
}

export default Navigation;