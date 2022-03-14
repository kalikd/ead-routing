import { useState, useEffect } from 'react'
import { Button } from 'antd';
function Header() {

    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])
    function increment() {
        setProducts([])
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    /**
     * Feature A
     */
    useEffect(() => {
        console.log('useEffect called!')
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(res => {
            setProducts(res)
        })
        return () => {
            clearInterval()
        }
    }, [count])

    return (<>
        <h2>Product List</h2>
        <ul>
            {products && products.map(itm => <li key={itm.id}>{itm.title}</li>)}
        </ul>
        <h2>Counter:</h2>
        <Button type="primary" size='large' onClick={increment}> +</Button>
        <h1>{count}</h1>
        <Button type="danger" size='large' onClick={decrement}>-</Button>
    </>)
}

export default Header;