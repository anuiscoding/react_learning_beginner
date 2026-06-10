import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  // async function getdata(){
  //   console.log("getting data ....")
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log(data)
  // }

  // axio method
  const [Data, setData] = useState([])

  const getdata = async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list")
    // console.log(response.data);
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getdata}>Get data </button>
      <div>
        {Data.map(function(elem, idx){
          return <h3 key={idx}>{elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App