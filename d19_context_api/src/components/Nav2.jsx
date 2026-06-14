import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {
    const data = useContext(ThemeDataContext)
    console.log(data)//this is will log an array- ['light', setTheme_function]
    //so we can store by destructuring
    const [Theme, setTheme]=data;

  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <button onClick={()=>{
            if(Theme==='light'){
                setTheme('dark')
            }if(Theme==='dark'){
                setTheme('light')
            }else{
                console.error("Theme error");
                
            }
            
        }} className='theme'>{Theme}</button>
    </div>
  )
}

export default Nav2