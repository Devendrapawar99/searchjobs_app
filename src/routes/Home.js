import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import landingimg2 from '../assets/landingimg2.jpg';
import Footer from "../components/Footer";
import Clients from "../components/cards/ClientsCard";
import User from "../components/users/User";
import Search from "../components/searchCategory/Search";


function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={landingimg2}
                title="Find The Perfect Job"
                text="We Help To Get The Best Job And Find A Career"
                buttonText="Search a Job"
                url="/jobs"
                btnClass="show"
            />
            <Search />
            <Clients />
            <User />
            <Footer />
        </>
    );
}

export default Home;


//Note: if i change component to arrow function then this component wont work here 