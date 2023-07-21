import "./ClientsCardStyle.css";
import { Link } from 'react-router-dom';

function ClientsData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="hero img" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <Link to="/jobs" className="btnlink">See Details</Link>
        </div>
    );
}

export default ClientsData;