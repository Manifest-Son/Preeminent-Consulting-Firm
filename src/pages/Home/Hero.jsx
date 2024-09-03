import React from 'react'
import './Home.css'

function Hero() {
  return (
    <React.Fragment>
        <section className='hero_section'>
                <div className='hero_wrapper'>
                    <div className='hero_right'></div>
                    <div className='hero_left'></div>
                    <div className='hero_content'>
                        <h1>Pre-Eminent Consulting Limited</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem culpa sed dignissimos? Aperiam cumque fugit doloremque quisquam vel amet.</p>
                        <button>About Us &rarr;</button>
                    </div>
                </div>
        </section>
    </React.Fragment>
  )
}

export default Hero