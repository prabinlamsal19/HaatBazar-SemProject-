import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:sumit.kahanl80@gmail.com">
        <Button>Contact: sumit.khanal80@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
