import propTypes from "prop-types"

export default function Button({ style, title, classs }) {
    return (<>
        <button style={style} className={classs}>{title}</button>
    </>)
}