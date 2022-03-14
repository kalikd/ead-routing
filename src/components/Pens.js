import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

function Pens() {
    const navigate = useNavigate()
    function sendEmail() {
        navigate('/')
    }
    return (<>
        <h1>Pens</h1>
        <button onClick={sendEmail}>Send</button>
    </>)
}
export default Pens;