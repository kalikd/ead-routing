import ClickCounter from "./ClickCounter";
import ClickCounterTwo from "./ClickCounterTwo";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import HoverCounterTwo from "./HoverCounterTwo";

function Counters() {
    return (<>
        <div>
            <h1>Counters</h1>
            {/* <ClickCounter score={30} />
            <HoverCounter /> */}
            <Counter>
                {(count, increment) => <ClickCounterTwo count={count} increment={increment} />}
            </Counter>
            <Counter>
                {(count, increment) => <HoverCounterTwo count={count} increment={increment} />}
            </Counter>
        </div>
    </>)
}
export default Counters;