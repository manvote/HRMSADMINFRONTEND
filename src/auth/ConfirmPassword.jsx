import 'tailwindcss';

import React, { useState } from "react";
import bgimage from '../assets/login-bg.jpg'

export default function ConfirmPassword() {

  const BASE_URL = "https://hrmsbackend-ej88.onrender.com";

  async function password({oldPassword, newPassword, confirmPassword}){
    const res = await fetch(`${BASE_URL}/api/change-password//`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access}`,
      },
      body: JSON.stringify({ 
      old_password: oldPassword,
      new_password: newPassword,
      new_password_confirm: confirmPassword, }),
    });

    console.log(await res.json())
  }


  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { message, access } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();  // stop page refresh
    password({oldPassword, newPassword, confirmPassword});
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}>

      <div className="absolute inset-0 backdrop-invert backdrop-opacity-10 bg-[#005DD6]/60">

        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-white p-8 w-96 text-center">

            <form onSubmit={handleSubmit}>
              
              <div className="mb-4 text-left">
                <label className="text-sm font-ptsans font-normal">Old Password</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-white rounded text-black focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4 text-left">
                <label className="text-sm font-ptsans font-normal">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-white rounded text-black focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4 text-left">
                <label className="text-sm font-ptsans font-normal">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-white rounded text-black focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 mt-10 hover:bg-yellow-500 text-black py-2 rounded font-medium"
              >
                Confirm
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
