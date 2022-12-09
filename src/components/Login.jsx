import React from 'react'
import { useState } from 'react'

import loginImg from '../assets/login.jpg'
import { useNavigate } from "react-router-dom";
export default function Login() {
    let navigate = useNavigate();
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [alert,setAlert]=useState(false);
    const handleLogin = ((e) =>{
        e.preventDefault();
            if(userName=="" || password==""){
                console.log("******");
                setAlert(true);
            }else{
                setAlert(false);
                console.log(userName+" :"+password);
                navigate("/"); 
            }
        });
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-500 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
                {alert?<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p class="font-bold">Be Warned</p>
                    <p>Please fill the Details.</p>
                </div>:""}
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input value={userName} onChange={e=>setUserName(e.target.value)} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button  onClick={handleLogin} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                
            </form>
        </div>
    </div>
  )
}
