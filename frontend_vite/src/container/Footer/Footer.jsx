import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_llk4loe",
        "template_dj71sn5",
        form.current,
        "UieSKEKLCFoLlJde5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:tsitserov.vladislav@gmail.com" className="p-text">
            tsitserov.vladislav@gmail.com
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="from_name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>

          <button type="submit" className="p-text">
            Send Message
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "contact", ("app__footer", "app__whitebg"));
