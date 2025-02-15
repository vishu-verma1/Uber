import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import WaitForDriver from '../components/WaitForDriver'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 10
      })

      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })


    }
    else {
      gsap.to(panelRef.current, {
        height: "0",
        padding: 0
      })

      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen, panelCloseRef])


  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)"
      })
    }

    else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)"
      })
    }

  }, [vehiclePanel, vehiclePanelRef])


  useGSAP(function () {
    if (confirmedRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)"
      })
    }

    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)"
      })
    }

  }, [confirmedRidePanel, confirmRidePanelRef])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)"
      })
    }

    else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)"
      })
    }

  }, [vehicleFound, vehicleFoundRef])


  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)"
      })
    }

    else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)"
      })
    }

  }, [waitingForDriver, waitingForDriverRef])


  return (
    <div className='relative h-screen overflow-hidden '>
      <img className='w-16 absolute left-5 top-5 rounded' src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg" alt="" />

      <div className='h-screen w-screen'>
        <img className='object-cover h-full w-full object-center' src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67" alt="" />
      </div>

      <div className='absolute  flex flex-col justify-end h-screen  top-0  w-full'>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 ref={panelCloseRef} onClick={(e) => { setPanelOpen(false) }} className='top-1 right-5 absolute text-2xl '><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>

          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className="line absolute h-16 w-1 bg-gray-900 top-[35%] rounded-full left-10"></div>
            <input className='bg-[#eee] px-8 py-2 text-lg rounded mb-3 mt-2 w-full' type="text" placeholder='Add a Pic-kup Location'
              onClick={(e) => { setPanelOpen(true) }}
              value={pickup}
              onChange={(e) => { setPickup(e.target.value) }} />
            <input className='bg-[#eee] px-8 py-2 text-lg rounded w-full' type="text" placeholder='Enter your Destination'
              onClick={(e) => { setPanelOpen(true) }}
              value={destination}
              onChange={(e) => { setDestination(e.target.value) }} />
          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>

      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white p-5'>
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white p-5'>
        <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel}  setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 w-full translate-y-full bg-white p-5'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 w-full  bg-white p-5'>
        <WaitForDriver setWaitingForDriver={setWaitingForDriver}  />
      </div>

    </div>
  )
}

export default Home