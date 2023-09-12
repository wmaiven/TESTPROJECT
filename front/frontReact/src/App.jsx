import { useState } from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './App.css';


function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet />
      </div>
    
    </>
  )
}

export default App
