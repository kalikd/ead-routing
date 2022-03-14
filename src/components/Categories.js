import { NavLink, Outlet } from "react-router-dom";
function Categories() {
    return (<>
        <h1>Categories</h1>

        <ul>
            <li><NavLink to='books'>Books</NavLink></li>
            <li><NavLink to='pens'>Pens</NavLink></li>
        </ul>
        <Outlet />
    </>)
}
export default Categories;