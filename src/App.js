import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar1 from './components/Navbar/Navbar1';
import Footer1 from './components/Footer/Footer1';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './Routes/Home'
import AboutRoutes from './Routes/AboutRoutes';
import CardContainerRoutes from './Routes/CardContainerRoutes';
import ProductRoutes from './Routes/ProductRoutes';
import CartRoutes from './Routes/CartRoutes';


function App() {

return(
  <>

      <Navbar1 />

      <Routes>
      <Route path="/" element={<Navigate to={"/home"}></Navigate>} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<AboutRoutes />} />
      <Route path="products" element={<CardContainerRoutes />} />
      <Route path="cart" element={<CartRoutes />} />
      <Route path="/products/:id" element={<ProductRoutes/>} />

      </Routes>

      <Footer1/>

      </>
  );
}

export default App;
