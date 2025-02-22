import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {
const [finishRidePanel, setFinishRidePanel] = useState(false)
const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(0)"
            })
        }

        else {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(100%)"
            })
        }

    }, [finishRidePanel, finishRidePanelRef])


    return (
        <div className='h-screen w-screen '>

            <div className='fixed p-6 top-0 flex items-center justify-between w-full '>
                <img className='w-16 rounded ' src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg" alt="" />
                <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className=" text-xl font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-4/5 '>
                <img className='object-cover h-full w-full object-center' src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67" alt="" />
            </div>

            <div className='h-1/5 flex justify-between relative items-center bg-yellow-400 p-5'
             onClick={() => {setFinishRidePanel(true) }}>
                <h5 
                    className=' text-center w-[93%] absolute top-0 '>
                    <i className=" text-gray-900 text-2xl ri-arrow-up-wide-line"></i>
                </h5>
                <h4 className='text-xl font-bold'>4.0 KM away</h4>
                <button className=' bg-green-600 rounded-sm py-2 text-white px-10 mt-2'
                >Complete Ride</button>

            </div>

            <div ref={finishRidePanelRef} className='fixed z-10 bottom-0 w-full translate-y-full  bg-white p-5'>
                <FinishRide  setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    )
}

export default CaptainRiding