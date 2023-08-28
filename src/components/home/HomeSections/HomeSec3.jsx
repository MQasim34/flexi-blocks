import React from "react";
import Img from "../../../assets/homeImg/sec3Img.png";
import { section3left, section3right } from "../../../siteContent/home/HomeCon";
import { motion } from "framer-motion";

const homeSec3Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 1,
    },
  }),
};

const HomeSec3 = () => {
  return (
    <div className="section3">
      <div className="main">
        <div className="upperSec">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Have Fun Learn Fast
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            See How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We help our clients achieve tangible, high-impact results. <br />{" "}
            Tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>

        <div className="lowerSec">
          <div className="left">
            {section3left.map((left, index) => (
              <motion.div
                key={left.title}
                variants={homeSec3Variants}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <h1>{left.title}</h1>
                <p>{left.details}</p>
              </motion.div>
            ))}
          </div>
          <div className="mdle">
            <motion.img
              src={Img}
              alt=""
              initial={{ opacity: 0, scale: 1.2, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            />
          </div>
          <div className="right">
            {section3right.map((right, index) => (
              <motion.div
                key={right.title}
                variants={homeSec3Variants}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <h1>{right.title}</h1>
                <p>{right.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeSec3;
