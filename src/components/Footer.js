import './FooterStyles.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>searchJobs.com</h1>
                    <p>www.searchjobs@gmail.com</p>
                </div>
                <div>
                    <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/"><i className="fa-brands fa-behance-square"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Company</h4>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/jobs">Job List</a>
                    <a href="/">Terms and Conditions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Terms</a>
                    <a href="/">License</a>
                    <a href="/">Contact</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy policy</a>
                    <a href="/">License</a>
                    <a href="/">All versions</a>
                </div>
            </div>
            <p className='copy'>© searchJobs.com, All Right Reserved. Designed By Code By <a href="https://drive.google.com/file/d/1WM8WIkrVQaPAwR7x_I2U5h1RhpD39y7k/view?usp=drivesdk" target="_blank" rel="noreferrer" className='myName'>Devendra Pawar</a></p>
        </div>
    );
};

export default Footer;