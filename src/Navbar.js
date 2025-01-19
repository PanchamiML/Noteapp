import './Navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
           <div className='heading'>NOTES</div>
            <br></br>
            <i>Happy day</i>
            <div className='pagelink'>
            <a href="/" className='pagelink1'>Home</a>
            <a href="/new" className='pagelink1'>New</a>
            </div>
        </div>
     );
}
 
export default Navbar;