import React from "react";
import fb from "../../assets/image/Facebook.png";
import tw from "../../assets/image/TwitterX.png";
import Tg from "../../assets/image/Telegram App.png";
import Ig from "../../assets/image/Instagram.png";
import In from "../../assets/image/LinkedIn.png";
import image21 from "../../assets/image/image 21.png";
import image23 from "../../assets/image/image 23.png";
import "./footer.css";
import logo from "../../assets/image/image 10.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="items">
        <div className="item">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h2>
              <span>DEN</span>
              <span>OOR</span> <span>EDUCA</span>
              <span>TION</span> <span>FOUNDATION</span>{" "}
            </h2>
          </div>
          <div className="logo-footer-text">
            <p>
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
            </p>
          </div>
        </div>
        <div className="item">
          <h1>Social handles</h1>
          <div className="line"></div>

          <div className="icons">
            <div className="icon">
              <img src={fb} alt="" />
              <a href="https://www.facebook.com/denooreducationfoundation?mibextid=LQQJ4d">
                <span>@denooreducationfoundation</span>
              </a>
            </div>
            {/* <div className="icon">
              <img src={In} alt="" />
              <span>@denooreducationfoundation</span>
            </div> */}
            {/* <div className="icon">
              <img src={tw} alt="" />
              <span>@denooreducationfoundation</span>
            </div> */}
            <div className="icon">
              <img src={Ig} alt="" />
              <a href="https://instagram.com/denooreducationfoundation?igshid=NzZlODBkYWE4Ng==">
                <span>@denooreducationfoundation</span>
              </a>
            </div>
            {/* <div className="icon">
              <img src={Tg} alt="" />
              <span>@denooreducationfoundation</span>
            </div> */}
          </div>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <div className="line"></div>

          <div className="footer-contact">
            <div className="icon-address">
              <img src={image21} alt="" />
              <div className="">
                <h1>Address:</h1>
                <p>No 4, Baver Dzeremo Street, Judges Quarters Makurdi.</p>
              </div>
            </div>
            <div className="icon-address">
              <img src={image23} alt="" />
              <div className="">
                <h1>Phone:</h1>
                <p>(+234) 7066736784 seemberiko@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
