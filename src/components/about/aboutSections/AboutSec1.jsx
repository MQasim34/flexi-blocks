import React from "react";
import "../AboutStyle.scss";
import { OurServices } from "../../../siteContent/about/about";

const AboutSec1 = () => {
  return (
    <div className="aboutSec1">
      <div className="main">
        <div className="about1">
          <div className="upper">
            <h1>More About Our Services</h1>
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt.{" "}
              <br />
              Consectetur sed do eiusmod tempor incididunt adipisicing eiusmod.
            </p>
          </div>
        </div>

        <div className="aboutlower">
          <div className="almain">
            {OurServices.map((q, index) => (
              <div className="inner innermap" key={index}>
                <div className="mapImag">
                  <img src={q.images} alt="" />
                </div>
                <h1>{q.title}</h1>
                <p>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec1;
