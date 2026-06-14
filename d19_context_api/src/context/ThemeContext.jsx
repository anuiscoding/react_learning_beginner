import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
    const [Theme, setTheme] = useState('light')
  return (
    <div>
        <ThemeDataContext.Provider value={[Theme, setTheme]}>
             {props.children}
        </ThemeDataContext.Provider>
       </div>
  )
}

export default ThemeContext