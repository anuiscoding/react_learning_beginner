import { useState } from 'react'
import React from 'react'
import "./App.css"

const App = () => {
  const submithandler= (elm)=>{
    elm.preventDefault()
    console.log("submitted")
  }

  return (
    <div>
      <form className="formarea" onSubmit={(e)=>{submithandler(e)}} >
        <input className='inparea' type="text" placeholder='Enter Your Name Here' />
        <button className="btn_submit">submit</button>
      </form>
    </div>
  )
}
export default App;