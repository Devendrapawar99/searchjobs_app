import Register from "../components/Register";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Hero from "../components/Hero";
import sign from '../assets/sign.jpg';

function SignUp() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={sign}
                title="Sign Up"
                btnClass="hero-text .hide"
            />
            <Register />
            <Footer />
        </>
    );
}

export default SignUp;