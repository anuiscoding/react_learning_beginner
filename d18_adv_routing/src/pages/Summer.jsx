import React from 'react'
import { useNavigate } from 'react-router-dom'

const Summer = () => {
    
      const nav = useNavigate()
      //this will take the page to 1 route backwards
      const back = ()=>{
        nav(-1)
      }
    
  return (
    <div className=''>
        <button onClick={back} className='ml-4 p-2 rounded-lg bg-gradient-to-br from-slate-600 to-slate-9 active:scale-95'>Back</button>
        <h1 className='text-4xl absolute top-72 left-[45%] flex justify-center items-center'>Summer wear</h1> 
        </div>
  )
}

export default Summer