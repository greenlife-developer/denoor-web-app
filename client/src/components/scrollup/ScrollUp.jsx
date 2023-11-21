import React from "react";
import group11 from "../../assets/image/Group 11.png";
import "./scroll.css"

export default function ScrollUp() {

    const scrollUp = () => {
        window.scrollTo ({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          
    }

    return(
        <div className="scroll">
            <img onClick={scrollUp} src={group11} alt="" />
        </div>
    )
}