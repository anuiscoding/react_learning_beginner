import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className=''>
      <div className='w-full font-semibold mt-4 p-2 flex justify-center gap-4'>
        <Link to='/product/summer'>Summer</Link>
        <Link to='/product/winter'>Winter</Link>
      </div>
        {/* <h1 className='absolute top-72 left-[45%] flex justify-center items-center text-4xl'>Product Page</h1>
         */}
         <Outlet></Outlet>
    </div>
  )
}

export default Product