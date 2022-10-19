import Home_Pic_1 from './Media/Home_Pic_1.png';
import Home_Pic_2 from './Media/Home_Pic_2.png';
import Home_Pic_3 from './Media/Home_Pic_3.png';

import Home_Pic_4 from './Media/Home_Pic_4.png';


import adx_icon from './adx_icon.jpeg';

import Packages from './Components/Packages.js'
import AboutUs from './Components/AboutUs.js'
import ContactUs from './Components/ContactUs.js';

import IntroductionVideo from './Media/IntroductionVideo.mp4';
import TURNTABLEVIDEOELRIC from './Media/TURNTABLEVIDEOELRIC.mp4';
import airpodsskin from './Media/airpodsskin.mp4';

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
import SimpleImageSlider from "react-simple-image-slider";

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
      <div className='container' id="home">
        <div className='buttons'>
        <div className='headerbuttonalin'>
          <img className='headericon' style={{ height:"50px",width:"70px"}} src={adx_icon}></img>
              <li className='headerhei'><a className="headerbutton" href='/#'>
                Home
                </a>
            </li> 
            <li className='headerhei'><a className="headerbutton" href='#packages'>
                Our Services
                </a>
            </li>
            <li className='headerhei' ><a className="headerbutton" href='#aboutus'>
                About Us
                </a>
            </li>
            <li className='headerhei' ><a className="headerbutton" href='#contactus'>
                Contact Us
                </a>
            </li>
            </div>
        </div>
    </div>
     <video autoPlay loop muted disablepictureinpicture position="relative" width="100%" height="50%" objectFit="cover">
       <source src={IntroductionVideo} type="video/mp4"/>
     </video>
     <section>
      <div className="welcomeText">
        <h1 className="heading1">Welcome to ADX-3D</h1>
        <h2 className="heading2">We help clients<span>Create </span><span>Design</span><span>Visualize</span></h2>
        
      </div>
     </section>
      <SimpleImageSlider
        width={1366}
        height={667}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <section>
        <div className='rendorApplicationtext'>
          <h1>Where You Can Use It!</h1>
        </div>
      </section>

      <section>
      <div className='main-img1'>
      <img  src={Home_Pic_1} />
      <h3>The shopfront for many online business has to create impact for the viewer, otherwise the ssale could be lost instantly. With the use of 3D rendering visually plleaseing images can pull this off easily.</h3>
      </div>

      <div className='main-img2'>
         <h3>With social media avertising,you can have consistent sales coming in from the first dayyour website is live.3D rendering plays a huge part in catching a consumers eye while scrolling.</h3>
      <img  src={Home_Pic_2} />
     
      </div>
      </section>

      <div className='main-img3'>
      <img  src={Home_Pic_3} />
      <h3>With the power of 3d rendering stunning images can be used for printing magazines and newspaper.</h3>
      </div>

      <div className='main-img5'>
      <h3>Give your brand the attention it deserves with a dominating image.Create maximum impact with our 3D Rendering services for billboard ad words.</h3>
      <img  src={Home_Pic_4} />
     
      </div>

      <div className='Discriptionvideo'>
      <video autoPlay loop muted disablepictureinpicture position="relative" width="100%" height="50%" objectFit="cover">
       <source src={TURNTABLEVIDEOELRIC} type="video/mp4"/>
     </video>
      </div>
      
     {/* <video autoPlay loop muted style={{ position:"relative",width:"100%",height:"50%",objectFit:"cover"}}>
       <source src={airpodsskin} type="video/mp4"/>
     </video> */}
      <div>

      <a className="gotopbtn" href="#"><h1 className='arrow'>^</h1><i class="fas fa-arrow-up"></i> </a>
      <section className="servicesHeading">
                    <h1>Our Services</h1>
                </section>
      <Packages></Packages>
      </div>
       <AboutUs></AboutUs>
       <div>
       <ContactUs></ContactUs>
       </div>
       
    </div>
    
  )


}

export default Home;