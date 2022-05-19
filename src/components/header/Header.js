import React from 'react';
import { Button, Card, CardGroup, Col, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" className='header' variant="dark">
  <Container>
  <Navbar.Brand href="#home"><b>ORGAFE</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className='mx-auto navigation-menu'>
    <Nav.Link as={Link} to="/home" className='pt-2 fw-bold text-light'>All Tasks</Nav.Link>
    {
        user &&  <Nav.Link as={Link} to="/addtask" className='pt-2 fw-bold text-light'>Add Task</Nav.Link>
      }

    </Nav>
    <Nav className='text-right'>
      
      
        {
            user ?
            <Nav.Link as={Link} to="">
            
          <Button onClick={handleSignOut} className='btn btn-dark  text-white fw-bold px-4 pe-4'><i class="fa-solid fa-user pe-2"></i>LogOut</Button>
            </Nav.Link>
           
            :
            <Nav.Link as={Link} to="/login">
            <i class="fa-solid fa-user pe-2 text-white"></i><b className='text-white'>Login</b>
            </Nav.Link>
        }  
    </Nav>

    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;