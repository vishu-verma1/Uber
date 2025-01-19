import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/walk-city-illustration-concept_114360-815.jpg?t=st=1737043514~exp=1737047114~hmac=2a03bea0436be757c9fcc2140978485e3c5ef17efc5dd8b08a5bd770d251b234&w=996)] h-screen w-full flex flex-col justify-between '>
      <img className='w-20 rounded-md ml-8 mt-5' src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg" alt="" />
      <div className='bg-grey-200 pb-7  py-5 px-10'>
        <h2 className='text-2xl font-bold pb-2'> Get Started with Uber</h2>
        <Link to="/login" className=' flex justify-center w-full bg-black text-white py-3 rounded-md'>Continue </Link>
      </div>
    </div>
  )
}

export default Home