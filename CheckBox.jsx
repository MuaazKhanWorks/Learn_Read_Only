import React, { useState } from 'react'

const CheckBox = () => {
    const arr = ['asd','fgh','jkl']
    const [arritem,setArritem] = useState(arr)
    const [show,setShow] = useState(false)
    const [showInd,setShowInd] = useState()

    const dltitem = (ind)=>{
        const xyz = arritem.filter((any,index)=>{
            return index !== ind        
        })
        setArritem(xyz)
    }
    const handleCheckBox = (ind) => {
      setShowInd(ind);
      setShow(true)
    }
  return (
    <>
      {
        arritem.map((item,ind)=>{
            return(
                <h1 key={ind}>
                    {item}
                    {show && showInd == ind ?  <button onClick={()=>dltitem(ind)}>Delete</button>
                     : <input type='checkbox' onClick={() => handleCheckBox(ind)}></input>}  
                </h1>
            )
            
        })
      }
    </>
  )
}

export default CheckBox
