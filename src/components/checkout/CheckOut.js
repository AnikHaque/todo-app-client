import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState({});
    const [update, setUpdate] = useState({});

    useEffect(() => {
        const url =`https://quiet-chamber-26199.herokuapp.com/product/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId, item])

    const handleDelivered = () => {
         const quantity = parseInt(item.quantity) - 1;
        // const name = item.name;
        // const price = item.price;
        // const supplier = item.supplier;
        // const img = item.img;
        // const description = item.description;
        const updateData = {quantity}
    
        const url =`https://quiet-chamber-26199.herokuapp.com/product/${itemId}`;
        fetch(url, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleRestock = (event) => {
        event.preventDefault();
        const userQuantity = event.target.add.value;
    
        const quantity =parseInt(item.quantity)+parseInt(userQuantity);
        const updatedProduct = {quantity};
        
      
    

        fetch(`https://quiet-chamber-26199.herokuapp.com/product/${itemId}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
            
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
            setItem(data);
            event.target.reset();
        })
    }


    return (
        <div className="container px-4">
           <h5 className="bg-dark my-5 p-3 text-white ">{item._id} is added to your order List</h5>
            <div className='row gx-5 p-3 '>
            <div className="container ">
          <div className="row  g-4">
            <div className="col-12 col-md-7">
              <div className="card d-flex flex-md-row  flex-col">
                <img src={item.img} className="w-50 " alt="..." />
                <div className="card-body text-start">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}.</p>
                  <p className="card-text">Supplier Name: <b>{item.supplier}</b></p>
                  <p className="card-text"> <b>On Stock:</b>{item.quantity} Items</p>
                  <p className="card-text"> <b></b>{item.sold}</p>

                  <h5 className="card-title">$ {item.price}/item</h5>
                  <button onClick={handleDelivered} className='btn-regular'>Delivered</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
            <div className='w-100 bac formdetail mx-auto'>
                        <h2 className='text-info text-center p-2'>RESTOCK</h2>
                        <form onSubmit={handleRestock} className='d-flex flex-column   p-5'>
                            <input className='mb-2 addI' name='add' placeholder='Item Quantity' type="number" />
                            <input className='bg-info w-100 d-block mx-auto addI' type="Submit" value="Restock the Items" />
                        </form>
                    </div>
            </div>


          </div>
        </div>

                {/* <div className='col-sm-6 item qqq bg-light'>
                    <img className='w-100 hei' src={item.img} alt="" />
                    <h3>Name :{item.name}</h3>
                    <h3>Supplier Name :{item.supplier}</h3>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p><small>{item.description}</small></p>
                    <button onClick={handleDelivered} className='btn btn-info'>Delivered</button>
                </div> */}
               
            </div>
            <Link to='/inventories'>
<Button className='btn-regular d-flex mx-auto'>Manage Inventory</Button>
</Link>
        </div>
    );
};

export default CheckOut;
