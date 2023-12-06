import React, { useState } from "react";
import Header from "../../components/header/Header";
import Donate from "../../components/makeDonation/Donate";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import image6 from "../../assets/image/image 6.png";
import image21 from "../../assets/image/image 21.png";
import group8 from "../../assets/image/Group 8.png";
import image23 from "../../assets/image/image 23.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./contact.css";
import ScrollUp from "../../components/scrollup/ScrollUp";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [details, setDetails] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const { name, email, phone, subject, message } = details;

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    const response = await axios.post("/api/contact", {
      formData,
    });

    if (response.data.success) {
      toast.success("Email has been sent");
      // setDetails(initialState)
    } else {
      toast.error("Error sending email");
    }

    navigate("/");
  };

  return (
    <div className="contact">
      <Header />
      <Banner text="Contact" img={image6} />

      <section className="contact-us">
        <div className="items">
          <div className="item">
            <h1>Please get in touch</h1>
            <p>Your email address will not be published</p>
            <form onSubmit={sendEmail} method="POST">
              <div className="form-field">
                <div className="">
                  <input
                    onChange={handleInputChange}
                    name="name"
                    defaultValue={name}
                    type="text"
                    placeholder="Name:"
                  />
                </div>
                <div className="">
                  <input
                    onChange={handleInputChange}
                    name="email"
                    defaultValue={email}
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-field">
                <div className="">
                  <input
                    onChange={handleInputChange}
                    name="phone"
                    defaultValue={phone}
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="">
                  <input
                    onChange={handleInputChange}
                    name="subject"
                    defaultValue={subject}
                    type="text"
                    placeholder="subject"
                  />
                </div>
              </div>
              <div className="form-field">
                <div className="">
                  <textarea
                    onChange={handleInputChange}
                    name="message"
                    defaultValue={message}
                    placeholder="Message"
                    rows="1"
                  ></textarea>
                </div>
              </div>
              <button>Send</button>
            </form>
          </div>
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3953.659996673707!2d8.577037824140687!3d7.719581358111384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo%204%2C%20Baver%20Dzeremo%20Street%2C%20Judges%20Quarters%20Makurdi!5e0!3m2!1sen!2sng!4v1700499481676!5m2!1sen!2sng"
              width="100%"
              title="address"
              // height="597px"
              className="map-frame"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <ScrollUp />

      <section className="icons-address">
        <div className="items">
          <div className="item">
            <img src={image21} alt="" />
            <div className="">
              <h1>Address</h1>
              <p>No 4, Baver Dzeremo Street, Judges Quarters Makurdi.</p>
            </div>
          </div>
          <div className="item">
            <img src={image23} alt="" />
            <div className="">
              <h1>Send a message</h1>
              <p>denooreducationfoundation@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <img src={group8} alt="" />
            <div className="">
              <h1>Working hours</h1>
              <p>WORKING HOURS : Monday - Friday 09.00am - 17.00pm</p>
            </div>
          </div>
        </div>
      </section>

      <Donate />
      <Footer />
    </div>
  );
}
