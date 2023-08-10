import React, { useState } from 'react'

const arr = [5,7,9,11,15,17]
const arr2 = [5,7,9,11,13,15,17]
const FindMissing = () => {
//  const [save,setSave] = useState()
 const call = ()=>{
    const a = arr2.find((item)=>{
        return (item !== arr)
    })
      console.log(a);
    
 }    
        
  return (
    <>
       <button onClick={call}>Show</button>
    </>
  )
}

export default FindMissing
