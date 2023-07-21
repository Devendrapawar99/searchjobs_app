import React from 'react';
import './UserStyles.css';
import prop1 from '../../assets/pro1.webp';
import prop2 from '../../assets/pro2.webp';
import prop3 from '../../assets/pro3.webp';
import prop4 from '../../assets/pro4.webp';

const User = () => {
    return (
        <div className="experts">
            <h1>Our Clients Say!!!</h1>
            <div className="expert-box">
                <div className="profile">
                    <img src={prop1} alt="" />
                    <h6>Ema Eric</h6>
                    <p>searchJobs.com supports me to get job in siemens.</p>
                    <div className="pro-links">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>

                <div className="profile">
                    <img src={prop2} alt="" />
                    <h6>Jasan</h6>
                    <p>Awesome experience with the searchJobs.com</p>
                    <div className="pro-links">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>

                <div className="profile">
                    <img src={prop3} alt="" />
                    <h6>Johnson</h6>
                    <p>searchJobs.com has excellent UI</p>
                    <div className="pro-links">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>

                <div className="profile">
                    <img src={prop4} alt="" />
                    <h6>Jenifer</h6>
                    <p>Support me to get job in Design</p>
                    <div className="pro-links">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;