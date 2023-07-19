import React, { useState } from "react";
import { section7 } from "../../../siteContent/home/HomeCon";

const HomeSec7 = () => {
  return (
    <div className="sectio7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h1>Latest From Our Blog</h1>
              <p>
                With FlexiBlog Theme, add a fully functional blog to your site.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blogContnet">
        <div className="main">
          <div className="inner">
            {section7.map((sec7) => (
              <div className="cardInner">
                <img src={sec7.mainImg} alt="" />
                <div className="lowerCon">
                  <h4>{sec7.position}</h4>
                  <h1>{sec7.title}</h1>
                  <p>{sec7.details}</p>

                  <div className="lowerInner">
                    <div className="left">
                      <img src={sec7.smallImg} alt="" />
                    </div>
                    <div className="right">
                      <h2>{sec7.name}</h2>
                      <span>{sec7.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec7;
