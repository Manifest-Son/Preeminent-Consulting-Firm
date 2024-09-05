import React from 'react'
import "./Home.css"
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import img from "../../assets/image.jpg"

// eslint-disable-next-line react/prop-types
function DisplayOfferings({natureImg, heading, text, reverse}) {
  return (
    <React.Fragment>
        <div className={`${reverse == true ? "offer_wrapper_reverse" : "offer_wrapper"}`}>
            <div className="offering_img">
            <img src={natureImg} alt="Environmental Impact image" />
            </div>
            <div className={`${reverse == true ? "offering_text_reverse" : "offering_text"}`}>
            <h1>{heading}</h1>
            <p>{text}</p>
            <button>Learn More</button>
            </div>
        </div>     
    </React.Fragment>
  )
}

function Offerings(){
    const offering = [
        {
            natureImg: img,
            heading: 'Environmental Impact Assessment',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium. Suspendisse facilisis pretium lectus in dapibus.',
            reverse: false
        },
        {
            natureImg: img,
            heading: 'Geographic Information System',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium. Suspendisse facilisis pretium lectus in dapibus.',
            reverse: true
        },
        {
            natureImg: img,
            heading: 'ICT Solutions for environment',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium. Suspendisse facilisis pretium lectus in dapibus.',
            reverse: false
        },
        {
            natureImg: img,
            heading: 'Management Consulting',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium. Suspendisse facilisis pretium lectus in dapibus.',
            reverse: true
        },
        {
            natureImg: img,
            heading: 'Environmental Consulting',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus enim eu libero tincidunt, non congue elit pretium. Suspendisse facilisis pretium lectus in dapibus.',
            reverse: false
        }
    ]
    return(
        <>
        <section>
        <SectionHeader headerName="Offerings" />
        {offering.map((current, i) => (
            <DisplayOfferings 
            key = {i}
            natureImg={current.natureImg}
            heading={current.heading}
            text={current.text}
            reverse={current.reverse}
            />
        ))}
        </section>
        </>
    )
}
export default Offerings