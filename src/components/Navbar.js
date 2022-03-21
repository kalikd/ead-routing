import { Link, NavLink } from "react-router-dom";
import NewComponent from "./CenteredComponentHOC";


function Navbar() {
    return (<>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='categories'>Categories</NavLink></li>
            <li><NavLink to='products'>Products</NavLink></li>
            <li><NavLink to='signup'>Signup</NavLink></li>
            <li><NavLink to='counters'>Counters</NavLink></li>
        </ul>
    </>)
}
export default NewComponent(Navbar);