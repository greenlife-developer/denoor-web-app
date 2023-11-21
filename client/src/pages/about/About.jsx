import React from "react";
import Header from "../../components/header/Header";
import Donate from "../../components/makeDonation/Donate";
import Footer from "../../components/footer/Footer";
import image9 from "../../assets/image/image 9.png";
import image13 from "../../assets/image/image 13.png";
import image20 from "../../assets/image/image 20.png";
import image22 from "../../assets/image/image 22.png";
import Banner from "../../components/banner/Banner";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <Header />
      <Banner text="About Us" img={image9} />

      <div className="about-text-img">
        <div className="items">
          <div className="item">
            <h1>About Us</h1>
            <div className="line"></div>

            <h3>Investing in people</h3>

            <h4>
              We Believe We Can Solve The Education Issues In Our Lifetime
            </h4>
            <p>
              Denoor Education Foundation is a Non Governmental Organization
              that is committed to enhancing education by the provision of free
              quality formal and informal education to underprivileged
              Nigerians.
            </p>

            <h1 className="mission">Mission</h1>
            <p>
              We are committed to enhancing education by the provision of free
              quality formal and inform
            </p>
          </div>
          <div className="item">
            <img src={image13} alt="" />
          </div>
        </div>
      </div>

      <section className="about-education">
        <img src={image20} alt="" />
      </section>

      <section className="child">
        <div className="items">
          <div className="item">
            <img src={image22} alt="" />
          </div>
          <div className="item">
            <p>
              Education for Sustainable Development (ESD) empowers learners to
              take informed decisions and responsible actions for environmental
              integrity, economic viability and a just society, for present and
              future generations, while respecting cultural diversity. It is
              about lifelong learning, an is an integral part of quality
              education.UNESCO
            </p>
          </div>
        </div>
      </section>

      <Donate />
      <Footer />
    </div>
  );
}
