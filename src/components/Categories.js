import { Link, Outlet } from "react-router-dom";

function Categories() {
    return (<>
        <h1>Categories</h1>
        <Link to={'books'}>Books</Link>
        <Link to={'pens'}>Pens</Link>
        <Outlet />
    </>)
}
export default Categories;