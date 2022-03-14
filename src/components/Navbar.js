import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return <>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li><NavLink to={'/categories'}>Categories</NavLink></li>
        </ul>
    </>
}
export default Navbar;