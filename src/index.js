import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buttons from './components/Buttons';
import Dashboard from './Dashboard';
import Cards from './components/Cards';
import Login from './components/Login';
import Register from './components/Register';
import ForgetPassword from './components/ForgetPassword';
import Color from './components/Color';
import Error from './components/Error';
import BlankPage from './components/BlankPage';
import Borders from './components/Borders';
import Animations from './components/Animations';
import Others from './components/Others';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Dashboard />} />
        <Route path='/buttons' element={<Buttons />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/color' element={<Color />} />
        <Route path='/error' element={<Error />} />
        <Route path='/blank' element={<BlankPage />} />
        <Route path='/borders' element={<Borders />} />
        <Route path='/animations' element={<Animations />} />
        <Route path='/others' element={<Others />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

