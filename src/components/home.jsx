import EarthSection from "./earth";
import Hero from "./hero";
import Overview from "./overview";
import Experience from "./Experience";
import TechStack from "./techStack";
import Projects from "./projects";
import Contact from "./contact";

const Home = () => {
    return (
        <>
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