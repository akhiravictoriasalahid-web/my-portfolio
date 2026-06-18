import { useRef } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_rked9ho",
            "template_sugdbu4",
            form.current,
            "p5qUwKFFi1xXBM7nc"
        )
        .then(() => {
            alert("Message sent!");
            form.current.reset();
        })
        .catch((error) => {
            alert("Failed to send.");
            console.error(error);
        });
    };

    return (

        <section id="contact" className="section-card">
        <h2>Contact Me</h2>

            <form 
                className="contact-form"
                ref={form}
                onSubmit={sendEmail}
            >
                <label htmlFor="name">FULL NAME</label>
                <input 
                    type="text" 
                    name="user_name" 
                    id="name" 
                    placeholder="Your Name" 
                    autoComplete="name"
                    required
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="user_email" 
                    id="email" 
                    placeholder="Enter your email" 
                    autoComplete="email"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea 
                    name="message" 
                    id="message" 
                    rows="4" 
                    placeholder="Write your message here.."
                    ></textarea>

                    <button type="submit" className="btn">
                        Send Message
                    </button>
            </form>
      </section>

    );
}

export default Contact;