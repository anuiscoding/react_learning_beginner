import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(0)

  //This function inside usestate runs on **initial react render and every re-render**, this is called mounting. not the main use case of useEffect
  useEffect(function(){
    console.log("useEffect is running...")
  })
  //This useeffect's callback function runs **only once on initial render**, [dependency array]
  useEffect(function(){
    console.log("run once...")
  }, [])

  //if i want this to run a function on initial render and ** num2 state change**
  useEffect(function(){
    console.log("num2 changed...")
  }, [num2])
  
  //application
  const [mouseEnterCount, setmouseEnterCount] = useState(0)
  const [mouseLeaveCount, setmouseLeaveCount] = useState(0)

  //mouse enter dependency
  useEffect(function(){
    console.log("mouse pointer has entered...")
  }, [mouseEnterCount])

  //mouse leave dependency
  useEffect(function(){
    console.log("mouse pointer has left...")
  }, [mouseLeaveCount])

  return (
    <div>
      <h2>{num}</h2>
      <h2>{num2}</h2>
      <button onClick={()=>{
        setnum(num+1)
        setnum2(num2+1)
      }}>Click</button>

      {/*application */}
      <h2>Mouse Enter count - {mouseEnterCount}</h2>
      <h2>Mouse Leave count - {mouseLeaveCount}</h2>
      <button onMouseEnter={()=>{
        setmouseEnterCount(mouseEnterCount+1)
      }} onMouseLeave={()=>{
        setmouseLeaveCount(mouseLeaveCount+1)
      }}>mouse area</button>

    </div>
  )
}

export default App