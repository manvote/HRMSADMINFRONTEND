import React, { useState } from "react";
import bgimage from '../assets/login-bg.jpg'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmPassword() {

  const BASE_URL = "https://hrmsbackend-ej88.onrender.com";

  const access = localStorage.getItem('access');
  const location = useLocation();
  const navigate = useNavigate();

  async function password(){
    try {
    const res = await axios.post(`${BASE_URL}/api/reset-password/`, {
      new_password: newPassword,
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access}`,
      },
    });

    console.log(res.data)
    alert("Password changed successfully!");
    navigate("/employee");

  } catch (error) {
    console.error("An error occurred during password reset:", error);
  }
  }

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page refresh
    console.log(access)
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    password();
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}>

      <div className="absolute inset-0 backdrop-invert backdrop-opacity-10 bg-[#005DD6]/60">

        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-white p-8 w-96 text-center">

            <form onSubmit={handleSubmit}>
              
              <h2 className="text-2xl font-bold pb-6">Change Your Password</h2>

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

              <div className="text-black p-6">{message}</div>

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
