import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IndividualProduct from '../individualproduct/IndividualProduct';


import './ManageInventory.css';

const ManageInventory = () => {
    const [inventory, setInventory] = useState([])
    useEffect(()=>{
fetch('https://quiet-chamber-26199.herokuapp.com/todo')
.then(res => res.json())
.then(data => setInventory(data))
    },[])


    const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete?')
      if(proceed){
        console.log('deleting',id);
        const url = `https://quiet-chamber-26199.herokuapp.com/product/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
          if(data.deletedCount > 0){
            console.log('deleted');
            const remaining = inventory.filter(product => product._id !== id);
            setInventory(remaining);
          }
        })
      }
      
    }

    const handleComplete = () =>{
      alert("Task is completed");
    }

    return (
        <div className='mt-5 mb-5'>
         <Link to="/addtask"> <Button className='btn btn-dark text-white d-flex mx-auto'>Add Task</Button></Link>
             <h1 className='text-center fw-bold mb-5'>All Tasks</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-1 g-4">
            {inventory.map((pd, index) => (
        <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-3 col-lg-4">
           
         <table>
           <tr>
           <th className='pb-2 order-heading'>Task Name</th>
           </tr>
           <tr>
          <td className='pb-4 text-dark'>{pd.name}</td>
           </tr>
         </table>
          </div>
          <div class="col-12 col-sm-12 col-md-3 col-lg-4">
          <table>
           <tr>
           <th className='pb-2 order-heading'>Task Description</th>
           </tr>
           <tr>
          <td className='pb-4'>{pd.description}</td>
           </tr>
         </table>
          </div>
          
          
          <div class="col-12 col-sm-12 col-md-3 col-lg-2">
          
          <table>
           <tr>
           <th className='pb-2 order-heading'>Complete</th>
           </tr>
           <tr>
          <td className='pb-4'>
            <Button onClick={handleComplete} className='btn btn-dark'>Complete</Button>
            
            
            
          </td>
           </tr>
         </table>
           
        
          </div>
          <div class="col-12 col-sm-12 col-md-3 col-lg-2">
          
          <table>
           <tr>
           <th className='pb-2 order-heading'>Delete</th>
           </tr>
           <tr>
          <td className='pb-4'>
            <Button onClick={()=>handleDelete(pd._id)} className='btn btn-dark'><i class="fa-solid fa-delete-left"></i> Delete</Button>
            
            
            
          </td>
           </tr>
         </table>
           
        
          </div>
          
        </div>
      </div>


))}

                </div>
                </div>
            </div>
           
  </div>
    )}     


export default ManageInventory;