/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import Panel from "./Panel"

export default function User({ name, onUpdate, edit }) {

    const [age, setAge] = useState()

    useEffect(() => {     // init 
        console.log('User Component Mounted')

    }, [])

    useEffect(() => {     
        
    }, [name])


    const onClickHandler = () => {
        // onUpdate(name+Math.random())
    }


    const updateBTN = (
        <>
            <button onClick={onClickHandler}>Update</button>
        </>
    )
    const addBTN = () => <button onClick={onClickHandler}>Add</button>

    return (
        <Panel title={name}>
            <h3 style={{ color:parseInt(age)>60?'red':'green'}}>User Compo</h3>
            <div>Name: {name} {name ? updateBTN : addBTN()} {edit}</div>
            <input type="text" value={age} onChange={(e)=>{
                setAge(e.target.value)
            }} />
        </Panel>
    )
}
