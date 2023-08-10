import React, { useState } from 'react'

const Prtc = () => {
  const [inputt,setInputt]= useState("")
  const [save,setSave] = useState([])
  // const [amount,setAmount] = useState()
  const calls = ()=>{
    setSave([...save,inputt])
    setInputt("");
  }
  const Increment =()=>{
    setSave(save + 1);
  }
  const Decrement =()=>{
    setSave(save - 1);
  }
  return (
    <div>
        <input type='text' value={inputt} onChange={(e)=>setInputt(e.target.value)} placeholder='Total Amount you have..'/>
        <button onClick={calls}>Add</button>
        <button onClick={Increment}>Increment</button>
        <span>{save}</span>
        <button onClick={Decrement}>Decrement</button>
        {/* {
          save.map((item)=>{
           return <h3>{item}</h3>
          })
        } */}
    </div>
  )
}

export default Prtc
