// import logo from './logo.svg';
import './App.css';
// import {link} from 'react-router-dom';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import {Home} from './pages/home';
import {Contact} from './pages/contact';
import {About} from './pages/about';
import { Service } from './pages/service';
import { Login } from './pages/login';
import { Register } from './pages/registration';
import { Navbar } from './component/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  // const Navigate = useNavigate();
  return (
    < BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="bg-black h-10 text-white flex  ">

    //   <h1>LOGO</h1>
    //    <div className=" text-white px-6"> 

    //   <a href="/" className="m-2">contact</a>
    //   <a href="/" className="m-2">contact</a>
    //   <a href="/" className="m-2">contact</a>
    //   <a href="/" className="m-2">contact</a>
    //   <a href="/" className="m-2">contact</a>
    //    </div>
    // </div>


  );
}

export default App;
