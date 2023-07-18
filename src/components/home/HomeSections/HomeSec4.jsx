import React, { useState } from "react";
import { motion } from "framer-motion";
import "../HomeStyle.scss";
import tab1Img from "../../../assets/homeImg/tab1Img.png";
import tab2Img from "../../../assets/homeImg/tab2Img.png";
import tab3Img from "../../../assets/homeImg/tab3Img.png";

const HomeSec4 = () => {
  const [avtiveTab, isavtiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    isavtiveTab(tabNumber);
  };

  const getButtonStyle = (tabNumber) => {
    return {
      backgroundColor: avtiveTab === tabNumber ? "#6366f1" : "transparent",
      color: avtiveTab === tabNumber ? "white" : "black",
      cursor: "pointer",
    };
  };

  return (
    <div className="HomeSec4">
        <div className="main">
      <div className="upperDiv">
        <div className="inner">
          <button
            style={getButtonStyle(1)}
            onClick={() => handleTabClick(1)}
            className=""
          >
            learning solution
          </button>
          <button
            style={getButtonStyle(2)}
            onClick={() => handleTabClick(2)}
            className=""
          >
            communicaton skills
          </button>
          <button
            style={getButtonStyle(3)}
            onClick={() => handleTabClick(3)}
            className=""
          >
            unlimited lessons
          </button>
        </div>
      </div>
      <div className="lowerDiv">
          {avtiveTab === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="firdislaying"
            >
              <div className="left">
                <img src={tab1Img} alt="" />
              </div>
              <div className="right">
                <h2>Learning Solution</h2>
                <h1>
                  <span>Start Learning </span> Foreign Languages Today
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>

                <div className="rightRating">
                  <div>
                    <h1>5.0/5.0</h1>
                    <p>
                      Reviews <br /> Satisfied Users
                    </p>
                  </div>
                  <div>
                    <h1>300K+</h1>
                    <p>
                      Monthly <br /> Downloads
                    </p>
                  </div>
                  <div>
                    <h1>99.99%</h1>
                    <p>
                      Satisfaction <br /> Rating
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {avtiveTab === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="firdislaying"
            >
              <div className="right">
                <h2>Communication Skills</h2>
                <h1>
                  <span>Unlimited Lessons </span>From All Languages Around The World
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>

                <div className="rightRating">
                  <div>
                    <h1>5.0/5.0</h1>
                    <p>
                      Reviews <br /> Satisfied Users
                    </p>
                  </div>
                  <div>
                    <h1>300K+</h1>
                    <p>
                      Monthly <br /> Downloads
                    </p>
                  </div>
                  <div>
                    <h1>99.99%</h1>
                    <p>
                      Satisfaction <br /> Rating
                    </p>
                  </div>
                </div>
              </div>
              <div className="left">
                <img src={tab2Img} alt="" />
              </div>
            </motion.div>
          )}
          {avtiveTab === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="firdislaying"
            >
               <div className="left">
                <img src={tab1Img} alt="" />
              </div>
              <div className="right">
                <h2>Unlimited Lessons</h2>
                <h1>
                Unlimited Collection of <span>Advanced Lessons</span> 
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>

                <div className="rightRating">
                  <div>
                    <h1>5.0/5.0</h1>
                    <p>
                      Reviews <br /> Satisfied Users
                    </p>
                  </div>
                  <div>
                    <h1>300K+</h1>
                    <p>
                      Monthly <br /> Downloads
                    </p>
                  </div>
                  <div>
                    <h1>99.99%</h1>
                    <p>
                      Satisfaction <br /> Rating
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSec4;
