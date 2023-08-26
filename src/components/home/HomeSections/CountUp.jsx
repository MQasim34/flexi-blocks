import React from "react";
import "../HomeStyle.scss";
import { forCounter } from "../../../siteContent/home/HomeCon";
import { motion, AnimatePresence } from "framer-motion";

// const CountupCard = ({ end, title }) => {
//   return (
//     <>
//     <AnimatePresence initial={false}>
//     <motion.div className="inner">
//       <h1 className="numbers">{end}</h1>
//       <h3 className="title">{title}</h3>
//     </motion.div>
//     </AnimatePresence>
//     </>
//   );
// };

const countUpvariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2 * index,
      duration: 0.2,
    },
  }),
};

const CountUp = () => {
  return (
    <div>
      <div className="counterUp">
        <div className="outer">
          {forCounter.map((forcounter, index) => (
            // <CountupCard key={index} index={index} {...forcounter} />
            <motion.div
              className="inner"
              key={index}
              variants={countUpvariants}
              initial="initial"
              whileInView="animate"
              // viewport={{ once: true }}
              custom={index}
            >
              <h1 className="numbers">{forcounter.end}</h1>
              <h3 className="title">{forcounter.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountUp;
