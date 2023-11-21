import React from "react";
import "./banner.css"

export default function Banner({ text, img }) {
  return (
    <div className="banner">
      <div className="banner-items">
        <img src={img} alt="" />
        <div className="line"></div>
        <h1>{text}</h1>
      </div>
    </div>
  );
}
