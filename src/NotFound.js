import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
        <h2>The page not found...........</h2>
        <h3>Please check the URL</h3>
        <Link to="/">Go to Home page</Link>
        </div>
     );
}
 
export default NotFound;