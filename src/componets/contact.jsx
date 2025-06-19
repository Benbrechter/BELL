import React, { useRef, useState } from "react";
// 4523

const Contact = () => {
    const form = useRef();



    return (
        <div className="Contact">
            <h2>Contact Us</h2>
            <form ref={form} className="Form">
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
            
        </div>
    );
};

export default Contact;