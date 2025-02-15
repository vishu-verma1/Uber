import React from 'react'

const VehiclePanel = (props) => {
    return (

        <div>
            <h5 onClick={() => {
                props.setVehiclePanel(false)
            }} className=' text-center w-[93%] absolute top-0 '><i className=" text-gray-600 text-2xl ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-xl font-semibold mb-3'>Choose a vehicle</h3>
            <div
                onClick={() => { props.setConfirmedRidePanel(true) }}
                className='flex w-full border-2 mb-3 hover:border-black rounded-xl p-3 items-center gap-2 justify-between'>
                <img className='h-14' src="/car.png" alt="" />
                <div className='w-1/2 '>
                    <h4 className='font-medium text-base'>Uber Go <span><i class="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-xs'>2 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$199.20</h2>
            </div>

            <div
                onClick={() => { props.setConfirmedRidePanel(true) }}
                className='flex w-full border-2 mb-3 hover:border-black rounded-xl p-3 items-center gap-2 justify-between'>
                <img className='h-14' src="https://i.pinimg.com/736x/a0/63/ff/a063ffa25535b4b63951a1ea900efc2f.jpg" alt="" />
                <div className='w-1/2 '>
                    <h4 className='font-medium text-base'>Uber Go <span><i class="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-xs'>2 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$199.20</h2>
            </div>

            <div
                onClick={() => { props.setConfirmedRidePanel(true) }}
                className='flex w-full border-2 mb-3 hover:border-black rounded-xl p-3 items-center gap-2 justify-between'>
                <img className='h-14' src="/auto.png" alt="" />
                <div className='w-1/2 '>
                    <h4 className='font-medium text-base'>Uber Go <span><i class="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-xs'>2 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$199.20</h2>
            </div>
        </div>


    )
}

export default VehiclePanel