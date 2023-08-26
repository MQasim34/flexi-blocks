import React from "react";
import "../HomeStyle.scss";
import hero from "../../../assets/homeImg/hero.png";
import herooverlayone from "../../../assets/homeImg/herooverlayone.png";
import herooverlaytwo from "../../../assets/homeImg/herooverlaytwo.png";

import { motion } from "framer-motion";

const homesec1Left = {
  initial: {
    y: -100,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "tween",
      duration: 1,
      scroll: "smooth",
      // ease: 'ease-in-out'
    },
  },
};

const homesec1Right = {
  initial: {
    x: 100,
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "tween",
      duration: 1,
      scroll: "smooth",
      // ease: 'ease-in-out'
    },
  },
};

const HomeSec1 = () => {
  return (
    <div className="homesec1">
      <div className="main">
        <div className="inner">
          <motion.div
            className="left"
            variants={homesec1Left}
            initial="initial"
            animate="final"
          >
            <span>Start Learning Today</span>
            <h1>
              Introducing <br /> Learning App
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.
            </p>
          </motion.div>
          <motion.div
            className="right"
            variants={homesec1Right}
            initial="initial"
            animate="final"
          >
            <div className="hero">
              <img src={hero} alt="" />
            </div>
            <motion.div
              className="herooverlayone"
              animate={{
                y: [-5, 5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
            >
              <img src={herooverlayone} alt="" />
            </motion.div>

            <motion.div
              className="herooverlaytwo"
              animate={{
                y: [3, -3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
            >
              <img src={herooverlaytwo} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec1;
