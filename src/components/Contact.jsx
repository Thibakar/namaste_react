import React from "react";
import './Contact.css';
import Footer from "./Footer/Footer";

const Contact = (props) => {
  return (
    <>
      <div>
        <div class="header">
          <h1>Contact Us</h1>
          <p>My supercool header</p>
        </div>
        <div class="content">
          <h1>Content</h1>
          <p>Some content blablabla, some content blablabla.</p>
          <p>Some content blablabla, some content blablabla.</p>
          <p>Some content blablabla, some content blablabla.</p>
        </div>{" "}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
