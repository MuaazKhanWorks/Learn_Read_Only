import React, { useState } from 'react'

const countryData = [
    { name: 'Pakistan', cities: ['Karachi', 'Lahore', 'Islamabad'] },
    { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore'] },
    { name: 'Afghanistan', cities: ['Kabul', 'Herat', 'Mazar'] }
  ];
const Try_country = () => {
    const [selectCotry,setSelectedCotry] = useState('')

    const cnty= (e)=>{
        setSelectedCotry(e.target.value)
    }
  return (
    <>
      <select onChange={cnty}>
       
        {
            countryData.map((name,ind)=>(         //Insted of Return you can put () Round Brackets.'it will work'
                    <option key={ind}>{name.name}</option> 
            ))
        }
      </select>
      <select>
        {
            selectCotry && countryData.find((country)=>
                country.name === selectCotry
            ).cities.map((city)=>{
              return(
                <option>{city}</option>
              )         
})
        }
      </select>
    </>
  )
}

export default Try_country
