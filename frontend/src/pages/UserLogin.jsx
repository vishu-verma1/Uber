import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e)=>{
    e.preventDefault();
    const userData = {
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    
  setEmail("");
  setPassword("")
  }


  return (
    <div  className="p-7  h-screen flex flex-col justify-between">
      <div>
      <img className='w-20 rounded-md  mb-10' src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg" alt="" />
      <form onSubmit={submitHandler}>
        <h3 className="text-lg font-medium mb-2">what's your email</h3>
        <input
        value={email}
        onChange={(e)=>{
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
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        className="outline-none rounded bg-[#eeeeee] px-3 py-2 text-lg placeholder:text-base border w-full"
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <button className="rounded bg-[#111] mt-5 text-white font-semibold px-3 py-2 text-lg placeholder:text-base border w-full">Login</button>
      </form>
        <p className="text-black text-center mt-2">new here ? <Link to='/signup'  className="text-blue-600 hover:text-[#ff6a13]">Create new Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className="rounded bg-[#ff6a13] flex items-center justify-center mt-2 text-white font-semibold px-3 py-2 text-lg placeholder:text-base border w-full">Sign in as a Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
