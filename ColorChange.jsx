import React, { useState } from 'react'

const ColorChange = () => {
    const [color,setColor] = useState('black')
    const call=()=>{
      if(color === 'black'){
        setColor('red')
    }
    else{
        setColor('blue')
    }
    }
    const givemeclr = (e)=>{
      setColor(e.target.value)
    }
  return (
    <>
     <button onClick={call}>Change Color</button>
    <h1 style={{color: color}}>Change My Color</h1>
    <input type="text" onChange={givemeclr} />
    </>
  )
}

export default ColorChange
