import EarthSection from "./earth";
import Hero from "./hero";
import Overview from "./overview";
import Experience from "./Experience";
import TechStack from "./techStack";
import Projects from "./projects";
import Contact from "./contact";
// import ReactFullpage from "@fullpage/react-fullpage";
// import Fullpage, {FullPageSections, FullPageSection, FullpageNavigation} from '@fullpage/react-fullpage';

const Home = () => {

    // const FullpageWrapper = fullpageProps => (<ReactFullpage
    //     {...fullpageProps}
    //     sectionSelector={'section'}
    //     render={({ state, fullpageApi }) => {
    //       return (
    //         <>
    //         <Hero/>
    //         <Overview/>
    //         <EarthSection/>
    //         <Experience/>
    //         <TechStack/>
    //         <Projects/>
    //         <Contact/>
    //         </>
    //       );
    //     }}
    //   />);
    return (
        <>
            {/* <FullpageWrapper/> */}
            {/* <Fullpage>
                <FullPageSections>
                    <FullPageSection>
                    <Hero/>
                    </FullPageSection>
                    <FullPageSection>
                    <Overview/> 
                    </FullPageSection>
                    <FullPageSection>
                    <EarthSection/>  
                    </FullPageSection>
                    <FullPageSection>
                    <Experience/> 
                    </FullPageSection>
                </FullPageSections>
            </Fullpage> */}
            <Hero/>
            <Overview/>
            <EarthSection/>
            <Experience/>
            <TechStack/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home;