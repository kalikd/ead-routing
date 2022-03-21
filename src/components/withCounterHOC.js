import React from 'react'
import { useState } from 'react';
function WithCounterHOC(WrappedComponent, offset) {

    // const withCounterHOC = class NewComponent extends React.Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = { count: 0 }
    //     }
    //     increment = () => {
    //         this.setState(prev => {
    //             return { count: prev.count + 5 }
    //         })
    //     }
    //     render() {
    //         return (<>
    //             <WrappedComponent count={this.state.count} increment={this.increment} />
    //         </>)
    //     }
    // }

    const WithCounterHOC = function (props) {
        const [count, setCount] = React.useState(0)

        function increment() {
            setCount(count + offset)
        }

        return (<>
            <WrappedComponent count={count} increment={increment} {...props} />
        </>)
    }


    return WithCounterHOC

}

export default WithCounterHOC;