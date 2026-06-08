import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>Hi I am {props.user}</h1>
        <p>I am {props.age} years old</p>
        <button>view profile</button>
      </div>
  )
}

export default Card