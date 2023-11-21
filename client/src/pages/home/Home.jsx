import React from "react";
import Header from "../../components/header/Header";
import Donate from "../../components/makeDonation/Donate";
import image1 from "../../assets/image/image 1.png";
import group11 from "../../assets/image/Group 11.png";
import image14 from "../../assets/image/image 14.png";
import image15 from "../../assets/image/image 15.png";
import image16 from "../../assets/image/image 16.png";
import image2 from "../../assets/image/image 2.png";
import image7 from "../../assets/image/image 7.png";
import image8 from "../../assets/image/image 8.png";
import "./home.css";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <div className="home-banner">
        <div className="home-banner-img">
          <img src={image1} alt="" />
        </div>
        <div className="home-banner-content">
          <div className="invest">
            <div className="line"></div>
            <h3>Investing in people</h3>
          </div>
          <h2>We Believe We Can Solve The Education Issues In Our Lifetime</h2>
          <p>
            Education plays a vital role in human capital formation. It raises
            the productivity and efficiency of individuals and thus produces
            skilled manpower that is capable of leading the economy towards the
            path of sustainable economic development.
          </p>
          <p>
            Education is expected to act positively towards world economic
            development and poverty alleviation, both of which are the
            priorities of the world community. An investment in human capital,
            especially in education allows each person to contribute to their
            society in a productive way.
          </p>
          <img src={group11} alt="" />
        </div>
      </div>

      <div className="line-div">
        <div className="line"></div>
      </div>

      <section className="services">
        <div className="items">
          <div className="item">
            <div className="head">
              <img src={image14} alt="" />
            </div>
            <div className="body">
              <h3>Help life</h3>
              <p>
                Helping others is an important part of life; it gives you a
                sense of purpose and boasts your happiness while positively
                affecting the world around you.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <img src={image15} alt="" />
            </div>
            <div className="body">
              <h3>Help life</h3>
              <p>
                Helping others is an important part of life; it gives you a
                sense of purpose and boasts your happiness while positively
                affecting the world around you.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <img src={image16} alt="" />
            </div>
            <div className="body">
              <h3>Help life</h3>
              <p>
                Helping others is an important part of life; it gives you a
                sense of purpose and boasts your happiness while positively
                affecting the world around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="line-div">
        <h1>CAUSE OF POVERTY</h1>
        <div className="line"></div>
        <p>
          Lack of access to high quality education has prevented millions of
          people world wide from escaping the cycle of extreme poverty.
        </p>
      </div>

      <section className="home-images">
        <div className="items">
          <div className="item">
            <img src={image2} alt="" />
            <p>
              Donate to help children living in poverty and can’t afford
              education in Nigeria.
            </p>
          </div>
          <div className="item">
            <img src={image7} alt="" />
            <p>
              Thanks to the generosity of donors like you, together we can help
              most vulnerable children to become ready for school.
            </p>
          </div>
          <div className="item">
            <img src={image8} alt="" />
            <p>
              Never get tired of doing little things for others, sometimes those
              little things occupy the biggest parts of their hearts.
            </p>
          </div>
        </div>
      </section>

      <Donate />

      <Footer />

    </div>
  );
}
