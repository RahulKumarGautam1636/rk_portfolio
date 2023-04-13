import { useEffect } from "react";
import EarthCanvas from "./canvas/earthCanvas";
import CountUp from 'react-countup';
import StarsCanvas from "./canvas/Stars";
import { connect } from "react-redux";

const EarthSection = ({ theme }) => {

useEffect(() => {
    window.isInViewListener();
},[])

    return (
        <section id="earth-section" className='section-padding' style={{background: theme === 'dark-theme' ? '#140c3d' : 'var(--bg-primary-2)'}}>
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col col-12 col-lg-8" data-aos="fade-right" data-aos-delay='300' style={{minHeight: '60rem'}}>
                        <EarthCanvas/>
                    </div>
                    <div className="col col-12 col-lg-4">
                        <div className="row flex-column align-items-center align-items-lg-start">
                            <div className="left-block" style={{zIndex: 1}}>
                                <div className="mb-4" id="job-card-1">
                                    <div id="job-card-1-count" style={{border: '10px solid #85DCFF'}}><CountUp end={20} enableScrollSpy scrollSpyDelay={1000}/></div>
                                    <h4>Jobs Done Successfully</h4>
                                </div>
                                <div id="job-card-2" style={{background: '#FFD9A7', marginTop: '11.5rem'}}>
                                    <div id="job-card-2-count"><CountUp end={30} enableScrollSpy scrollSpyDelay={1000}/></div>
                                    <h4>Jobs Done Successfully</h4>
                                </div>
                            </div>
                            <button style={{margin: '8rem 0 3rem 0'}} className="btn btn-lg btn-info text-white btn-hireMe" type="button" name="button">Download CV</button>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            {theme === 'dark-theme' && <StarsCanvas/>}
        </section>
    )
}


const mapStateToHeader = (state) => {
    return { theme: state.theme };
}

export default connect(mapStateToHeader, {})(EarthSection);