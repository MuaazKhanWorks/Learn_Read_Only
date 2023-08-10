import React from 'react'

const Array = () => {
    const item = [
        {
            id: 1,
            name: 'Name1',
            price: 111
        },
        {
            id: 2,
            name: 'Name2',
            price: 222
        },
        {
            id: 3,
            name: 'name3',
            price: 333
        }
    ]
    // Create
    item.push({
        id: 4,
        name: 'Name4',
        price: 444
    })
    // console.log(item)

    // READ
    const selectedItem = item.filter((item)=> item.id === 2)
    // console.log(selectedItem)

    // UPDATE
    // const updateUser = {...item,name: 'Harry porter'}
    // console.table(updateUser) incomplete

    // Delete
    const dltitm = item.filter((dlt)=> dlt.id !== 3)
    console.table(dltitm)
  return (
    <>
      Try to learn crud
      
    </>
  )
}

export default Array
