import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios"

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const navigate = useNavigate();

  const { captainUser, setCaptainUser } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    

    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },

      
    };
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);

    if(response.status === 201){
      const data = response.data;
      setCaptainUser(data.captain);
      localStorage.setItem('token', data.token);
      navigate("/captain-home")
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7  h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 rounded-md  mb-10"
          src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">what's your Name</h3>
          <div className="flex gap-4 mb-5 ">
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="outline-none rounded w-1/2 bg-[#eeeeee] px-3 py-2 text-lg placeholder:text-base border  "
              type="text"
              name="firstname"
              placeholder="First Name"
            />

            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="outline-none rounded w-1/2 bg-[#eeeeee] px-3 py-2 text-lg placeholder:text-base border "
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">what's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="outline-none rounded bg-[#eeeeee] mb-7 px-3 py-2 text-lg placeholder:text-base border w-full "
            type="email"
            name="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium ">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none rounded bg-[#eeeeee] px-3 py-2 text-lg placeholder:text-base border w-full"
            type="password"
            name="password"
            required
            placeholder="Password"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Color</h3>
          <input
            value={vehicleColor}
            onChange={(e) => {
              setVehicleColor(e.target.value);
            }}
            className="outline-none rounded bg-[#eeeeee] mb-7 px-3 py-2 text-lg placeholder:text-base border w-full"
            type="text"
            name="vehicleColor"
            placeholder="Vehicle Color"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Plate</h3>
          <input
            value={vehiclePlate}
            onChange={(e) => {
              setVehiclePlate(e.target.value);
            }}
            className="outline-none rounded bg-[#eeeeee] mb-7 px-3 py-2 text-lg placeholder:text-base border w-full"
            type="number"
            name="vehiclePlate"
            placeholder="Vehicle Plate"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Capacity</h3>
          <input
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value);
            }}
            className="outline-none rounded bg-[#eeeeee] mb-7 px-3 py-2 text-lg placeholder:text-base border w-full"
            type="number"
            name="vehicleCapacity"
            placeholder="Vehicle Capacity"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Type</h3>
          <select
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
            className="outline-none rounded bg-[#eeeeee] mb-7 px-3 py-2 text-lg placeholder:text-base border w-full"
            name="vehicleType"
          >
            <option value="">Select Vehicle Type</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
            <option value="car">Car</option>
          </select>

          <button className="rounded bg-[#111] mt-5 text-white font-semibold px-3 py-2 text-lg placeholder:text-base border w-full">
            Create Captain Account
          </button>
        </form>
        <p className="text-black text-center mt-2">
          Already have an account ?
          <Link
            to="/captain-login"
            className="text-blue-600 hover:text-[#ff6a13]"
          >
           Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs leading-tight opacity-50 ">
          By proceeding, you consent to get calls, Whatsapp or SMS mesages,
          including by automated means, from Uber and its afflitiates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
