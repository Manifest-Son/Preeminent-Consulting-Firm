import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

function About(){
    return(
        <React.Fragment>
            <section className='about_section'>
                <SectionHeader headerName="About Us" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde necessitatibus eius culpa rem illum voluptate distinctio architecto, dolor, minus eligendi, itaque tempore! Accusamus veritatis quisquam quo itaque, tenetur, provident saepe ipsam eos laboriosam velit numquam unde ut! Nulla, vero.</p>
                <p>Our stakeholders: </p>
                <ol>
                        <li>Business Clients</li>
                        <li>Government Agencies</li>
                        <li>Nonprofits and NGOs</li>
                        <li>Environmental Enthusiasts</li>
                    </ol>
                <button>Learn More &rarr;</button>
            </section>
        </React.Fragment>
    )
}
export default About