import React from "react";
import "./ContactInfoCard.scss";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="contact-detail flex items-center justify-center flex-col ">
      <div className="detail-icon flex items-center justify-center">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
