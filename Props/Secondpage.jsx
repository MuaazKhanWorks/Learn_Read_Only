import React from 'react'

const Secondpage = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.id}</h2>
      <h3>{props.price}</h3>

    {/* <span>{props.passobj.name}</span> */}

      <button onClick={props.data}>Call the function</button>
    </>
  )
}

export default Secondpage
