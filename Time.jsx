import React,{useState} from 'react'

const Time = () => {
    
    const time = new Date().toLocaleString();
    const [ctime,setCtime] = useState(time)

    const updateTime=()=>{
        const time = new Date().toLocaleString();
        setCtime(time)
    }
    setInterval(updateTime,1000)
  return (
    <div>
      <h1>{ctime}</h1>
    </div>
  )
}

export default Time
