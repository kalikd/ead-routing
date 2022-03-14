import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                setProducts(res)

            })

    }, [])
    const result = products.
        map(itm => <Link to={'/product/' + itm.id}>{itm.title}</Link>)
    return (<>
        <h1>Products</h1>
        <div>
            {result && result}

        </div>

    </>)
}
export default Products;