import React, { useEffect, useState } from 'react'

const Apifatching = () => {
    const [users,setUsers] = useState([])
    
    const getUsers = async ()=>{
        const response = await fatch('https://jsonplaceholder.typicode.com/users')
        setUsers(await response.json())
        console.log(data)
    }

    useEffect(()=>{
        getUsers();
    },[])
  return (
    <div>
      {users.map((curElem)=>{
          return(
            <div>
                <h1>My name is {curElem.name}</h1>
            </div>
          )})}
    </div>
  )
}

export default Apifatching
