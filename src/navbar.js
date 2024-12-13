import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dont waste time</h1>
            <Link to="/"><li>home</li></Link>
            <Link to="/create"><li>new blog</li></Link>
          
            

        </nav>
     );
}
 
export default Navbar;