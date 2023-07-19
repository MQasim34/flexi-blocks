import React from "react";
import Img from '../../../assets/homeImg/sec3Img.png'
import { section3left, section3right } from "../../../siteContent/home/HomeCon";

const HomeSec3 = () => {
  
  return (
    <div className="section3">
      <div className="main">
        <div className="upperSec">
          <h3>Have Fun Learn Fast</h3>
          <h1>See How It Works</h1>
         <p>
         We help our clients achieve tangible, high-impact results. <br /> Tempor
          incididunt ut labore et dolore magna aliqua.
         </p>
        </div>

        <div className="lowerSec">
          <div className="left">
            {section3left.map( (left) => (
              <div key={left.title}>
                <h1>{left.title}</h1>
                <p>{left.details}</p>
              </div>
            ))}
          </div>
          <div className="mdle">
            <img src={Img} alt="" />
          </div>
          <div className="right">
            {section3right.map( (right) => (
              <div key={right.title}>
                <h1>{right.title}</h1>
                <p>{right.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeSec3;
