import "./ContactFormStyles.css";

function ContactForm() {
    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea name="Message" id="Message"  rows="4" placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;