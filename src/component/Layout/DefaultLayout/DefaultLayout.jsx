import Hero from "~/component/Page/Hero/Hero";
import './DefaultLayout.scss'
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Skills from "~/component/Page/Skills/Skills";
import WorkExperience from "~/component/Page/WorkExperience/WorkExperience";
import Project from "~/component/Page/Project/Project";
import ContactMe from "~/component/Page/ContactMe/ContactMe";


function DefaultLayout() {
    return ( 
        <>
            <Navbar/>
            <div className="container">
                <Hero/>
                <Skills/>
                <WorkExperience/>
                {/* <Project/> */}
                <ContactMe/>
            </div>
            <Footer/>
        </>
     );
}

export default DefaultLayout;