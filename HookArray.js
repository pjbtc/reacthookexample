import React,{useState} from 'react'

function HookArray() {
    const[items, setItems]=useState([]) // state is array 

    const addItem=()=>{
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) +1 // it gives random number between 0 and 11
        }]) 

    }
    return (
        <div>
            <button onClick={addItem}>Add Number</button>
            <ul>
                { items.map(item =>(
                <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default HookArray
