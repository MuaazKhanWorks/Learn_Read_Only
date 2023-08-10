import React, { useState } from 'react'


function Form2() {
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const [NameError,setNameError] = useState(false)
    
    const handleName = (e)=>{
        let name = e.target.value;
        if(name.legth < 3){
            setNameError(true)
        }else{
            setNameError(false)
        }
    }
  return (
    <>
            
                <h1>Validation Form</h1>
                <label >Enter Name</label>
                <input type='text' name = "name"  value={name} onChange={handleName}/>
                <br/><br/>
                {NameError ? <span style={{color: "red"}}>Name length must be greater then 2 characters: </span>: ""}
                <br/><br/>
                <label >Enter Email</label>
                <input type='email' name='email' value={email} onChange={handleEmail}/>
            
    </>
  )
}

export default Form2
