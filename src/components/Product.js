import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

function Product() {
    const navigate = useNavigate()
    function goHome() {
        navigate('/')
    }

    return (<>
        <h1>Product</h1>
        <button onClick={goHome}>Go to Home</button>
    </>)
}
export default Product;