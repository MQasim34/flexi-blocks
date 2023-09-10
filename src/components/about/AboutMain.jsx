import React from "react";

import "./AboutStyle.scss";
import AboutSec1 from "./aboutSections/AboutSec1";
import abouthero from "../../assets/aboutImages/abouthero.png";
import AboutSec2 from "./aboutSections/AboutSec2";

const AboutMain = () => {
  return (
    <div className="about">
      <div className="main">
        <div className="inner">
          {/* about-banner */}
          <div className="about_banner">
            <h3>Established in 2017</h3>
            <h1>Discover Our Story</h1>
            <p>
              Credibly brand standards compliant users without extensible
              services
            </p>

            <div className="bnnaer_iamge">
              <img src={abouthero} alt="" />
            </div>

            <div className="bannerCont pt-3">
              <div className="row pt-lg-5 pt-md-5 px-lg-5">
                <div className="col-lg-5 col-md-6 colsm-12">
                  <div className="text-lg-start text-md-center px-lg-5 px-md-0 mx-lg-5 mx-md-0">
                    <h1>Our Motto</h1>
                    <p>Lorem ipsum dolor sit amet, pri cu etiam iudicabit.</p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 colsm-12">
                  <div className="text-lg-start text-md-center ">
                    <p className="right-title">
                      Docendi deleniti eos ad. His enim tractatos ea, evertitur
                      dissentiunt nec ut, Mel tota quidam senserit et ut tritani
                      platonem est. In a professional context it often happens
                      that private or corporate clients corder a publication to
                      be made and presented with the actual content still not
                      being ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutSec1 />
      <AboutSec2 />
    </div>
  );
};

export default AboutMain;
