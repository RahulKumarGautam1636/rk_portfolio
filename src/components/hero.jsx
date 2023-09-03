import { useEffect, useState } from 'react';
import { connect } from 'react-redux';


const Hero = ({ theme }) => {

    useEffect(() => {
      window.init_Tilt();
    },[])

    const [isCanvasInitialised, setCanvasInitialised] = useState(false);            // using to check if canvas is already rendered to avoid adding multiple same canvas. 
    useEffect(() => {
      if (theme === 'dark-theme' && isCanvasInitialised === false) {
        window.renderCanvas();
        setCanvasInitialised(true);
      }
    },[theme, isCanvasInitialised])  

    return (
        <section id="hero" data-scroll-section className="position-relative">
         {/* <canvas id="canvas" style={{position: absolute; top: 0; left: 0; cursor: none}}></canvas>  */}
        <div id='test' className="world"></div>
        <div className="hero-container container">
          <div className="row row-cols-1 row-cols-md-2 px-2" style={{zIndex: 2}}>
            <div className="order-2 order-md-1 col d-flex flex-column justify-content-center align-items-start pb-5 mt-5 mt-lg-0 position-relative">
              {/* <img id="emojiSmily" className="floating-image" src="assets/img/emojiSmily.png" alt="emojiSmily"/>  */}
              <h1 className='heading-primary'>Hy! I Am<br/>
                R. K. Gautam</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. Lorem Ipsum has been the. Lorem Ipsum has been the.</p>
              <button id="hireMe" className="btn btn-lg btn-info text-white btn-hireMe pe-auto moveInBottom" type="button" name="button">Hire Me</button>
            </div>
            <div id="hero-image" className="order-1 order-md-2 col d-flex justify-content-center align-items-center position-relative" style={{transformStyle: 'preserve-3d'}}>
              <img src="assets/img/hero.png" alt="hero_image" style={{WebkitBoxReflect: 'below 1px linear-gradient(transparent, transparent, transparent, transparent, #0004)'}}/>
              <div id="insta" className="rounded-img-box">
                <img className="img-fluid w-100" src="assets/img/instagram.png" alt="instagram"/>
              </div>
              <div id="Twitter" className="rounded-img-box p-1">
                <img className="img-fluid w-100" src="assets/img/Twitter.png" alt="twitter"/>
              </div>
              <div id="google" className="rounded-img-box p-2">
                <img className="img-fluid w-100" src="assets/img/google.png" alt="google"/>
              </div>
              <div id="blue" className="round-background "></div>
              <div id="red" className="round-background two "></div>
              <div id="float-front" className="floating-tag" style={{transform: 'translateZ(30px)'}}>
                <p className="m-0">Lorem ipsum is simply</p>
              </div>
              <div id="float-back" className="floating-tag" style={{transform: 'translateZ(-30px)'}}>
                <p className="m-0">Lorem ipsum is simply</p>
              </div>
            </div>
          </div>
        </div>
        {/* {theme === 'dark-theme' && <HeroCanvas theme={theme}/>} */}
        <div id="heroCanvas" className={theme === 'light-theme' ? 'pe-none' : ''} style={{zIndex: -5}}></div>
        <div id="heroBG" className={theme === 'light-theme' ? 'active' : ''}></div>
    </section>
    )
}


const mapStateToHero = (state) => {
  return { theme: state.theme };
}

export default connect(mapStateToHero, {})(Hero);



// const HeroCanvas = ({ theme }) => {

//   useEffect(() => {
//     if (theme === 'dark-theme') {
//       window.renderCanvas();
//     }
//   },[theme])  
  
//   return <div id="heroCanvas"></div>
// }
