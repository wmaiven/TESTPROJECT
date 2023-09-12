import { useState } from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <div>
        <h1>oi</h1>
        <Outlet />
      </div>
    
    </>
  )
}

export default App
