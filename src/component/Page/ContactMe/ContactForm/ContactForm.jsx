import React from "react";
import "./ContactForm.scss";
import Button from "~/component/Button/Button";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" placeholder="First name" name="firstname" />
          <input type="text" placeholder="Last Name" name="lastname" />
        </div>
        <input type="email" placeholder="Email" name="email" />
        <textarea type="text" placeholder="Message" name="message" rows={3} />
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;
