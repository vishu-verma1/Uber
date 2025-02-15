import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext();


const CaptainContext = ({children}) => {
 

   const [captainUser, setCaptainUser] = useState({
          email:"",
          fullname:{
              firstname:"",
              lastname:"" 
          },

          vehicle: {
            color: "",
            plate: "",
            capacity: "" ,
            vehicleType: ""
        },
      })

  return (
    <div>
      <CaptainDataContext.Provider value={{captainUser, setCaptainUser}}>
      {children}
      </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext