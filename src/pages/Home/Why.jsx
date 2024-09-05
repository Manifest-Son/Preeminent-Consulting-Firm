import React from 'react'
import './Home.css'
import whyImg from "../../assets/image.jpg"
import SectionHeader from '../../components/SectionHeader/SectionHeader'
// import { PropTypes } from 'prop-types'

// eslint-disable-next-line react/prop-types
function DisplayWhy({Img, description}){
    return(
       <React.Fragment>
        <section className= "why_container">
            <img src={Img} alt="" />
            <p>{description}</p>
        </section>
       </React.Fragment> 
    )
}

function Why(){
    return(
        <>
        <section className='why_section'>
            <SectionHeader headerName='Why Us?' />
        <div className="why_wrapper">
        <DisplayWhy Img= {whyImg} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium."} />
        <DisplayWhy Img= {whyImg} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium."} />
        <DisplayWhy Img= {whyImg} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium."} />
        <DisplayWhy Img= {whyImg} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium."} />
        </div>
        </section>
        </>
        
    )
}

export default Why