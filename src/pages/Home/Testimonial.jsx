import React from 'react'
import './Home.css'
import { FaStar } from "react-icons/fa6";
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import johnImg from '../../assets/john.jpg'
import PropTypes from 'prop-types'

function DisplayTestimonial({customerImg, customerText, customerName}) {
  return (
    <React.Fragment>
        <section>
            <div className="testimony_wrapper">
                <img src={customerImg} alt="" />
                <div className="testimony_content">
                    <p>{customerText}</p>
                    <div className="testimony_response">
                        <p>{customerName}</p>
                        <div className='ratings'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
DisplayTestimonial.propTypes = {
    customerImg: PropTypes.string,
    customerName: PropTypes.string,
    customerText: PropTypes.string
}

function Testimonial(){
    const testimonial = [
        {
            customerImg: johnImg,
            customerName: "Lennox Githinji",
            customerText: ""
        }
    ]
    return(
        <>
        <section>
        <SectionHeader headerName='Testimonials' />

        </section>
        </>
    )
}
export default Testimonial