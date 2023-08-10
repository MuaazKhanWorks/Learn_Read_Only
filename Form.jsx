
import React, { useState } from 'react'

function Form() {
    const initialValue = {
        name: '',
        email: '',
        password: '',
    };
    const [formData,setFormData] = useState(initialValue);
    const handleSubmit = (e) =>{
      e.preventDefault();
      // alert(JSON.stringify(formData, undefined, 2))
      
      let x = e.target[0].value;
      if(x.length < 3){
        document.write("Name length must be greater then 2 characters")
      }else{
        alert(formData.name +" "+ formData.email +" "+ formData.password)
        
      }
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' onChange={(e)=> setFormData({...formData, name: e.target.value})}/>
        <br/>
        
        <label>Email</label>
        <input type='email'  onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
        <br/>
        <label>Password</label>
        <input type='password'  onChange={(e)=> setFormData({...formData, password: e.target.value})}/>
        <br/>
        <button type='submit'>Submit</button>
        {/* <p>{JSON.stringify(formData)}</p> */}
    </form>
    </>
  )
}

export default Form
