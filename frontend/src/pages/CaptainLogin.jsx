import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
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
            Login
          </button>
        </form>
        <p className="text-black text-center mt-2">
          join a fleet ?{" "}
          <Link to="/captain-signup" className="text-blue-600 hover:text-[#ff6a13]">
            {" "}
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="rounded bg-[#ff6a13] flex items-center justify-center mt-2 text-white font-semibold px-3 py-2 text-lg placeholder:text-base border w-full"
        >
          Sign in as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
