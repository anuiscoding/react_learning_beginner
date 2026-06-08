import React from 'react'

const App = () => {
  const scrolling = (arg)=>{
    if(arg>=0){
      console.log("downward scrolling with the speed of ", arg);
    }else{
      console.log("upward scrolling with the speed of ", arg)
    }
    
  }
  return (
    <div onWheel={(elem)=>{
      // console.log(elem);
      scrolling(elem.deltaY)
    }}>
      <div className="page1 w-[100%] h-[100vh] bg-zinc-800"></div>
      <div className="page2 w-[100%] h-[100vh] bg-zinc-500"></div>
      <div className="page3 w-[100%] h-[100vh] bg-zinc-200"></div>
    </div>

  )
}

export default App;