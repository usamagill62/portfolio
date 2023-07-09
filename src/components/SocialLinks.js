import React from "react";

const SocialLinks = () => {
  return (
    <div className="social-links-wrapper d-none d-md-block">
      <a href="mailto:gillusama62@gmail.com">
        <i className="far fa-paper-plane social-icon" title="Send Me Email"></i>
      </a>
      <a href="https://www.linkedin.com/in/muhammad-usama-57789919b">
        <i
          className="fab fa-linkedin social-icon"
          title="Checkout My Linkedin"
        ></i>
      </a>
      <a href="https://github.com/UsamaGill61">
        <i
          className="fab fa-github social-icon"
          title="Checkout My Github Profile"
        ></i>
      </a>
      <a href="https://www.instagram.com/gillusama6/">
        <i
          className="fab fa-instagram social-icon"
          title="Checkout My Instagram Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialLinks;
