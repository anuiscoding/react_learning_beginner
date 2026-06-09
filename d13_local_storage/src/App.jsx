import React from 'react'

const App = () => {
  
  // localStorage.setItem("user", "anu"); //just need to run this once to store the items
  //localStorage.setItem("age", "21"); //the value must be a string
 
  const myname = localStorage.getItem("user");
  const myage =localStorage.getItem("age");
  // console.log(myname, myage);
  localStorage.removeItem("user")
  console.log(myname)//gives null because removed
  
  const about ={
    name:"anu",
    age:21,
    course:"btech ece"
  }
  // //to store an object use json.stringify
  // localStorage.setItem("abouts", JSON.stringify(about));
  // const abouts = localStorage.getItem("abouts");
  //to get the object back again
  const obj_abouts = JSON.parse(localStorage.getItem("abouts"))
  console.log(obj_abouts)


  return (
    <div></div>
  ) 
}

export default App