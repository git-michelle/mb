import React, { useEffect, useState } from "react";
import Alert from "./Alert";

const Contact = () => {
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   if (window.location.search.includes("success=true")) {
  //     setSuccess(true);
  //   }
  // }, []);

  // Alert msg
  // const [alertMessages, setAlertMessages] = useState([]);
  // const addAlertMessage = (msg) => {
  //   setAlertMessages((prev) => prev.concat(msg));
  // };
  // addAlertMessage("Message sent successfully");
  // const alertMessages = "Message sent successfully";

  const Contact = () => {
  // Alert msg
  const [alertMessages, setAlertMessages] = useState([]);
  const addAlertMessage = (msg) => {
    setAlertMessages((prev) => prev.concat(msg));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    addAlertMessage("Message sent successfully");
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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            // action="/?success=true"
            onSubmit={sendEmail}
          >
            <input type="hidden" name="form-name" value="contact" />
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
            {/* {success && <Alert messages={alertMessages} />} */}
            {/* {success && (
              <p className="alert-success floating-alert">
                Message Sent Successfully
              </p>
            )} */}
            <Alert messages={alertMessages} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
