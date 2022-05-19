import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualProduct from '../individualproduct/IndividualProduct';

const AddTask = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = data => {
        console.log(data);
        axios.post('https://quiet-chamber-26199.herokuapp.com/todo',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };

    const [todo, setToDo] = useState([])
    useEffect(()=>{
fetch('https://quiet-chamber-26199.herokuapp.com/todo')
.then(res => res.json())
.then(data => setToDo(data))
    },[])


    return (
        <div className='add-course container'>

<Container>
  <Row>
    <Col>
    <h1 className='text-center fw-bold  mt-5 text-dark'>Please Add a Task !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name",)} placeholder="Task Name" />
      <input {...register("description",)} placeholder="Task Description"/>
      <input type="submit" />
    </form> 
    
    </Col>
   
  </Row>
 
</Container>


          
        </div>
    );
};

export defaultAddTask;