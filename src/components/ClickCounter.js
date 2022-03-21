import { useState } from "react";
import WithCounterHOC from "./withCounterHOC";

function ClickCounter(props) {

    return (<>
        <h1>Score:{props.score}</h1>
        <button onClick={props.increment}>You clicked me {props.count} time</button>
    </>)
}

export default WithCounterHOC(ClickCounter, 5);