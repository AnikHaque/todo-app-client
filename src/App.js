import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import 'animate.css';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notfound/NotFound';
import About from '../src/components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/login/Register';
import CheckOut from './components/checkout/CheckOut';
import RequireAuth from '../src/components/login/RequireAuth/RequireAuth';
import Blog from './components/blog/Blog';
import AddTask from './components/addproducts/AddTask';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/manageitems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>
        <Route path="/inventories" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/addtask" element={<AddProduct></AddProduct>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/product/:itemId' element={
           <RequireAuth>
           <CheckOut></CheckOut>
         </RequireAuth>
        }></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
