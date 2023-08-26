import React from "react";
import "../HomeStyle.scss";
import CountUp from "./CountUp";
import { section2 } from "../../../siteContent/home/HomeCon";
import { motion } from "framer-motion";

const homeSec2Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 1,
    transition: {
      delay: 0.05,
      duration: 0.3,
    },
  },
};

const homeSec21Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 * index,
      duration: 0.5,
    },
  }),
};

const HomeSec2 = () => {
  return (
    <div className="HomeSec2">
      <CountUp />
      <div className="main">
        <div className="content">
          <motion.h1
            variants={homeSec2Variants}
            initial="initial"
            whileInView="animate"
          >
            Our Users <span>Love Learning </span> With Our <br /> App
          </motion.h1>
          <motion.p
            variants={homeSec2Variants}
            initial="initial"
            whileInView="animate"
          >
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt.{" "}
            <br />
            Consectetur sed do eiusmod tempor incididunt adipisicing eiusmod
            tempor incididunt elit.
          </motion.p>

          <div className="inenerContent">
            <div className="contentMain">
              {section2.map((sec, index) => (
                <motion.div
                  className="cn_outer"
                  key={sec.title}
                  variants={homeSec21Variants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <div className="sec2Img">
                    <img src={sec.Icon} alt="" />
                  </div>
                  <div className="sz2">
                    <h1>{sec.title}</h1>
                    <p>{sec.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec2;
