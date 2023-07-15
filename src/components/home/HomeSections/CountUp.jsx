import React, { useEffect } from "react";
import "../HomeStyle.scss";
import { forCounter } from "../../../siteContent/home/homeCon";
import { motion } from "framer-motion";



const CountUp = () => {
  return (
    <motion.div  
    className="counterUp">
      <div className="outer">
        {forCounter.map((forcounter) => (
          <div className="inner" key={forcounter.id}>
            <h1 className="numbers">{forcounter.end}</h1>
            <h3 className="title">{forcounter.title}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountUp;
