import React,{useState} from 'react'

export default function Hookexamplenew() {
    const[count, setCount]= useState(0)

   /* onChangedCounter=()=>{
        setCount(count= count+1);

    }*/
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> Counting{count} </button>
            
        </div>
    )
}