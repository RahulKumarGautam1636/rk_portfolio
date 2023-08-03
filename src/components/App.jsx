import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/styles.css';
import Header from "./header";
import Home from './home';
import { connect } from 'react-redux';
import { themeAction } from '../actions';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import { ScreenLoader } from './utils';
// import './css/materialize.min.css';


const App = ({ theme }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-out',
        });
        AOS.refresh();
    }, []);

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
        <div className={theme}>
            <HashRouter>
            {isLoading && <div className='spinner-container'><ScreenLoader/></div>}
            <Header/>
            {/* <BottomNav/> */}
            {/* <ScrollToTop/> */}
            <Routes>
                <Route path='/' exact element={<Home/>}/>                                     {/* new router-dom version has these changes */}
                {/* <Route path='/productPage/:id' component={ProductPage}/>
                <Route path='/franchisee' component={Franchisee}/>
                <Route path='/aboutUs' component={AboutUs}/>
                <Route path='/contactUs' component={ContactUs}/>
                <Route path='/filterPage/:filterTerm' component={FilterPage}/>
                <Route path='/cartPage' component={CartPage}/>
                <Route path='/checkout' component={Checkout}/>
                <Route path='/wishlist' component={Wishlist}/>
                <Route path='/patientProfile' component={PatientProfile}/> */}
            </Routes>
            {/* <Footer/> */}
            {/* <ConnectedToast/> */}
            </HashRouter>
        </div>
    )
}


const mapStateToApp = (state) => {
    return { theme: state.theme };
}

export default connect(mapStateToApp, {themeAction})(App);