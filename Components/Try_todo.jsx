import React, { useState } from 'react'

const Try_todo = () => {
    const [takeData,setTakeData] = useState('')
    const [storeData,setStoreData] = useState([])
    const [toggle,setToggle] = useState(true)
    const [updateData,setUpdateData] =useState()

    const inputData = (e) =>{
        setTakeData(e.target.value)
    }
    const setInput = ()=>{
        setStoreData([...storeData,takeData])
    }
    const dltitem =(ind)=>{
        const data = storeData.filter((item,index)=>{
            return ind !== index
        })
        setStoreData(data)
    }
    const Edititems= (val,ind)=>{
        setToggle(false)
        setTakeData(val)
        setUpdateData(ind)
    }
    const Update = () =>{
        const allData = storeData.map((value,ind)=>{
            return updateData === ind ? takeData : value
        })
            setStoreData(allData)
    }
  return (
    <>
     <input onChange={inputData} value={takeData} type='text'/>
     {
        toggle ? <button onClick={setInput}>Add Data</button> :
        <button onClick={Update}>Update</button> 
     }

     {
        storeData.map((value,ind)=>{
            return(
                <h1 key={ind}>
                    {value}
                    <button onClick={()=>Edititems(value,ind)}>Edit</button>
                    <button onClick={()=>dltitem(ind)}>X</button>
                </h1>
            )
        })
     }
    </>
  )
}

export default Try_todo
