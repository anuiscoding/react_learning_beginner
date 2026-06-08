import React, { useState } from "react";
import "./App.css";

const App = ()=>{
  // let anu = 21;
  // function chnagekaro(){
  //   console.log(anu)
  //   anu=22;
  //   console.log(anu);
  // }

  // usestate
  // const [anu, setanu] = useState(21)
  // const [gousu, setgousu] = useState(18)
  // const [city, setcity] = useState("bhilai")
  // const [cities, setcities] = useState(["bhilai", "balodabazar"])
  // function aging(){
  //   // setanu(22) //this is an asynchronous process
  //   setanu(anu+1);
  //   setgousu(gousu+1)
  //   setcity("Delhi")
  //   setcities(["delhi", "mumbai"])
  // }

  // application
  const [num, setnum] = useState(0)
  function increase_count(){
    setnum(num+1);
  }
  function decrease_count(){
    setnum(num-1);
  }

  return (
    <div>
      {/* <h1>Hello</h1>
      <h1>Anu is {anu} years old. Gousu is {gousu} years old.They met in {city}. {cities}</h1>
      <button onClick={aging}>click to increase age</button> */}
    <div className="num">
      <h1 className="header_num">{num}</h1>
      </div>
    <div className="btns">
      <button className="btn btn_inc" onClick={increase_count}>increase</button>
      <button className="btn btn_dec" onClick={decrease_count}>decrease</button>
    </div>
    </div>
  )
}
export default App;