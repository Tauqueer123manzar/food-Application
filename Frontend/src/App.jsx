import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Topbar from './components/Topbar';
import Service from './pages/Service';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Report from './components/Report';
import { useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Menu from './pages/Menu';
import photo from './assets/Tauqueer.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import AdminDashboard from './pages/AdminDashboard';

function App() {
  
useEffect(() => {
  AOS.init({ duration: 1000 }); 
}, []);
  const userData = {
    name: "Md Tauqueer Manzar",
    location: "Hyderabad, India",
    profilePicture: photo, // Replace with actual URL
    reviews: 10,
    photos: 5,
    followers: 200,
  };


  return (
    <>
    <Router>
    <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/profile' element={<Profile user={userData}/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </Router>
    </>
  )
}

export default App
