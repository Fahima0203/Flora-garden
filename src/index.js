import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantDetailsForm from './Components/PlantDetailsForm';
import PlantsDisplay from './Components/PlantsDisplay';
import Login from './Components/Login';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Signuppage from './Components/Signuppage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path='/' element={<Navbar />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path="/PlantsDisplay" element={<PlantsDisplay />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignIn" element={<Signuppage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/PlantDetailsForm" element={<PlantDetailsForm />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();