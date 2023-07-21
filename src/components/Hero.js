import React from 'react';
import './HeroStyles.css';
import Typewriter from 'typewriter-effect';

const Hero = (props) => {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="Heroimg" />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "One step towards your 'dream'...!",
                                    "One step towards your 'goal'...!",
                                    "One step towards your 'best'...!"
                                ]
                            }}
                        />
                    </p>          
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>
        </>
    );
};

export default Hero;