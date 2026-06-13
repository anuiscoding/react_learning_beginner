import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const nav = useNavigate()
  const buttonclicked = ()=>{
    nav("/")
  }
  const back = ()=>{
    nav(-1)
  }

  return (
    <div className='p-4 '>
      <button onClick={buttonclicked} className='p-2 bg-zinc-500 rounded-xl active:scale-95'>Return to Home</button>
      {/* <button onClick={back} className='ml-4 p-2 bg-zinc-500 rounded-xl active:scale-95'>Back</button> */}
        <h1 className='text-4xl absolute top-72 left-[45%] '>About Page</h1>
    </div>
  )
}

export default About