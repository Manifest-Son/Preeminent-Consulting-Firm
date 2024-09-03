import React from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import { IoMenu } from "react-icons/io5";
// import { TfiClose } from "react-icons/tfi";

function Header() {
  return (
    <React.Fragment>
        <section className='header_section'>
            <div className='top_header'>
                <div className='header_contact'><FaLocationDot/> <p>Murang&#39;a Towers, Murang&#39;a Town</p> </div>
                <div className='header_contact'><FaPhone /><p>+2547123456789</p> </div>
                <div className='header_contact'><IoMdMail /><p>info@preeminentltd.com</p></div>
            </div>
            <div className="bottom_header">
                <h1>PRE-EMINENT</h1>
                <nav>
                    <ol className='header_nav'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Resources</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ol>
                </nav>
                <button>Inquire</button>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Header