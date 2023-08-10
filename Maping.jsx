import React, { useState } from 'react'

const Maping = () => {

    const arr = [
      {
        id: 10491,
        name: "xyz",
        anything: "something",
      },
      {
        id: 10491,
        name: "xyz",
        anything: "something",
      },
    ]
  return (
    
    <>
        {arr.map((task)=>(
            <h3>{task.name}</h3>
        ))}
    </>
  )
}

export default Maping
