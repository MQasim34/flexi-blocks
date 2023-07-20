import React, { useRef, useEffect, useState } from "react";
import "../HomeStyle.scss";
import { forCounter } from "../../../siteContent/home/HomeCon";
import { motion } from "framer-motion";


const numberVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 2,
      duration: 1,
    },
  },
}

const CountUp = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="counterUp">
        <div className="outer" ref={elementRef}>
          {forCounter.map((forcounter) => (
            <div className="inner" key={forcounter.id}>
              <motion.h1
                className="numbers"
                variants={numberVariants}
                initial='hidden'
                animate={
                  isVisible ? 'visible' : 'hidden'
                }
                // transition={{ duration: .7 }}
              >
                {forcounter.end}
              </motion.h1>
              <motion.h3 
              className="title"
              ref={elementRef}
                initial={{ opacity: 0 }}
                animate={
                  isVisible ? { opacity: 1  } : { opacity: 0 }
                }
                transition={{ duration: .5 }}
              >{forcounter.title}</motion.h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountUp;
