import Phone from './Phone.jfif'
import Jewellery from './Jewellery.jpg'
import Chair from './Chair.jpeg'
import './Packages.css'
import React from 'react';
import CokeZero3D from './CokeZero3D.mp4'
/* import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp'; */
//import { useNavigate } from "react-router-dom";
//import Form from './Form.js';


function Packages() {
    //let navigate = useNavigate();
    const routeChange = () => {
        let path = "https://docs.google.com/forms/d/e/1FAIpQLSdoGPWwi2lkWFjDLfc9XOE6l2f7uDJeh1rDNbLMbv9MFUC1kg/viewform?usp=sf_link";
        //navigate(path);
        window.open(path);
    }

    return (
        <div className='main_container'>
            <button className='getfreetrial' onClick={routeChange}>GET FREE TRIAL !</button>
            <div className="Package-Containner" id="packages">

                
                <div className='cart'>
                <div className='Packageheader'> </div>
                <div className='PackageheaderText'></div>
                <h1>Product Rendering</h1>
                    <img className='packagePic1' src={Phone}></img>
                                 
                    <button className="packagePic1Button" onClick={routeChange}>Contact Us {'>'}{'>'}</ button>

                </div>

                <div className='cart'>
                    <div className='Packageheader'></div>
                    <div className='PackageheaderText'></div>
                    <h1>Furniture Rendering</h1>
                
                    <img className='packagePic2' src={Chair}></img>
                   
                    <button className="packagePic1Button" onClick={routeChange}>Contact Us {'>'}{'>'}</button>
                </div>
 
                <div className='cart'>
                <div className='Packageheader'></div>
                <div className='PackageheaderText'></div>
                <h1>Jewellery Rendering</h1>
                
                    <img className='packagePic3' src={Jewellery}></img>
                    
                    <button className='packagePic1Button' onClick={routeChange}>Contact Us {'>'}{'>'}</button>
                </div>

            </div>

            <div className="cart">
            <div className='Packageheader'> </div>
            <div className='PackageheaderText'></div>
            <h1>Turn Table animation</h1>
            <button className='packagePic1Button' onClick={routeChange}>Contact Us {'>'}{'>'}</button>
            <div className='videocontainer'>
           
                <video autoPlay loop muted position="relative" width="620" height="320px" objectFit="scale-down" src={CokeZero3D}></video>
                </div>
                
            </div>
        </div>

    )
}




export default Packages