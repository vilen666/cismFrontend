import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Pages/home/Index';
import Courses from './Pages/courses/Courses';
import {Login,Register,Portal,Logout} from './Pages/admin/Admin';
import Campus from './Pages/campus/Campus';
import Placement from './Pages/placement/Placement';
import Contact from './Pages/contact/Contact';
import About from './Pages/about/About';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/campus' element={<Campus/>}/>
        <Route path='/placement' element={<Placement/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/admin/register' element={<Register/>}/>
        <Route path='/admin/portal' element={<Portal/>}/>
        <Route path='admin/logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App