import React, { useState } from 'react'

const Short_circuit = () => {
    const [short,setShort] = useState(false)
  return (
    <>
      {
        short && '<h1>This is true</h1>'
      }
    </>
  )
}

export default Short_circuit
