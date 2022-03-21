
function HoverCounterTwo(props) {

    return (<>
        <h1 onMouseOver={props.increment}>You hovered me {props.count} times</h1>
    </>)
}

export default HoverCounterTwo;