import './ContactUs.css'
import GetInTouch from './GetInTouch.jpg'
import { SocialIcon } from 'react-social-icons';


const ContactUs = () => {
    return(
        <section id="contactus">
            <h1 className='contactUsheading'>Contact Us</h1>
                <div className='contactUsContant'>
                    <h1>GET IN TOUCH</h1>
                   
                    <h1>-</h1>
                    <h2>OFFICE</h2>
                    <h3>Snahdeep Apartment,Indrapuri Colony</h3>
                    <h3>Bhwarkua Indore , 452001</h3>

                    <h2>EMAIL</h2>
                    <a href='mailto:service@adx-3d.com'>service@adx-3d.com</a>
                    <a href='https://wa.me/9630201241' target="_blank">whatsapp Me</a>
                    <SocialIcon  url="https://twitter.com/" target="_blank" />
                    <SocialIcon  url="https://facebook.com/" target="_blank" />
                    <SocialIcon  url="https://instagram.com/" target="_blank" />
                    <img className='contactUsPic' src={GetInTouch}></img>

                </div>
        </section>
    )
}

export default ContactUs;