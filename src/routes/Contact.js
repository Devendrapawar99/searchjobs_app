import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import contact from '../assets/contact1.jpg';

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={contact}
                title="Contact Us"
                btnClass="hero-text .hide"
            />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;