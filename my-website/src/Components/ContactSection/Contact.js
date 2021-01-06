import React, { useState } from "react";
import emailjs from "emailjs-com";
import Alert from "./Alert";

const Contact = () => {
  // Alert msg
  const [alertMessages, setAlertMessages] = useState([]);
  const addAlertMessage = (msg) => {
    setAlertMessages((prev) => prev.concat(msg));
  };

  const [submitResponse, setSubmitResponse] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitResponse("success");
          addAlertMessage("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          setSubmitResponse("error");
          addAlertMessage("Error sending email. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact fullwidth" id="contact">
      <div className="contact-container container-centered-content">
        <div className="contact-img-area">
          <h2 className="section-heading">Get in touch</h2>
          <img src="/images/mail-pic.svg" alt="woman writing beside envelope" />
        </div>
        <div className="contact-form-area">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input-style"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input-style"
              required
            />
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              className="input-style"
              required
            />
            <button type="submit" className="btn-outline">
              Send
            </button>
          </form>
          <Alert messages={alertMessages} alertType={submitResponse} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
