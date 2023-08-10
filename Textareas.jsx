import React, { useState } from 'react'

const Textareas = () => {
    const [count,setCount] = useState(0)

    function incr(){
        setCount(count + 1)
    }
    function decr(){
        setCount(count - 1)
    }
  return (
    <>
    <h1>The value is {count}</h1>
        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
    </>
  )
}

export default Textareas
