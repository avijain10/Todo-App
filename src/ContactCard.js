import React from "react";

function ContactCard(props) {
  console.log(props);
  return (
    <div className="conatct-card">
      <img src={props.contact.image} />
      <h3> {props.contact.Name}</h3>
      <p>Phone: {props.contact.Phone}</p>
      <p>Email: {props.contact.Email}</p>
    </div>
  );
}

export default ContactCard;
