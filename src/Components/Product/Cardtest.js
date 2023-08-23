import { Card } from 'primereact/card';
import Navbartest from '../Navbar/Navbartest';
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
 
import "./cardtest.scss"
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../redux-store/DataSlice';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router';


export default function Cardtest(props) {

    const navigate = useNavigate();
    
      
      function handleClick(id){
        return navigate(`/product/${id}`)
      }


    return (
        <>
        <div  className='product-card'>
        
            <div onClick={()=>handleClick(props.data.id)} key={props.data.id}>
            <div >
            <Card  className="productCard" title={props.data.title} subTitle={props.data.category} 
                header={ <img alt="Card" className='cardImage' src={props.data.image} />} >
                <p className="price">
                    price:{props.data.price}
                </p>
            </Card>
            </div>
        </div>

        
        </div>
        </>
        
        
        
        
    )
}
        
