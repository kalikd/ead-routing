import { useState } from "react";
import NewComponent from "./CenteredComponentHOC";
import WithCounterHOC from "./withCounterHOC";

function HoverCounter(props) {

    return (<>
        <h1 onMouseOver={props.increment}>You hovered me {props.count} times</h1>
    </>)
}

export default NewComponent(WithCounterHOC(HoverCounter, 1));