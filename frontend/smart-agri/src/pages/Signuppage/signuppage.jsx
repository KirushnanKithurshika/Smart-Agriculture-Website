import React, { useState } from 'react'

export default function Register() {

    const [data,setData] =useState({
      name:'',
      email:'',
      password:'',   
    })
    const registerUser =(e) => {
    e.preventDefault()
    }
  return (
    <div>
        <from onsubmit={registerUser}>
            <label>Name</label>
            <input type='text' placeholder='enter name..' value ={data.name} onchange={(e)=>setData({...data,name:e.target.value})}/>
            <label>Email</label>
            <input type='email' placeholder='enter email..' value ={data.name} onchange={(e)=>setData({...data,name:e.target.value})}/>
            <label>Password</label>
            <input type='password' placeholder='enter password..' value ={data.name} onchange={(e)=>setData({...data,name:e.target.value})}/>
            <button type ='submit'>Submit</button>
        </from>
    </div>
  )
}

