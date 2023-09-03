import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import Screenshot4 from './assets/img/bg/Screenshot4.png'
// import AOS from 'aos';


const Overview = ({ theme }) => {

    // useEffect(() => {
    //     AOS.init();
    // },[])

    const [lightOn, setLightOn] = useState(false);
    // style={{background: lightOn ? 'var(--bg-primary-1)' : '#131313'}}
    return (
        <section id="overview" data-scroll-section className='section-padding' style={{filter: lightOn || theme === 'light-theme' ? 'brightness(1)' : 'brightness(0.2)'}}>
            <div className="container">
                <div className="row">
                    <h3 className='heading-secondary' data-scroll data-scroll-speed="1">INTRODUCTION</h3>
                    <h1 className='heading-primary' data-scroll data-scroll-speed="2">OVERVIEW..</h1>
                    <p className='text-1'>
                        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React,
                        Node.js and ThreeJS. I'm a quick learner and collaborate closely with clients to create efficient, scaleble and user-friendly solutions that solve real-world problems.
                        Let work together to bring ideas to life.
                    </p>
                </div>
                <div className='bulb-container'>
                    {theme === 'dark-theme' && 
                        <svg onClick={() => setLightOn(!lightOn)} version="1.0" id='light-bulb' xmlns="http://www.w3.org/2000/svg" height="336.000000pt" viewBox="0 0 216.000000 336.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,336.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M969 3210 c-91 -11 -208 -44 -294 -84 -207 -96 -391 -282 -487 -494
                            -85 -186 -105 -428 -54 -627 36 -138 97 -260 199 -394 48 -63 107 -149 133
                            -192 49 -84 110 -224 120 -276 l6 -33 487 0 486 0 19 67 c29 99 127 286 201
                            383 149 194 202 293 246 460 33 126 32 327 -4 462 -46 174 -137 327 -268 454
                            -170 163 -356 249 -594 274 -99 11 -102 11 -196 0z"/>
                            <path d="M626 918 c3 -29 7 -63 10 -75 l4 -23 440 0 440 0 4 23 c3 12 7 46 10
                            75 l5 52 -459 0 -459 0 5 -52z"/>
                            <path d="M640 546 c0 -143 0 -142 54 -161 21 -7 33 -22 46 -56 39 -105 140
                            -200 243 -228 65 -19 191 -10 247 16 92 43 168 134 204 245 3 10 18 20 33 24
                            51 12 53 17 53 160 l0 134 -440 0 -440 0 0 -134z"/>
                            </g>
                        </svg>
                    }
                    {/* <span className={`one ${theme === 'dark-theme' && lightOn ? 'active' : ''}`}></span> */}
                    <span className={`two ${theme === 'dark-theme' && lightOn ? 'active' : ''}`}></span>
                    <span className={`three ${theme === 'dark-theme' && lightOn ? 'active' : ''}`}></span>
                </div>
            </div>
            <div className={`drop-cards container d-flex flex-column flex-lg-row justify-content-center align-items-center ${theme === 'light-theme' || lightOn ? 'active' : ''}`}>
                <div className='card-wrapper'>
                    <div className="drop left" style={{'--clr': '#ff0f5b'}}>
                        <div className="content d-flex justify-content-center align-items-center flex-column text-center">
                        <h1 className="d-flex justify-content-center align-items-center">
                            {/* <img src="assets/company/starbucks.png" style={{height: '6rem'}} alt="icon"/> */}
                            <i className='bx bxl-internet-explorer'></i>
                        </h1>
                        {/* <p className='text-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eum.</p> */}
                        <h4>Frontend Developer</h4>
                        <Link href="#">Read More</Link>
                        </div>
                        <span className='drop-reflection small'></span>
                        <span className='drop-reflection big'></span>
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className="drop middle" style={{'--clr': '#be01fe', backgroundImage : theme === 'light-theme' ? `url(${Screenshot4})` : ''}} onClick={() => window.initPixi('#overview', 'https://tse3.mm.bing.net/th?id=OIP.JSbdSoh5Wq-BMbDl2BUluAHaE5&pid=Api&P=0')}>
                        <div className="content d-flex justify-content-center align-items-center flex-column text-center">
                        <h1 className="d-flex justify-content-center align-items-center">
                            <i className='bx bxl-react'></i>
                        </h1>
                        {/* <p className='text-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eum.</p> */}
                        <h4>React JS developer</h4>
                        <Link href="#">Read More</Link>
                        </div>
                        <span className='drop-reflection small'></span>
                        <span className='drop-reflection big'></span>
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className="drop right" style={{'--clr': '#01b4ff'}}>
                        <div className="content d-flex justify-content-center align-items-center flex-column text-center">
                        <h1 className="d-flex justify-content-center align-items-center">
                            <i className='bx bxl-nodejs'></i>
                        </h1>
                        {/* <p className='text-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eum.</p> */}
                        <h4>Node JS developer</h4>
                        <Link href="#">Read More</Link>
                        </div>
                        <span className='drop-reflection small'></span>
                        <span className='drop-reflection big'></span>
                    </div>
                </div>
            </div>
            {/* <div className="line-container"></div> */}


            {/* <svg className='line' height="210" viewBox="0 0 1442 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="modern-black" opacity="0.8" d="M1 121.94C1 121.94 124.5 106.984 179 106.984C233.5 106.984 234 136.897 270 136.897C315 136.897 351 145.871 412 106.984C473 68.0959 533.605 28.3229 585 35.6896C665 47.1565 749 193.733 836 207.693C935.795 223.706 946 87.0412 1070 101.001C1194 114.961 1166 132.909 1234 127.923C1302 122.938 1328 117.952 1358 115.958C1382 114.362 1422.67 115.293 1441 115.958" stroke="url(#paint0_linear)"/>
                <path id="modern-yellow" opacity="0.8" d="M1441 114.672C1357 157.548 1247 94.668 1175 117.952C1138 129.918 1005 210.684 952 204.702C899 198.719 830 147.866 751 71.0874C687.8 9.66475 638 -1.03768 621 1.28893C603 1.62133 560 8.26881 488 64.1076C426.4 110.374 399 124.932 369 134.903C321.737 150.612 195.5 201.421 149 142.591C102.5 83.761 4 119.946 4 119.946" stroke="url(#paint1_linear)"/>
                <path id="modern-gray" d="M2 120.944C2 120.944 195 122.5 219 120.944C243 119.387 267.716 110.972 283 110.972C323 110.972 341.191 134.27 359.5 148.574C408 186.465 446 86.7525 511 86.7525C576 86.7525 582.5 164.318 625 167.808C675 171.914 735 69.5918 776 69.5918C845.5 69.5918 873 159.831 929 155.843C985 151.854 1029 87.0414 1108 92.027C1187 97.0126 1242 114.961 1286 113.964C1321.2 113.166 1403 116.666 1441 118.66" stroke="url(#paint2_linear)" strokeOpacity="0.8"/>
                <defs>
                <linearGradient id="paint0_linear" x1="1441" y1="121.893" x2="1.03789" y2="136.006" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0"/>
                <stop offset="0.111735" stopColor="white"/>
                <stop offset="0.897073" stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="1441" y1="103" x2="4" y2="115" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0"/>
                <stop offset="0.111735" stopColor="#F8D231"/>
                <stop offset="0.897073" stopColor="#F8D231"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="1441" y1="118.756" x2="2.33269" y2="143.716" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0"/>
                <stop offset="0.111735" stopColor="white"/>
                <stop offset="0.897073" stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                </defs>

                <animate
                    href="#modern-black" 
                    attributeName="d" 
                    dur="6s"
                    calcMode="spline"
                    values="
                    M1 121.94C1 121.94 124.5 106.984 179 106.984C233.5 106.984 234 136.897 270 136.897C315 136.897 351 145.871 412 106.984C473 68.0959 533.605 28.3229 585 35.6896C665 47.1565 749 193.733 836 207.693C935.795 223.706 946 87.0412 1070 101.001C1194 114.961 1166 132.909 1234 127.923C1302 122.938 1328 117.952 1358 115.958C1382 114.362 1422.67 115.293 1441 115.958;
                    M1 120.941C1 120.941 124.5 130 179 130C233.5 130 234 118 270 118C315 118 351 171.888 412 133C473 94.1122 533.605 80.6334 585 88.0001C665 99.467 734.5 152.077 836 139.5C937.5 126.923 957.5 153.5 1070 136C1182.5 118.5 1166 105.986 1234 101C1302 96.0144 1328 137.994 1358 136C1382 134.405 1422.67 114.293 1441 114.958;
                    M1 120.941C1 120.941 124.5 115 179 115C233.5 115 234 122.5 270 122.5C315 122.5 351 117.388 412 78.5002C473 39.6125 533.605 111.133 585 118.5C665 129.967 723.5 17.5001 836 14C948.5 10.4998 946 112.964 1070 126.923C1194 140.883 1166 106.486 1234 101.5C1302 96.5144 1323.5 114.958 1358 119C1392.5 123.042 1422.67 114.293 1441 114.958;
                    M1 120.941C1 120.941 124.5 130 179 130C233.5 130 234 118 270 118C315 118 351 171.888 412 133C473 94.1122 533.605 80.6334 585 88.0001C665 99.467 734.5 152.077 836 139.5C937.5 126.923 957.5 153.5 1070 136C1182.5 118.5 1166 105.986 1234 101C1302 96.0144 1328 137.994 1358 136C1382 134.405 1422.67 114.293 1441 114.958;
                    M1 121.94C1 121.94 124.5 106.984 179 106.984C233.5 106.984 234 136.897 270 136.897C315 136.897 351 145.871 412 106.984C473 68.0959 533.605 28.3229 585 35.6896C665 47.1565 749 193.733 836 207.693C935.795 223.706 946 87.0412 1070 101.001C1194 114.961 1166 132.909 1234 127.923C1302 122.938 1328 117.952 1358 115.958C1382 114.362 1422.67 115.293 1441 115.958;
                    "
                    keyTimes="0; 0.25; 0.5; 0.75; 1"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                    repeatCount="indefinite"
                />

                <animate
                    href="#modern-yellow" 
                    attributeName="d" 
                    dur="7s"
                    calcMode="spline"
                    values="
                    M1441 114.672C1357 157.548 1247 94.668 1175 117.952C1138 129.918 1005 210.684 952 204.702C899 198.719 830 147.866 751 71.0874C687.8 9.66475 638 -1.03768 621 1.28893C603 1.62133 560 8.26881 488 64.1076C426.4 110.374 399 124.932 369 134.903C321.737 150.612 195.5 201.421 149 142.591C102.5 83.761 4 119.946 4 119.946;
                    M1441 113.672C1349 116.5 1243.5 139.5 1175 139.5C1106.5 139.5 999 125 952 108C905 91.0002 824 21.5001 751 30.0001C678 38.5002 676.5 97.5001 621 100.5C565.5 103.5 531.5 65.5001 488 97.5001C444.5 129.5 405.5 144.5 369 154C332.5 163.5 212.5 153 149 128.5C85.5 104 4 118.946 4 118.946;
                    M1441 113.672C1349 116.5 1215.5 94.5 1175 70.5C1134.5 46.5 1062.5 27.9999 952 23.9998C841.5 19.9998 824 65.9999 751 74.4999C678 83 676.5 55.4999 621 58.5C565.5 61.5001 534.5 125.053 488 122C441.5 118.946 412.5 106 369 89.4998C325.5 72.9998 215 86.4999 149 100.5C83 114.5 4 118.946 4 118.946;
                    M1441 113.672C1349 116.5 1243.5 139.5 1175 139.5C1106.5 139.5 999 125 952 108C905 91.0002 824 21.5001 751 30.0001C678 38.5002 676.5 97.5001 621 100.5C565.5 103.5 531.5 65.5001 488 97.5001C444.5 129.5 405.5 144.5 369 154C332.5 163.5 212.5 153 149 128.5C85.5 104 4 118.946 4 118.946;
                    M1441 114.672C1357 157.548 1247 94.668 1175 117.952C1138 129.918 1005 210.684 952 204.702C899 198.719 830 147.866 751 71.0874C687.8 9.66475 638 -1.03768 621 1.28893C603 1.62133 560 8.26881 488 64.1076C426.4 110.374 399 124.932 369 134.903C321.737 150.612 195.5 201.421 149 142.591C102.5 83.761 4 119.946 4 119.946;
                    "
                    keyTimes="0; 0.25; 0.5; 0.75; 1"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                    repeatCount="indefinite"
                />

                <animate
                    href="#modern-gray" 
                    attributeName="d" 
                    dur="5s"
                    calcMode="spline"
                    values="
                    M2 120.944C2 120.944 195 122.5 219 120.944C243 119.387 267.716 110.972 283 110.972C323 110.972 341.191 134.27 359.5 148.574C408 186.465 446 86.7525 511 86.7525C576 86.7525 582.5 164.318 625 167.808C675 171.914 735 69.5918 776 69.5918C845.5 69.5918 873 159.831 929 155.843C985 151.854 1029 87.0414 1108 92.027C1187 97.0126 1242 114.961 1286 113.964C1321.2 113.166 1403 116.666 1441 118.66;
                    M2 119.944C2 119.944 195.5 134 219 134C242.5 134 267.716 78 283 78C323 78 341.191 163.196 359.5 177.5C408 215.391 446 30 511 30C576 30 582.5 136.01 625 139.5C675 143.606 735 17 776 17C845.5 17 873 188.988 929 185C985 181.012 1029 58.5144 1108 63.5C1187 68.4856 1242 163.997 1286 163C1321.2 162.202 1403 115.666 1441 117.66;
                    M2 119.943C2 119.943 195.5 157.5 219 157.5C242.5 157.5 262.5 96.5 283 62.9998C303.5 29.4996 341.191 17.6962 359.5 32C408 69.8906 446 157.5 511 157.5C576 157.5 582.5 9.51005 625 13C675 17.1058 735 112.964 776 112.964C845.5 112.964 873 66.9883 929 62.9998C985 59.0113 1029 142.588 1108 147.574C1187 152.56 1242 49.9971 1286 49C1321.2 48.2023 1403 115.666 1441 117.66;
                    M2 119.944C2 119.944 195.5 134 219 134C242.5 134 267.716 78 283 78C323 78 341.191 163.196 359.5 177.5C408 215.391 446 30 511 30C576 30 582.5 136.01 625 139.5C675 143.606 735 17 776 17C845.5 17 873 188.988 929 185C985 181.012 1029 58.5144 1108 63.5C1187 68.4856 1242 163.997 1286 163C1321.2 162.202 1403 115.666 1441 117.66;
                    M2 120.944C2 120.944 195 122.5 219 120.944C243 119.387 267.716 110.972 283 110.972C323 110.972 341.191 134.27 359.5 148.574C408 186.465 446 86.7525 511 86.7525C576 86.7525 582.5 164.318 625 167.808C675 171.914 735 69.5918 776 69.5918C845.5 69.5918 873 159.831 929 155.843C985 151.854 1029 87.0414 1108 92.027C1187 97.0126 1242 114.961 1286 113.964C1321.2 113.166 1403 116.666 1441 118.66;
                    "
                    keyTimes="0; 0.25; 0.5; 0.75; 1"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                    repeatCount="indefinite"
                />

            </svg> */}
        </section>
    )
}

const mapStateToOverview = (state) => {
    return { theme: state.theme };
}

export default connect(mapStateToOverview, {})(Overview);