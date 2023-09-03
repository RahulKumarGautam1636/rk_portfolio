import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/styles.css';
import Header from "./header";
import Home from './home';
import { connect } from 'react-redux';
import { themeAction } from '../actions';
import AOS from 'aos';
import { useEffect, useState, useRef } from 'react';
import "aos/dist/aos.css";
import { ScreenLoader } from './utils';
// import './css/materialize.min.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


const App = ({ theme }) => {

    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef(null)

    // useEffect(() => {
    //     AOS.init({
    //         offset: 200,
    //         duration: 600,
    //         easing: 'ease-out',
    //     });
    //     AOS.refresh();
    // }, []);

    useEffect(() => {
        const doSomething = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 5000)
        };
        window.addEventListener("load", doSomething);
        return () => {
        window.removeEventListener("load", doSomething);
        };
    }, []);

    return (
        <LocomotiveScrollProvider
            options={
                {
                smooth: true,
                // ... all available Locomotive Scroll instance options 
                }
            }
            watch={[]}
            containerRef={containerRef}
            >
            <main data-scroll-container ref={containerRef}>
                <div className={theme}>
                    <HashRouter>
                        {isLoading && <div className='spinner-container'><ScreenLoader/></div>}
                        <Header/>
                        <Routes>
                            <Route path='/' exact element={<Home/>}/>                                     {/* new router-dom version has these changes */}
                        </Routes>
                    </HashRouter>
                </div>
            </main>
        </LocomotiveScrollProvider>
    )
}


const mapStateToApp = (state) => {
    return { theme: state.theme };
}

export default connect(mapStateToApp, {themeAction})(App);