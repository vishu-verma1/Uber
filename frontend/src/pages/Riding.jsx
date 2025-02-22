import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen w-screen'>
            <Link to={'/home'} className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className=" text-xl font-medium ri-home-6-line"></i>
            </Link>
           
            <div className='h-1/2 '>
                <img className='object-cover h-full w-full object-center' src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67" alt="" />
            </div>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between mt-2'>
                    <img className='h-20  bg-red-300 rounded-full ' src="/car.png" alt="" />
                    <div className='text-right'>
                        <h2 className='font-medium text-lg'>Avinash</h2>
                        <h4 className='font-semibold -mt-1 -mb-1 text-xl'>MP05 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex gap-5 flex-col justify-between items-center'>

                    <div className='w-full mt-5'>
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
                    <button className='w-full mt-5 bg-black text-white py-2'>Make a Payment</button>

                </div>
            </div>
        </div>
    )
}

export default Riding