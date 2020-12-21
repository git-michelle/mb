import React from "react";

const Contact = () => {
  return (
    <section className="contact fullwidth" id="contact">
      <div className="contact-container container-centered-content">
        <div className="contact-img-area">
          <h2 className="section-heading">Get in touch</h2>
          <img src="/images/mail-pic.svg" alt="woman writing beside envelope" />
        </div>
        <div className="contact-form-area">
          <form action="">
            <input
              type="text"
              placeholder="Name"
              className="input-style"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="input-style"
              required
            />
            <button type="submit" className="btn-outline">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
