import "./RegisterStyles.css";


function Register() {
    return (
        <div className="Register-container">
            <h1>Sign Up for apply</h1>
            <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Your Mobile Number" />
                <input type="text" placeholder="Graduation" />
                <input type="text" placeholder="Your Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;