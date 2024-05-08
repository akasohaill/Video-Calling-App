import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'


const HomePage = () => {

  const [input,setInput]=useState("")
  const navigate=useNavigate();

  const onSubmitHandler =()=>{
    navigate(`/room/${input}`)
  }

  return (
    <div className='join'>
      <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your name...' />
      <button onClick={onSubmitHandler}>Join</button>
    </div>
  )
}

export default HomePage
