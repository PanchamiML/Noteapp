import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
    return ( 
        <div className="navbar">
           <div className='heading'>NOTES</div>
            <br></br>
            <i>Happy day</i>
            <div className='pagelink'>
            <Link to="/" className='pagelink1'>Home</Link>
            <Link to="/new" className='pagelink1'>New</Link>
            </div>
        </div>
     );
}
 
export default Navbar;