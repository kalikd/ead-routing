import React from 'react'
function Counter(props) {
    const [count, setCount] = React.useState(0)

    function increment() {
        setCount(count + 1)
    }

    return props.children(count, increment)
}

export default Counter;