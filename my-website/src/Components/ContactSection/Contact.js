import React, { useState } from "react";
import emailjs from "emailjs-com";
import Alert from "./Alert";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  // Alert msg
  const [alertMessages, setAlertMessages] = useState([]);
  const addAlertMessage = (msg) => {
    setAlertMessages((prev) => prev.concat(msg));
  };

  const [submitResponse, setSubmitResponse] = useState("");

  // For invisible recaptcha -> async await necessary for success on first submit
  const recaptchaRef = React.createRef();

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    await recaptchaRef.current.executeAsync();

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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitResponse("error");
          addAlertMessage("Error sending email. Please try again.");
        }
      );
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
            <p className="small">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms">Terms of Service </a>
              apply.
            </p>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.REACT_APP_CAPTCHA_KEY_INVISIBLE}
              onChange={onChange}
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
