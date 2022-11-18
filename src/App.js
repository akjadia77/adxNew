import './App.css';
import React from 'react';
import Home from './Home.js';
import Packages from './Components/Packages.js';
import AboutUs from './Components/AboutUs.js';
import Form from './Components/Form.js';
import ContactUs from './Components/ContactUs.js';

//import Header from './Components/Header.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

  
  return (
    <>
  
    <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Packages" element={<Packages></Packages>}>

          </Route>
          <Route path="/AboutUs" element={<AboutUs></AboutUs>}>

          </Route>

          <Route path="/ContactUs" element={<ContactUs></ContactUs>}>

          </Route>
          <Route path="/Form" element={<Form></Form>}>

          </Route>

          
        </Routes>
        </Router>
      
      
      
    </>
  );
}

export default App;
