import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

    const data = useContext(ThemeDataContext)

    console.log(props.children)//Returns an Array of the children of this component
  return (
    <div className='nav'>
        <h3>{data}</h3>

        {/*Since the props.children is an Array*/}
        {props.children[0]}
        {props.children[1]}

        <Nav2 />
    </div>
  )
}

export default Navbar