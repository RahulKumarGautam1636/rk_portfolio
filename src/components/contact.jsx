// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { useState } from 'react';


const Contact = ({ theme }) => {

    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <h3 className='heading-secondary' data-aos="fade-right"> GET IN TOUCH</h3>
                    <h1 className='heading-primary' data-aos="fade-left" data-aos-delay='200'>CONTACT ME..</h1>
                    <p className='text-1' data-aos='fade-up' data-aos-delay='350'>
                        Following Contact showcases my skills and experience through rea-world examples of my work. Each project is briefly described with links to code repositories and live demos in it.
                        It reflects my ability to solve complex problems, work with different technologies and manage project effectively.
                    </p>
                </div>

                <div className='row row-cols-1 row-cols-md-2 px-2'>
                    <div className='col contact-details'>

                    </div>
                    <div className='col contact-mockup d-flex justify-content-center align-items-center'>
                        <div class="circle">
                            <img className='mobile-mockup img-fluid' src='assets/img/mobile_mockup.png' alt='mobile-mockup'/>
                            <span class="circle__btn"></span>
                            <span class="circle__back-1"></span>
                            <span class="circle__back-2"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToContact = (state) => {
    return { theme: state.theme };
}

export default connect(mapStateToContact, {})(Contact);