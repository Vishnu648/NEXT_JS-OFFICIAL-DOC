import React from 'react'

const data=[
    {id:1,name:'one'},
    {id:2,name:'two'},
    {id:3,name:'three'},
]

const page = () => {
  return (
    <div>
      {
        data.map((e) => {
          return(
            <li key={e.id}>{e.name}</li>
          )
        }
        )
      }
    </div>
  )
}

export default page
