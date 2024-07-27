import Hero from "~/component/Page/Hero/Hero";
import './DefaultLayout.scss'
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


function DefaultLayout() {
    return ( 
        <>
            <Navbar/>
            <div className="container">
                <Hero/>
            </div>
            <Footer/>
        </>
     );
}

export default DefaultLayout;