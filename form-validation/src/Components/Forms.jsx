import React, { useState } from 'react'

function Forms() {
    const [name,setName] = useState()
    const showname=(e)=>{
        e.preventDefault()
        alert(`${name}`)
        setName("")

    }
  return (
    <div>
        <form onSubmit={showname}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
            <input type="submit" value='Click'/>
        </form>

    </div>
  )
}

export default Forms