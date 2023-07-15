import React from "react";
import "../HomeStyle.scss";
import CountUp from "./CountUp";
import { section2 } from "../../../siteContent/home/homeCon";

const HomeSec2 = () => {
  return (
    <div className="HomeSec2">
      <CountUp/>
      <div className="main">
        <div className="content">
          <h1>
            Our Users <span>Love Learning </span> With Our <br /> App
          </h1>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt.{" "}
            <br />
            Consectetur sed do eiusmod tempor incididunt adipisicing eiusmod
            tempor incididunt elit.
          </p>

          <div className="inenerContent">
            <div className="contentMain">
              {section2.map((sec) => (
                <div className="cn_outer" key={sec.title}>
                  <div className="sec2Img">
                    <img src={sec.Icon} alt="" />
                  </div>
                  <div className="sz2">
                    <h1>{sec.title}</h1>
                    <p>{sec.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec2;
