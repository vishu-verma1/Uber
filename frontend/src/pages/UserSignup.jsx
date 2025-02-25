import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import  { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
   

    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <button className="rounded bg-[#111] mt-5 text-white font-semibold px-3 py-2 text-lg placeholder:text-base border w-full">
            Create account
          </button>
        </form>
        <p className="text-black text-center mt-2">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-600 hover:text-[#ff6a13]">
            Login here
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

export default UserSignup;
