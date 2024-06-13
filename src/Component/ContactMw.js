import React, { useState } from "react";
import "./contact.css";

const ContactMw = () => {
  // State to store contact form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    detail: ""
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    // Clear form data
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      detail: ""
    });
  };

  return (
    < >
      <h2 className="eee" id="contactt">Contact Me</h2>
      <div className="contact-content">
        <div className="contact-item">
          <div className="contact-item-in">
            <img src="./images/email.png" alt="email" />
            <a href="mailto:vinayramoliya@gmail.com">vinayramoliya@gmail.com</a>          </div>

          <div className="contact-item-in">
            <img src="./images/github.png" alt="email" />
            <a href="https://github.com/951010">github</a>
          </div>

          <div className="contact-item-in">
            <img src="./images/linkedin.png" alt="email" />
            <a href="https://linkedin.com/in/vinayramoliya">Vinay Ramoliya</a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
         
           <input
  type="text"
  name="firstname"
  placeholder="First Name"
  value={formData.firstname}
  onChange={handleInputChange}
  style={{ color: "white" }}
/>
<input
  type="text"
  name="lastname"
  placeholder="Last Name"
  value={formData.lastname}
  onChange={handleInputChange}
  style={{ color: "white" }}
/>
<input
  type="email"
  name="email"
  placeholder="E-mail"
  className="emailll"
  value={formData.email}
  onChange={handleInputChange}
  style={{ color: "white" }}
/>

<textarea 
  name="detail"
  placeholder="Message"
  value={formData.detail}
  onChange={handleInputChange}
  style={{color:"white"}}
/>

            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMw;
