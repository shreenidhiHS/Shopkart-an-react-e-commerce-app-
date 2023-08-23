import React, { useEffect } from 'react'
import { useState } from 'react';
import {  useForm } from "react-hook-form";

import "./signup.scss"
import { json } from 'react-router';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';

export default function Signup() {

  const navigate = useNavigate();
  const[data , setData] = useState({});
  
  const {register , handleSubmit,formState: { errors }} = useForm();

  function HandleRegister(formData){
    setData(formData)
    localStorage.setItem("Id", JSON.stringify(formData))
    return  navigate("/")
    
  }

  return (
    <>
      <Navbar display={false}
              Logout={false}
              cart={true}
      />
      <div className='login-form'>
      <h1 className='login-head'>WELCOME TO SHOP</h1>
      <h1 className='login-head'>Sign-Up</h1>
      <form className='form-ele' onSubmit={handleSubmit((formData) =>{
        HandleRegister(formData)

      })}>
        <input className="email"
        type="text"
        placeholder="First-Name"
        {...register("FirstName",{required:"This is required"})}
        />
        {errors.FirstName && <p className='danger'>FirstName is required</p>}
        <input className="email"
          type="text"
          placeholder="Last-Name"
          {...register("Last-Name",{required:"This is required"})}
        />
        <input className="email"
          type="email"
          placeholder="E-mail"
          {...register("email",{required:"This is required"})}
        />
        {errors.email && <p className='danger'>email is required</p>}
        <input className="password"
          type="text"
          placeholder="Password"     
          {...register("password",{required:"This is required"})}
        />
        {errors.password && <p className='danger'>password is required</p>}
          <input className="password"
            type="text"
            placeholder="Confirm-password"     
            {...register("password",{required:"This is required"})}
          />
        {errors.password && <p className='danger'>password is required</p>}
          <button className='login-btn' type='submit'>Register</button>
      </form>
    </div>
    </>
    
  )
}
