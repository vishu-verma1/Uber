import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
            <h5 onClick={() => {
                props.setVehicleFound(false)
            }} className=' text-center w-[93%] absolute top-0 '><i className=" text-gray-600 text-2xl ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-xl font-semibold mb-3'>Looking for a Driver</h3>
            <div className='flex gap-5 flex-col justify-between items-center'>
                <img className='h-20' src="/car.png" alt="" />
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
            
            </div>
        </div>
  )
}

export default LookingForDriver