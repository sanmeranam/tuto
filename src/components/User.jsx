/* eslint-disable react/prop-types */

export default function User({ name, onUpdate }) {
    const onClickHandler = () => {
        onUpdate(name)
    }


    const updateBTN = (
        <>
            <button onClick={onClickHandler}>Update</button>
        </>
    )
    const addBTN = () => <button onClick={onClickHandler}>Add</button>

    return (
        <>
            <h3>User Compo</h3>
            <div>Name: {name} {name ? updateBTN() : addBTN()}</div>
        </>
    )
}
