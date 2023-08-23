import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'semantic-ui-react'
import "./cart.scss"
import { useNavigate } from 'react-router'
import { dataActions } from '../redux-store/DataSlice'



export default function Cart() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state)=> state.data.cart.items)
    const totalprice = useSelector((state)=> state.data.cart.totalprice)
    const [verify , setVerify] = useState();
    console.log(cart)


  function handleclick(){
    console.log("hi")
    return navigate("/buynow")
  }

  function handleReomve(id){
    dispatch(dataActions.removeCart(id))
  }

  return (
    <div>
      <Navbar display={true}
      contact={true}
      Home={true}
            
      /> 
      <div>
        {cart.map((data =>(
          <div className='cart'>
          <div  key={data.id}>
                <h1>{data.title}</h1>
                <p>{data.price}</p>
            </div>
            <button className='remove-btn' onClick={() =>handleReomve(data.id)}>Remove</button>
          </div>  
        )))}
      </div>
      <h1>Total Price :{totalprice} USD</h1>
      <button className='buynow' onClick={handleclick}>BuyNow</button>
    </div>
  )
}
