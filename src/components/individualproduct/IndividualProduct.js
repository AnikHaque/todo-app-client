import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const IndividualProduct = (props) => {
    const {_id, name,supplier,price,quantity,img,sold,description} = props.foods;
   
    return (

        <Col>
          
                <Card.Img variant="top" className='img-fluid w-75 d-flex mx-auto' src={img} />
                <Card.Body>
                    <Card.Title className='text-center fw-bold'>{name}</Card.Title>
                    
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Text className='text-center'>
                      Supplier Name: {supplier} 
                    </Card.Text>
                <Card.Body className="d-flex justify-content-between">
   
                    <Card.Text>
                        <b>{quantity}</b> pieces in stock
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="m-0 p-0">
                   <Link to={`/product/${_id}`} > <Button  className="w-100  btn-regular">Update</Button></Link>
                   
                </Card.Footer>
          
        </Col>

    );
};

export default IndividualProduct;
