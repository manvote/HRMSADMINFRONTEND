import "tailwindcss";

import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import bgimage from '../assets/login-bg.jpg'
import headicon from '../assets/login-head.png'

export default function Login() {

  const BASE_URL = "https://hrmsbackend-ej88.onrender.com";

  async function login({email, password}) {
    const res = await fetch(`${BASE_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // if (!res.ok) {
    //   console.error("Login failed:", data);
    //   return;
    // }

    console.log("Login success:", data);

    if (res.status === 200) {
      console.log("ok")
      navigate('/confirmPassword', {
        state: {
          message: "Need to change password",
          access: data.access || null,
        },
      });
      // onLogin();
    }
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();  // stop page refresh
    login({ email, password });
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}>

      <div className="absolute inset-0 backdrop-invert backdrop-opacity-10 bg-[#005DD6]/60">

        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="absolute left-0 top-5">
            <img src={headicon} alt="icon" className="w-80" />
          </div>
          <div className="text-white p-8 w-96 text-center">

            <h2 className="text-2xl mb-1 font-ptsans font-normal">Login</h2>
            <p className="text-white mb-6">Login to your account.</p>

            <form onSubmit={handleSubmit}>
              
              <div className="mb-4 text-left">
                <label className="text-sm font-ptsans font-normal">E-mail Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-white rounded text-black focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4 text-left">
                <label className="text-sm font-ptsans font-normal">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-white rounded text-black focus:outline-none"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm mb-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="text-white hover:underline">
                  Reset Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-medium"
              >
                Login
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
