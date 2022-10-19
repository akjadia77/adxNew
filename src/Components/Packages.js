import Phone from './Phone.jfif'
import Belt from './Belt.jpg'
import Jewellery from './Jewellery.jpg'
import Chair from './Chair.jpeg'
import './Packages.css'
import React from 'react';
import CokeZero3D from './CokeZero3D.mp4'
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
//import { useNavigate } from "react-router-dom";
//import Form from './Form.js';


function Packages()  {
    //let navigate = useNavigate();
    const routeChange = () =>{
        let path = "https://docs.google.com/forms/d/e/1FAIpQLSdoGPWwi2lkWFjDLfc9XOE6l2f7uDJeh1rDNbLMbv9MFUC1kg/viewform?usp=sf_link";
        //navigate(path);
        window.open(path);
      }

    return (
        <div>
            
        <div className="Package-Containner" id="packages">
            
        
            <div>
            <a className="packagePic1Button" onClick={routeChange}>Get Quate</a>
            <img className='packagePic1' src={Phone}></img>
            
            </div>
           
            <div>
            <img className='packagePic2' src={Chair}></img>
            <button className="packagePic2Button" onClick={routeChange}>Get Quate</button>
            </div>
            
            <div>
            <img className='packagePic3' src={Jewellery}></img>
            <button className='packagePic3Button' onClick={routeChange}>Get Quate</button>
            </div>

            </div>

            <div className="videoDiv">
            <video autoPlay loop muted disablepictureinpicture position="relative" width="620" height="320px" objectFit="scale-down" src={CokeZero3D}></video>
            <button className='packageButton' onClick={routeChange}>Get Free Trial</button>
            </div>

        </div>
    )
}




export default Packages