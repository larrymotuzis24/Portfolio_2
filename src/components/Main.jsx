import AboutSection from "./sections/about/About-section.component";
import NavBar from "../navigation/NavBar";
import Projects from "./sections/projects/Projects.component";
import ParticleBackground from "./particle-background/ParticleBackground";
import WorkComponent from "./sections/work/Work.Component";


const Main = () => {
    return (
    
            <div  className="content"> 
                <ParticleBackground />
                <NavBar />
                <AboutSection />
                <Projects />
                <WorkComponent />
            </div>

    )
};

export default Main;