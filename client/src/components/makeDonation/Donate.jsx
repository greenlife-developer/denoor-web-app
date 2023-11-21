import React from "react";
import image11 from "../../assets/image/image 11.png";
import "./donate.css"

export default function Donate() {
  return (
    <section className="donate">
      <div className="items">
        <div className="item">
          <h1>Make a Donation Now!</h1>
          <form action="">
            <div className="form-field">
              <div className="">
                <label htmlFor="">I want to Donate for</label>
                <select name="donateFor" id="">
                  <option value="select">Select</option>
                  <option value="childEducation">Children Education</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="">Currency</label>
                <select name="donateFor" id="">
                  <option value="select">Select</option>
                  <option value="childEducation">USD - US Dollars</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <div className="">
                <label htmlFor="">Amount</label>
                <input type="number" name="amount" />
              </div>
            </div>
            <button>Donate</button>
          </form>
        </div>
        <div className="item">
            <img src={image11} alt="" />
        </div>
      </div>
    </section>
  );
}
