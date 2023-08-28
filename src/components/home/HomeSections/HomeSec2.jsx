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
const svgVariants = {
  initial: {
    opacity: "0 !important",
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
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
                    <motion.svg
                      width="35"
                      height="35"
                      class="bi bi-globe2"
                      viewBox="0 0 16 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ gap: "10px" }}
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.7 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: 1,
                        }}
                        fill={"transparent"}
                        stroke={sec.color}
                        strokeWidth={0.7}
                        strokeDasharray="0 4"
                        d={sec.path}
                      />
                    </motion.svg>
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
