import React from 'react'

const LocationSearchPanel = ({setPanelOpen, setVehiclePanel}) => {

  // temporary Array 
  const locations = [
    "24B, near kapoor's cafe, Model town Dehli",
    "24B, near kapoor's cafe, Model town Dehli",
    "24B, near kapoor's cafe, Model town Dehli",
    "24B, near kapoor's cafe, Model town Dehli",
  ]

  return (
    <div>
      {/* temporary  */}
      {
        locations.map((each,idx) => {
         
          return <div key={idx} onClick={()=>{
            setVehiclePanel(true)
            setPanelOpen(false)
          }} className='flex justify-start  border-2 active:border-black p-3 px-4 mb-2 rounded-lg items-center gap-2'>
              <h5 className='bg-[#eee] p-2 px-3 rounded-full'><i className="ri-map-pin-2-line "></i></h5>
              <h4 className='font-medium'>24B, near kapoor's cafe, Model town Dehli </h4>
            </div>
          
        })
      }


    </div>
  )
}

export default LocationSearchPanel