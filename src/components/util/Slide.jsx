import React from "react";
import {useInView} from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Slide = ({children, direction}) => {
  const {inView, ref} = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        delay: 0.3,
      }
    });
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: direction==="left" ? "-100vw" : "100vw" }}
        animate={animationControl}
        className="slide"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Slide;