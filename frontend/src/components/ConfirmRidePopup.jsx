import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = (props) => {
    const [otp, setOtp] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault()
        

    }
    return (
        <div className='h-screen'>
            <h5 onClick={() => {
                props.setConfirmRidePopupPanel(false)
            }} className=' text-center w-[93%] '><i className=" text-gray-600 text-2xl ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-xl font-semibold mb-3'>Confirm This Ride To Start! </h3>
            <div className='flex items-center justify-between bg-yellow-400 p-3 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='w-12 h-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <h2 className='text-xl font-medium'>Harsh Patel</h2>
                </div>
                <h5 className='texxt-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-5 flex-col justify-between items-center'>
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
                    <form 
                        className='w-full flex flex-col gap-5'
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}>
                        <input value={otp} onChange={(e)=>setOtp(e.target.value)} className='bg-gray-200 p-3 px-5 ' type="text" placeholder='Enter OTP' />

                        <div className='flex gap-5 items-center justify-between'>
                            <button
                                onClick={() => {
                                    props.setConfirmRidePopupPanel(false)
                                    props.setRidePopupPanle(false)
                                }}
                                className='w-full bg-red-600 text-white py-2'>Cancel
                            </button>

                            <Link
                            to={'/captain-riding'}
                            className='w-full  bg-black flex justify-center text-white py-2'>Confirm </Link>
                        </div>

                        
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ConfirmRidePopup