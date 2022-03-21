import { createSearchParams, useParams, useSearchParams } from "react-router-dom";

function Product() {
    const { prodId } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    const params = createSearchParams()

    params.set('size', 'XL')
    params.set('color', 'red')



    return (<>
        <h1>Product-{prodId}</h1>
        {/* <button onClick={() => { searchParams.set('size', 'XL'); setSearchParams(searchParams) }}>XL</button>
        <button onClick={() => { searchParams.set('color', 'red'); setSearchParams(searchParams) }}>Redish</button> */}
        <button onClick={() => { params.append('size', 'xl'); setSearchParams(params) }}>XL</button>
        <button onClick={() => { params.append('color', 'red'); setSearchParams(params) }}>Redish</button>
        <h1>{searchParams && searchParams.get('price')}</h1>
        <button onClick={() => setSearchParams({})}>Reset</button>
    </>)
}
export default Product;