import React, { useState } from 'react'

function Forms() {
    const [name,setName] = useState()
  return (
    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="submit"/>
        </form>

    </div>
  )
}

export default Forms