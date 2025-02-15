import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
            <h5 onClick={() => {
                props.setWaitingForDriver(false)
            }} className=' text-center w-[93%] absolute top-0 '><i className=" text-gray-600 text-2xl ri-arrow-down-wide-line"></i></h5>

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
                <button className='w-full mt-5 bg-black text-white py-2'>Confirm</button>
            </div>
        </div>
  )
}

export default WaitForDriver