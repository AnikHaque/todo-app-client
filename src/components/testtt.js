import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, useWatch } from "react-hook-form";

import './MenuDetails.css'
 import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
// import Footer from '../footer/Footer';

const headingService={
   textAlign:'center',
   fontSize:'40px',
   fontWeight:'bolder'
}
const MenuDetails = () => {
    const {user} = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
       console.log(data);
       axios.post("https://pacific-chamber-54725.herokuapp.com/todo",data)
       .then(res=>{
           if(res.data.insertedId){
              alert("Added Successfully.")
              
               reset();
              
               
           }
       })
   } 
     const {id} = useParams();
    const [food,setFood] = useState({})
     useEffect(()=>{
         fetch(`https://pacific-chamber-54725.herokuapp.com/cars/${id}`)
       .then(res=>res.json())
        .then(data=>setFood(data))

     },[])
    return (
      <div>
     
      <div>
        <h5 className="bg-dark my-5 p-3 text-white ">{food._id} is added to your order List</h5>

        <div className="container ">
          <div className="row  g-4">
            <div className="col-12 col-md-7">
              <div className="card d-flex flex-md-row  flex-col">
                <img src={food.img} className="w-50 " alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">{food.description}.</p>
                  <h5 className="card-title">$ {food.price}/person</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div>
                <form className="form-details" onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue={user.displayName} className="w-100 p-2 m-1" type="text" {...register("name")} readOnly /> <br />

                  <input defaultValue={user.email} className="w-100 p-2 m-1" type="email" {...register("email")} readOnly /> <br />

                  <input placeholder=" Selected Product name"  className="w-100 p-2 m-1" type="text" {...register("productName")} required /> <br />

                  <input placeholder="Enter your Address" className="w-100 p-2 m-1 " type="text" {...register("address")} /> <br />
                  <input placeholder="Enter Contact No." className="w-100 p-2 m-1" type="number" {...register("contact")} /> <br />
                  <input defaultValue="pending" className="w-100 p-2 m-1" type="text" {...register("status")} hidden /> <br />
                  <input className="w-100 p-2 m-1 bg-success text-white fw-bold" type="submit" value="Place Order" />

               
              
              
              <Link to={`/dashboard/pay/${food._id}`}><button className="btn-regular">Please Pay</button></Link>
               
           
                  
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>

      
    </div>
    );

    }
export default MenuDetails;