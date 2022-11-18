import Home_Pic_1 from './Media/Home_Pic_1.png';
import Home_Pic_2 from './Media/Home_Pic_2.png';
import Home_Pic_3 from './Media/Home_Pic_3.png';

import Home_Pic_4 from './Media/Home_Pic_4.png';

import { AiFillCaretUp } from "react-icons/ai";


/* import ADXlogo from './ADXlogo.png'; */

import Packages from './Components/Packages.js'
import AboutUs from './Components/AboutUs.js'
import ContactUs from './Components/ContactUs.js';

import IntroductionVideo from './Media/IntroductionVideo.mp4';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

import TURNTABLEVIDEOELRIC from './Media/TURNTABLEVIDEOELRIC.mp4';
/* import airpodsskin from './Media/airpodsskin.mp4'; */

import slide01 from './Media/slider/slide01.jpg';
import slide02 from './Media/slider/slide02.jpg';
import slide03 from './Media/slider/slide03.jpg';
import slide04 from './Media/slider/slide04.jpg';
import slide05 from './Media/slider/slide05.jpg';
import slide06 from './Media/slider/slide06.jpg';
import slide07 from './Media/slider/slide07.jpg';
import slide08 from './Media/slider/slide08.jpg';
import slide09 from './Media/slider/slide09.jpg';
import slide10 from './Media/slider/slide10.jpg';


import './Home1.css';
import Navbar from './Components/Navbar/Navbar';

/* import {motion} from 'framer-motion'; */

const images = [
  { url: slide01 },
  { url: slide02 },
  { url: slide03 },
  { url: slide04 },
  { url: slide05 },
  { url: slide06 },
  { url: slide07 },
  { url: slide08 },
  { url: slide09 },
  { url: slide10 },

];



const Home = () => {

 

  return (
    
    <div>

    <Navbar />

     <video autoPlay loop muted disablepictureinpicture position="relative" width="100%" height="30%" objectFit="cover">
       <source src={IntroductionVideo} type="video/mp4"/>
     </video>
    
      <div className="welcomeText">
        <h1 className="heading1">Welcome to ADX-3D</h1>
        <h2 className="heading2">We help clients <span>Create , </span><span>Design , </span><span>& Visualize !</span></h2>
      </div>

      <Carousel infiniteLoop autoPlay>
        <div className='image'>
          <img src={slide01}></img>
          
        </div>
        <div className='image'>
          <img src={slide02}></img>
          
        </div>
        <div className='image'>
          <img src={slide03}></img>
          
        </div>
        <div className='image'>
          <img src={slide04}></img>
          
        </div>
        <div className='image'>
          <img src={slide05}></img>
          
        </div>
        <div className='image'>
          <img src={slide06}></img>
          
        </div>
        <div className='image'>
          <img src={slide07}></img>
          
        </div>
        <div className='image'>
          <img src={slide08}></img>
          
        </div>
        <div className='image'>
          <img src={slide09}></img>
          
        </div>
        <div className='image'>
          <img src={slide10}></img>
          
        </div>
      </Carousel>
      <section>
        <div className='rendorApplicationtext'>
          <h1>Where You Can Use It!</h1>
        </div>
      </section>

      <section className='main-img'>
      <div className='main-img1'>
        <img  src={Home_Pic_1} />
        <div className='main-img-content'>
          <h1 className='imageheading1'>for Website</h1>
          <p className='imagecontent'>
            The shopfront for many online business has to create impact for the viewer, otherwise the ssale could be lost instantly. 
            With the use of 3D rendering visually plleaseing images can pull this off easily.
          </p>
        </div>
        
      </div>
      

      <div className='main-img2'>
        <div className='main-img-content'>
        <h1 className='imageheading1'>for social media</h1> 
        <p className='imagecontent'>With social media avertising,
        you can have consistent sales coming in from the first dayyour website is live.
        3D rendering plays a huge part in catching a consumers eye while scrolling.</p>
        </div>
      
         
      <img  src={Home_Pic_2} />
     
      </div>
      </section>

      <div className='main-img3'>
      <img  src={Home_Pic_3} />
      <div className='main-img-content'>
      <h1 className='imageheading1'>for user manual</h1>
      <p className='imagecontent'>With the power of 3d rendering stunning images can be used for 
          printing magazines and newspaper.</p>
      </div>
      
      </div>

      <div className='main-img5'>
      <div className='main-img-content'>
      <h1 className='imageheading1'>for billboards</h1>
      <p className='imagecontent'>Give your brand the attention it deserves with a dominating image.
          Create maximum impact with our 3D Rendering services for billboard ad words.</p>
      </div>
      <img  src={Home_Pic_4} />
     
      </div>

      <div className='Discriptionvideo'>
      <video autoPlay loop muted disablepictureinpicture position="relative" width="100%" height="50%" objectFit="cover">
       <source src={TURNTABLEVIDEOELRIC} type="video/mp4"/>
     </video>
      </div>
    
      <a className="gotopbtn" href="#">{/* <h1 className='arrow'>^</h1> */}<AiFillCaretUp/></a>
      <section className="servicesHeading">
                    <h1>Our Services</h1>
                </section>
      <Packages></Packages>
       <AboutUs></AboutUs>
       <div>
       <ContactUs></ContactUs>
       </div>
       
    </div>
    
  )


}

export default Home;