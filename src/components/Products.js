import { createSearchParams, Link, useSearchParams } from "react-router-dom";
import list from "../data";

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const newParams = createSearchParams()
    newParams.set('color', 'red')
    newParams.set('price', 200)
    return <>
        <h1>Products-{searchParams.get('color')}</h1>
        <button onClick={() => setSearchParams({ price: '123' })}>Sasti Products</button>
        <button onClick={() => setSearchParams({ color: 'redish' })}>Redish Products</button>
        <ul>
            {list.map(itm => <li><Link to={`/product/${itm.id}`}>{itm.name}</Link></li>)}
        </ul>

    </>

}