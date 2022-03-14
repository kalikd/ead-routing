import { NavLink, Outlet } from "react-router-dom";

export default function Categories() {
    return <>

        <h1>Cateogries</h1>

        <ul>
            <li><NavLink to='kids' >Kids</NavLink></li>
            <li><NavLink to='electronics' >Electronics</NavLink></li>
        </ul>
        <div> <Outlet /></div>

    </>
}