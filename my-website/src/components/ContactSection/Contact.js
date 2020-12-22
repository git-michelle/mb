import React from "react";
import emailjs from "emailjs-com";
import Alert from "./Alert";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const check = <FaCheckCircle />;
  const exclamation = <FaExclamationCircle />;

  const testList = [
    {
      id: 1,
      title: "Success",
      description: "This is a success toast component",
      backgroundColor: "#5cb85c",
      icon: check,
    },
    {
      id: 2,
      title: "Danger",
      description: "This is an error toast component",
      backgroundColor: "#d9534f",
      icon: exclamation,
    },
  ];

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
          <Alert alertList={testList} position="bottom-right" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
