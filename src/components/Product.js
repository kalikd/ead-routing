import { createSearchParams, useParams, useSearchParams } from "react-router-dom";

function Product() {
    const { prodId } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    const params = createSearchParams()

    params.set('size', 'XL')
    params.set('color', 'red')



    return (<>
        <h1>Product-{prodId}</h1>
        <button onClick={() => setSearchParams({ price: 'sss' })}>Expensive</button>
        <h1>{searchParams && searchParams.get('price')}</h1>
        <button onClick={() => setSearchParams({})}>Reset</button>
    </>)
}
export default Product;