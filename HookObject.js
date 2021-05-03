import React,{useState} from 'react'

function HookObject() {
    const[name, setName]= useState({firstName:'', lastName:''})
    return (
      
            <form>
                <input 
                type="text"
                value={name.firstname}
                onChange={e=> setName({ ...name, firstname: e.target.value})} // spread operator is used to attach first name  with previous attached name object
                />
                <input 
                type="text"
                value={name.lastname}
                onChange={e=> setName({ ...name, lastname: e.target.value})}
                />
                <h2>Your first name is -{name.firstname}</h2>
                <h2>Your last name is -{name.lastname}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form> 

            
   
    )
}

export default HookObject
