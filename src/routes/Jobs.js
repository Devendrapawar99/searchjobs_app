import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import nightImg from '../assets/night.jpg';
import Footer from "../components/Footer";
import Career from "../components/Career";
import Marketing from "../components/marketing/Marketing";
import Search from "../components/searchCategory/Search";


function Jobs() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={nightImg}
                title="Explore By Category..."
                btnClass="hero-text .hide"
            />
            <Search />
            <Career />
            <Marketing />
            <Footer />
        </>
    );
}

export default Jobs;