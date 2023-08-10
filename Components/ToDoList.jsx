import React from 'react'
import { useState } from 'react'

const ToDoList = () => {
    const[values,setValues]= useState('')
    const[alldata,setAlldata]= useState([])
    const [toggle,setToggle] = useState(true)
    const [saveedit,setSaveedit] = useState()
    const inputbox=(e)=>{
        setValues(e.target.value)
    }
    const showData =()=>{
        setAlldata([...alldata,values])
    }
    const dlt=(ind)=>{
        const any = alldata.filter((m,indxx)=>{
            return ind !==indxx
        })
        setAlldata(any)
    }
    const update=(val,ind)=>{
        setToggle(false)
        setValues(val)
        setSaveedit(ind)
    }
    const changevalue=()=>{
        setToggle(true)
        const any = alldata.map((val,ind)=>{
            return saveedit === ind ? values : val 
        })
        setAlldata(any)
    }
  return (
    <>
      <input type='text' onChange={inputbox}/>
      {
        toggle ? <button onClick={showData}>Add</button> :
                <button onClick={changevalue}>Update</button>
      }
      {
        alldata.map((val,ind)=>{
            return(
                <div key={ind}>
                    {val}
                    <button onClick={()=>dlt(ind)}>X</button>
                    <button onClick={()=>update(val,ind)}>edit</button>
                </div>
            )
        })
      }
    </>
  )
}

export default ToDoList
