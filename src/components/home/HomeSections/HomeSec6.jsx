import React, { useState } from "react";
import { motion } from "framer-motion";
import { section6 } from "../../../siteContent/home/HomeCon";

const HomeSec6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="HomeSec6">
      <div className="main">
        <div className="inner">
          <div className="hsec6Left">
            <div>
              <div className="leftInner">
                {section6.map((sec6, index) => (
                  <div
                    key={index}
                    className={
                      index === currentSlide ? "leftMain active" : "leftMain"
                    }
                  >
                    <motion.div className={`sldierImg ${currentSlide === index ? 'open' : ''}`}
                    initial={{ scale: .8, rotate: '-30deg', opacity: 0 }}
                    animate={{ scale:  currentSlide === index ?  1 : .8, opacity:  currentSlide === index ?  1 : 0, rotate:  currentSlide === index ? '0deg' :'-30deg'  }}
                    exit={{ scale: .8 }}
                    transition={{ duration: .4 }}
                    onClick={() => goToSlide(index)}
                    >
                      <img src={sec6.image} alt="" />
                    </motion.div>
                    <motion.div className={`sliderCont ${currentSlide === index ? 'open': ''}` }
                    initial={{y: 40, opacity: 0,}}
                    animate={{y: currentSlide === index ? 0 : 40, opacity: currentSlide === index ? 1: 0, }}
                    transition={{duration: .5}}>
                      <h2>{sec6.name}</h2>
                      <h1>{sec6.position}</h1>
                      <p>{sec6.details}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="dots">
                {section6.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentSlide === index ? "dot active" : "dot" }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hsec6Right">
            <div>
              <h1>
                {" "}
                <span>Start Learning</span> and Join Our <br /> Happy Users
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec6;
