import './ContactUs.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const ContactUs = () => {

      
    return (

        <section className='contactus' id="contactus">
            <h1>CONTACT US</h1>
            <div className="containers contact_container">
                <h1>Get In Touch</h1>
                <p>Something here</p>
            <FaFacebook />
            <FaInstagram/>
            <FaWhatsapp/>
            </div>
        </section>
    )
}

export default ContactUs;