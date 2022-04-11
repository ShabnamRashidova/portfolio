import React from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-title text-center  my-5">
          {" "}
          <h5 className="text-muted">Get in touch</h5>
          <h2 className="contact-title">Contact me</h2>
        </div>
        <div className="contact-container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="contact-options">
                <div className="contact-option">
                  <MdOutlineEmail className="option-icon" />
                  <h4>Email</h4>
                  <h5>shabnamrashidova90@gmail.com</h5>
                  <a href="mailto:shabnamrashidova90@gmail.com">
                    Send a message
                  </a>
                </div>
                <div className="contact-option">
                  <BsWhatsapp className="option-icon" />
                  <h4>Whatsapp</h4>
                  <h5>+994-070-866-74-25</h5>
                  <a href="https://.whatsapp.com/send?phone=+994708667425">
                    Send a message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 ">
              <form action="">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  type="text"
                  name="name"
                  placeholder="Your Message"
                  rows={7}
                  required
                ></textarea>
                <button type="submit" className="btn text-light w-50 ">
                  Send a message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
