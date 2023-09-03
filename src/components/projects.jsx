import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { useState } from 'react';


const Projects = ({ theme }) => {

    useEffect(() => {
        window.initProjectCarousel();
    },[])

    const [angle, setAngle] = useState(0);

    const rotateRight = () => {
        setAngle(angle + 45);
    }

    const rotateLeft = () => {
        setAngle(angle - 45);
    }

    return (
        <section id="projects">
            <div className="container">
                <div className="row">
                    <h3 className='heading-secondary' onClick={rotateLeft}>MY WORKS</h3>
                    <h1 className='heading-primary' onClick={rotateRight}>PROJECTS..</h1>
                    <p className='text-1'>
                        Following projects showcases my skills and experience through rea-world examples of my work. Each project is briefly described with links to code repositories and live demos in it.
                        It reflects my ability to solve complex problems, work with different technologies and manage project effectively.
                    </p>
                </div>
                {/* <div className="row d-flex justify-content-center align-items-center slider-container">
                    <div className="slider-box" style={{transform: `perspective(2000px) rotateX(-3deg) rotateY(${angle}deg)`}}>
                        <div className="rotating-block">
                            <div className="project one" style={{'--i': 1}}>
                                
                            </div>
                            <div className="project two" style={{'--i': 2}}>
                                
                            </div>
                            <div className="project three" style={{'--i': 3}}></div>
                            <div className="project four" style={{'--i': 4}}></div>
                            <div className="project one" style={{'--i': 5}}></div>
                            <div className="project two" style={{'--i': 6}}></div>
                            <div className="project three" style={{'--i': 7}}>
                            <p className='text-1' style={{fontSize: '1rem'}}>
                                Following projects showcases my skills and experience through rea-world examples of my work. Each project is briefly described with links to code repositories and live demos in it.
                                It reflects my ability to solve complex problems, work with different technologies and manage project effectively.
                            </p>
                            </div>
                            <div className="project four" style={{'--i': 8}}>
                                <img className='img-fluid' src='assets/img/projects/gbooksIn.png' alt='project' />
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='row'>
                    <div className="carousel">
                        <div className="carousel-item">
                            <img src="assets/img/projects/sarsuna.jpg" alt='project'/>
                            <div className='card-content'>
                                <h4>Sarsuna College</h4>
                                <p>This is a college website I've worked on. It uses ASP.NET framework but only the frontend part is made by me. I have no involvement in it's backend stuff. uses bootstrap, jQuery</p>
                                <div className='tech'>
                                    <button className='btn' style={{'--clr': '#e96228' }}>html/css</button>
                                    <button className='btn' style={{'--clr': '#31a4d5' }}>javascript</button>
                                    <button className='btn' style={{'--clr': '#6c15e3' }}>bootstrap</button>
                                    <button className='btn' style={{'--clr': '#e9b824' }}>jquery</button>

                                </div>
                            </div>
                            <Link to='#'>Visit site</Link>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/projects/gbooksIn.jpg" alt='project'/>
                            <div className='card-content'>
                                <h4>Gbooks India</h4>
                                <p>It is the landing page for a software firm called Gbooks Infotech private limited. untill now it is single page website made with libraries like bootstrap, jquery, owl-carousel and threeJs.</p>
                                <div className='tech'>
                                    <button className='btn' style={{'--clr': '#e96228' }}>html/css</button>
                                    <button className='btn' style={{'--clr': '#31a4d5' }}>javascript</button>
                                    <button className='btn' style={{'--clr': '#6c15e3' }}>bootstrap</button>
                                    <button className='btn' style={{'--clr': '#e9b824' }}>jquery</button>

                                </div>
                            </div>
                            <Link to='#'>Visit site</Link>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/projects/gbooksCom.jpg" alt='project'/>
                            <div className='card-content'>
                                <h4>Gbooks</h4>
                                <p>Appointment booking website, where users can register and login to book medical appointments with doctors. Build using react with redux and uses APIs in it's backend for the process.</p>
                                <div className='tech'>
                                    <button className='btn' style={{'--clr': '#e96228' }}>react</button>
                                    <button className='btn' style={{'--clr': '#31a4d5' }}>redux</button>
                                    <button className='btn' style={{'--clr': '#e9b824' }}>api</button>
                                    <button className='btn' style={{'--clr': '#6c15e3' }}>react-bootstrap</button>

                                </div>
                            </div>
                            <Link to='#'>Visit site</Link>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/projects/epharma.jpg" alt='project'/>
                            <div className='card-content'>
                                <h4>E - Pharma</h4>
                                <p>E-commerce website made with react and redux. users register and login to place orders. It uses APIs in it's backend also uses libraries like axios, react-bootstrap, react-alice-crousel</p>
                                <div className='tech'>
                                    <button className='btn' style={{'--clr': '#e96228' }}>react</button>
                                    <button className='btn' style={{'--clr': '#31a4d5' }}>redux</button>
                                    <button className='btn' style={{'--clr': '#e9b824' }}>api</button>
                                    <button className='btn' style={{'--clr': '#6c15e3' }}>react-bootstrap</button>
                                </div>
                            </div>
                            <Link to='#'>Visit site</Link>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/projects/tracker.jpg" alt='project'/>
                            <div className='card-content'>
                                <h4>Tracker App</h4>
                                <p>A simple clone of Google maps made using react-leaflet. uses gps to track users location in real-time also can save marked locations in internal storage. working to connect it with a simple database.</p>
                                <div className='tech'>
                                    <button className='btn' style={{'--clr': '#e96228' }}>react</button>
                                    <button className='btn' style={{'--clr': '#e9b824' }}>react-leaflet</button>
                                    <button className='btn' style={{'--clr': '#f739a8' }}>sass</button>
                                    <button className='btn' style={{'--clr': '#6c15e3' }}>react-bootstrap</button>

                                </div>
                            </div>
                            <Link to='#'>Visit site</Link>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/projects/rkva.jpg" alt='project'/>
                            <div className='card-content'>
                                <h4>Ramkrishna Vedanta</h4>
                                <p>Website for Ramkrishna Vedanta Ashram. It is built using ASP.NET framework but only the frontend part is made by me. it is made with html, css, javascript, bootstrap and jQuery</p>
                                <div className='tech'>
                                    <button className='btn' style={{'--clr': '#e96228' }}>html/css</button>
                                    <button className='btn' style={{'--clr': '#31a4d5' }}>javascript</button>
                                    <button className='btn' style={{'--clr': '#6c15e3' }}>bootstrap</button>
                                    <button className='btn' style={{'--clr': '#e9b824' }}>jquery</button>
                                </div>
                            </div>
                            <Link to='#'>Visit site</Link>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/projects/gbooksCom.jpg" alt='project'/>
                            <div className='card-content'>
                                <h4>Appointment Booking</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                                <div className='tech'>
                                    <button className='btn' style={{'--clr': '#e96228' }}>react</button>
                                    <button className='btn' style={{'--clr': '#31a4d5' }}>redux</button>
                                    <button className='btn' style={{'--clr': '#e9b824' }}>api</button>
                                    <button className='btn' style={{'--clr': '#6c15e3' }}>react-bootstrap</button>

                                </div>
                            </div>
                            <Link to='#'>Visit site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToOverview = (state) => {
    return { theme: state.theme };
}

export default connect(mapStateToOverview, {})(Projects);