import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
    return (
        <div className='h-screen p-4'>
            <h5 onClick={() => {
                props.setFinishRidePanel(false)
            }} className=' text-center w-[93%] '><i className=" text-gray-900 text-2xl ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-xl font-semibold mb-3'>Finish this Ride! </h3>
            <div className='flex items-center justify-between border  border-yellow-400 p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='w-12 h-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <h2 className='text-xl font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='texxt-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex  flex-col gap-64 justify-between items-center'>
                <div className='w-full mt-5'>
                    <div className='flex gap-4 items-center p-3 border-b-2 '>
                        {/*current location */}
                        <i className=" text-lg ri-map-pin-2-line"></i>
                        <div>
                            <h3 className='font-bold text-lg'>5611/89-A</h3>
                            <p className='text-gray-600 -m-1'>Kankariya Talab Ahemdabaad</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center p-3 border-b-2 '>
                        {/* destination Location  */}
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='font-bold text-lg'>5611/89-A</h3>
                            <p className='text-gray-600 -m-1'>Kankariya Talab Ahemdabaad</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center p-3  '>
                        {/* Price */}
                        <i className=" text-lg ri-money-rupee-circle-line"></i>
                        <div>
                            <h3 className='font-bold text-lg'>Rs.193.20</h3>
                            <p className='text-gray-600 -m-1'>Cash Cash</p>
                        </div>

                    </div>
                </div>
                <div className='w-full' >
                    <Link
                        to={'/captain-home'}
                        className='w-full  bg-black flex justify-center text-white py-2'>Finish Ride</Link>

                        <p className='text-xs text-center mt-6 '>Click on the Finsih Ride if you have completed the Payement </p>
                </div>

            </div>
        </div>
    )
}

export default FinishRide