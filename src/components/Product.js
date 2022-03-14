import { useNavigate, useParams } from "react-router-dom"
import list from "../data"

export default function Product() {
    const { id } = useParams()
    const navigate = useNavigate()
    return <>
        <h1>Product Details-{id}</h1>
        <button onClick={() => navigate('/')}>Go Home</button>
        {list.filter(itm => itm.id == id).map(itm => <h3>{itm.name}</h3>)}
    </>
}