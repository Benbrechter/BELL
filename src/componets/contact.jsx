import React, { useRef, useState } from "react";
// 4523

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");



    return (
        <div>
            <h2>Contact Us</h2>
            <form ref={form} >
                <div>
                    <label>Email:</label>
                    <input type="email" name="user_email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" required />
                </div>
                <button type="submit">Send</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Contact;