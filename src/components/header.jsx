import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { themeAction } from './../actions';


const Header = ({ theme, themeAction }) => {
    return (
        <header>
            <nav style={{padding: '2.3rem 0', zIndex: 1}}>
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start position-relative">
                <h3 className="navbar-brand me-auto">
                    <img id='modeToggler' onClick={() => themeAction(theme === 'light-theme' ? 'dark-theme' : 'light-theme')} src={`assets/img/icon-${theme === 'light-theme' ? 'moon' : 'sun'}.svg`} alt="toggle_mode"/>&nbsp;Personal
                </h3>
                <ul id="topNav" className="navbar-nav ms-md-auto mt-4 mt-md-0 flex-md-row align-items-center d-none d-lg-flex">
                    <li className="nav-item">
                        <Link className="nav-link active" to="#">Home</Link>
                    </li>
                    <li className="nav-item mt-2 mt-md-0">
                        <Link className="nav-link" to="#">About</Link>
                    </li>
                    <li className="nav-item mt-2 mt-md-0">
                        <Link className="nav-link" to="#">Services</Link>
                    </li>
                    <li className="nav-item mt-2 mt-md-0">
                        <Link className="nav-link" to="#">More</Link>
                    </li>
                    <li className="nav-item mt-2 mt-md-0">
                        <button className="slideBtn" type="button" name="button">Contact</button>
                    </li>
                </ul>
                <div className="d-block d-md-none" id="menu-icon"></div>
                </div>
            </nav>
        </header>
    )
}


const mapStateToHeader = (state) => {
    return { theme: state.theme };
}

export default connect(mapStateToHeader, {themeAction})(Header);