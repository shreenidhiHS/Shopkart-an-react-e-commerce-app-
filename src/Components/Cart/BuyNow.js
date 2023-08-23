import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Buynow.scss"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux';

export default function BuyNow() {
    const navigate = useNavigate();
    const data = useSelector((state)=>state.data.cart.items)
    function handleClick(){
        return navigate("/product")
    }

    
    console.log(data)
  return (
    <div>
        <Navbar Home={true}
                cart={false}
        />
        <div className='text'>
            <h1>Your Order has been placed</h1>
            <h2>Items you have ordered</h2>
            {data.map((data)=>(
                <div key={data.id}>
                    <p>{data.title}</p>
                </div>
            ))}
            <p className='linktoproduct' onClick={handleClick}>Continue shoping</p>
        </div>
    </div>
    
  )
}
