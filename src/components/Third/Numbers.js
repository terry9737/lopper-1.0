import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useWidth } from "../../hooks/useWidth";

const Numbers = () => {
  const { width } = useWidth();
  const { inView, ref } = useInView();
  const controls = useAnimation();
  const variants = {
    smallHidden: { x: "-200vw" },
    smallVisible: { x: 0, transition: { type: "tween" } },
    bigHidden: { y: "-200vh" },
    bigVisible: { y: 0, transition: { type: "tween" } },
  };
  const secondVariants = {
    smallHidden: { x: "-200vw" },
    smallVisible: { x: 0, transition: { type: "tween", delay: 0.1 } },
    bigHidden: { y: "-200vh" },
    bigVisible: { y: 0, transition: { type: "tween", delay: 0.1 } },
  };
  const thirdVariants = {
    smallHidden: { x: "-200vw" },
    smallVisible: { x: 0, transition: { type: "tween", delay: 0.2 } },
    bigHidden: { y: "-200vh" },
    bigVisible: { y: 0, transition: { type: "tween", delay: 0.2 } },
  };
  useEffect(() => {
    if (inView && width > 759) {
      controls.start("bigVisible");
    } else if (!inView && width > 759) {
      controls.start("bigHidden");
    }

    if (inView && width < 759) {
      controls.start("smallVisible");
    } else if (!inView && width < 759) {
      controls.start("smallHidden");
    }
  });
  return (
    <div className="numbers" ref={ref}>
      <motion.div variants={variants} animate={controls} className="number_one">
        <h1>15+</h1>
        <p>Nobel prizes</p>
      </motion.div>
      <motion.div
        variants={secondVariants}
        animate={controls}
        className="number_two"
      >
        <h1>15+</h1>
        <p>Nobel prizes</p>
      </motion.div>
      <motion.div
        variants={thirdVariants}
        animate={controls}
        className="number_three"
      >
        <h1>15+</h1>
        <p>Nobel prizes</p>
      </motion.div>
    </div>
  );
};

export default Numbers;
