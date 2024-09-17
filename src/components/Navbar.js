import Home from "./Home";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import '../css/nav.css';

function NavBar(){
    return(
        <nav>
            <div class='links'>
            <Link to="/" element={<Home/>}>Home</Link>
            <br/>
            <Link to="/skills" element={<Skills/>}>Skills</Link>
            </div>
        </nav>
    )
}

export default NavBar;