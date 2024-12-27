
import React from 'react';
import './contact.css';
import linkedin_icon from '../../data/linkedin.png';
import mail_icon from '../../data/envelope-alt.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "693c5879-4923-4a3c-8bd0-50bc39ecb526");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message)
          console.log("Success", res);
        }
      };
    
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h2>Let's talk</h2>
                    <div className="contact-description">
                        <p>Feel free to reach out! Whether you have a question, want to collaborate, or just talk, I'd love to hear from you.</p>
                        <p>Thanks for visiting my site! If you have any questions, ideas for collaboration, or simply want to connect, don't hesitate to
                            reach out. I'm always open to meaningful conversations and exploring new opportunities.</p>
                    </div>
                    <div className="contact-details">
                        <a href="https://www.linkedin.com/in/svandan/" className="contact-detail" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_icon} alt="LinkedIn" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:svandan@umich.edu" className="contact-detail">
                            <img src={mail_icon} alt="Email" />
                            <span>svandan@umich.edu</span>
                        </a>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder='Enter your name' name='name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder='Enter your email' name='email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Write your message here</label>
                        <textarea id="message" name="message" rows="6" placeholder='Enter your message'></textarea>
                    </div>
                    <button type='submit' className="contact-submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;