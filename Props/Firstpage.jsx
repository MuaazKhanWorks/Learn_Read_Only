import React from 'react'
import Secondpage from './Secondpage'

const Firstpage = () => {
  const obj = {
    name:"Muaaz",
     id:"123",
      price:"25Rs"
  }
  function getdata(){
    alert("Hello")
  }
  return (
    <div>
      <Secondpage name="Muaaz" id="123" price="25Rs"/>

      {/* <Secondpage passobj={obj}/> */}

      <Secondpage data={getdata}/>
    </div>
  )
}

export default Firstpage
