import React, { Component } from 'react';
import "./MarketingStyles.css";
import { Link } from 'react-router-dom';

class MarketingData extends Component {
    render() {
        return (
            <>
                <div className={this.props.className}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <p>
                            {this.props.text}
                        </p>
                        <Link to="/signup" className="linkbtn">Apply Now</Link>
                    </div>
                    <div className="image">
                        <img src={this.props.img1} alt="img" />
                        <img src={this.props.img2} alt="img" />
                    </div>
                </div>
            </>

        );
    }
}

export default MarketingData;