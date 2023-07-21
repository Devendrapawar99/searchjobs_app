import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import aboutus2 from '../assets/aboutus2.jpg';
import Footer from './../components/Footer';
import AboutUs from "../components/AboutUs";
import User from "../components/users/User";

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={aboutus2}
                title="About Us"
                btnClass="hero-text .hide"
            />
            <AboutUs />
            <User />
            <Footer />
        </>
    );
}

export default About;