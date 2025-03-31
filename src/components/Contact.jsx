import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a className="items">
            <CiFacebook className="icons" />
          </a>
          <a className="items">
            <CiLinkedin className="icons" />
          </a>
          <a className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:ayushsharma8739@gmail.com" className="items">
            <BiLogoGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
