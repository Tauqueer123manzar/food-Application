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
import './App.css'
function App() {

  return (
    <>
    <Router>
    <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/polciy' element={<Policy/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
