import React from 'react'

const CaptainDetails = () => {
    return (
        <div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3' >
                    <img className='h-16 w-16 rounded-full object-cover ' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <h4 className='text-lg font-medium'>Harsh Patel</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Rs 296.2</h4>
                    <p className='text-sm  text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex p-3 bg-gray-100 rounded-xl mt-6   justify-center gap-5 items-start '>
                <div className='text-center'>
                    <i className=" text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600 '>Hours Online</p>
                </div>

                <div className='text-center'>
                    <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600 '>Hours Online</p>
                </div>

                <div className='text-center'>
                    <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600 '>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails