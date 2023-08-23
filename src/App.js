
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css'; 


import React,{useState , useEffect} from "react"
import axios from "axios"
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from './Footer/Footer';
import NavbarTest from './Components/Navbar/Navbartest';
import Product from './Components/Product/Product';
import Contact from "./Components/Contact/Contact";
import Productdesc from "./Components/Product/Productdesc";
import AddProduct from "./Components/AddProduct/AddProduct";
import UpdateProd from "./Components/UpdateProduct/UpdateProd";
import RemoveProd from "./Components/RemoveProduct/RemoveProd";
import { GetCall } from "../src/API/APICall.js";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import { Button } from 'primereact/button';
import { useDispatch } from "react-redux";
import {dataActions} from "./Components/redux-store/DataSlice";
import { useSelector } from "react-redux";
import Cardtest from "./Components/Product/Cardtest";
import Cart from "./Components/Cart/Cart";
import BuyNow from './Components/Cart/BuyNow';
import Loader from './Components/loader/loader';
import './app.scss'



export default function App() {
  
  
  
  const data = useSelector((state)=> state.data.data)
  const [loading ,setLoading] = useState(false)
  const [prodcut , setProduct] = useState([])
  const dispatch = useDispatch();

  //set API data to reducer
  useEffect(() =>{
    callApi();
  },[]);

  async function callApi(){
    const apiInstance = axios.get("https://fakestoreapi.com/products");
    const response = await apiInstance;
    dispatch(dataActions.addData(response.data));

  }
  
  axios.interceptors.request.use(request =>{
    document.getElementById("load").style.display = "block";
    
    return request
  }
  )
  axios.interceptors.response.use(response =>{
    document.getElementById("main").style.display = "block";
    document.getElementById("load").style.display = "none";
    return response
  }
  )
  


  //calling API
  // useEffect(() =>{
  //   setLoading(true)
  //   GetAllProduct();
  // },[]);

  // const GetAllProduct = async ()=>{
  //   try {
  //     const prod =  await GetCall();
  //     setProduct(prod)
  //     setLoading(false)
  //     // dispatch(dataActions.addData(prod));
  //   } catch(e){
  //     console.log(e)
  //   }
    
  // }
  
  

  return (
    <>
    <div id="load">
      <Loader />
    </div>
    
    <div id="main"   className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" 
        element={
        <Product 
          loading={loading}
          prodcut={data}
        />
        } 
        />
        <Route exact path={"/product/:id/*"}
        element={ 
            <Productdesc 
            product={data}
            />
        }
        />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/UpdateProd/:id" element={<UpdateProd  data={prodcut}/>} />
        <Route path="/RemoveProd/:id" element={<RemoveProd />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/navbar" element={<NavbarTest />} />
        <Route path="/primereact" element={<Cardtest />} />
        <Route path="/buynow" element={<BuyNow />} />

      </Routes>
    
      
      <Footer />
    </div>
    </>
    
  )
}


