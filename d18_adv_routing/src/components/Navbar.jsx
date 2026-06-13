import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full px-4 font-semibold  bg-gradient-to-r from-slate-900  to-slate-700 flex justify-between'>
        <h2 className='p-4 text-xl text-white'>Chromastone</h2>
        <div className="routes p-4 text-white flex justify-center gap-10">
            <Link to='/'>Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/about">About</Link>
        </div>
        
    </div>
  )
}

export default Navbar