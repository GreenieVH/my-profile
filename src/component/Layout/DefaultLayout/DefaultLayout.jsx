import Hero from "~/component/Page/Hero/Hero";
import './DefaultLayout.scss'
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Skills from "~/component/Page/Skills/Skills";


function DefaultLayout() {
    return ( 
        <>
            <Navbar/>
            <div className="container">
                <Hero/>
                <Skills/>
            </div>
            <Footer/>
        </>
     );
}

export default DefaultLayout;