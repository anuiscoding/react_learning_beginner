import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetails = () => {
    const details = useParams()
    console.log(details.id)


  return (
    <div className='absolute top-72 left-[45%]'>
        <h1 className='text-4xl'>About Details</h1>
    </div>
  )
}

export default AboutDetails