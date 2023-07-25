import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import SignUp_Login from './SignUp_Login';
import Slider from './Slider';
import Product from './product'
import Electronics from './Electronics'
import Footer from './Footer';
import Clothes from './Clothes';
import Jewellery from './Jewellery';
import Yourprofile from './Yourprofile';
import Addtocard from './Addtocard';
import Dark from './Dark';






const root = ReactDOM.createRoot(document.getElementById('root'));
// const [abc, setval] = useState("")

const setsearchval = (val) => {
  console.log(val)
}



root.render(
  <BrowserRouter>
    <Header val={setsearchval} />
    <Slider />
    <Routes>
      <Route path="/" element={<Product val={setsearchval} />} ></Route>
      <Route path="/Electronics" element={<Electronics />} ></Route>
      <Route path="/Clothes" element={<Clothes />} ></Route>
      <Route path="/Jewellery" element={<Jewellery />} ></Route>
      <Route path="/SignUp_Login" element={<SignUp_Login />} ></Route>
      <Route path="/Dark" element={<Dark />} ></Route>
      <Route path="/Yourprofile" element={<Yourprofile />} ></Route>
      <Route path="/Addtocard" element={<Addtocard />} ></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
