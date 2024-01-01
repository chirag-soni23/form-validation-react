import React from 'react'
import {useForm} from 'react-hook-form'

function Forms() {
    const {register,handleSubmit} = useForm()
    const handleRegistration=(data)=>console.log(data);
  return (
    <div>
        <form onSubmit={handleSubmit(handleRegistration)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder='Enter Your Name' {...register('name')} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder='Enter Your Email' {...register('email')} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' name="password" {...register('password')} />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Forms