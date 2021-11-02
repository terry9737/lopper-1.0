import MainContainer from "./components/Layout/MainContainer";
import "./styles/Fourth/fourth.scss";
import codepen from "./images/codepen.svg";
import dribble from "./images/dribble.svg";
import Wrapper from "./components/Layout/Wrapper";
import { motion, useAnimation } from "framer-motion";

const Fourth = () => {
  const controls = useAnimation();
  const controlsOne = useAnimation();
  const controlsTwo = useAnimation();
  const controlsThree = useAnimation();
  const controlsFour = useAnimation();
  const controlsFive = useAnimation();

  const variants = {
    hidden: { rotate: 0, scale: 1 },
    active: {
      rotate: [10, -10, 10],
      scale: [1.2, 1.1, 1.2],
      transition: { duration: 1.2, repeat: Infinity },
    },
  };
  return (
    <>
      <MainContainer>
        <div className="fourth">
          <Wrapper>
            <div className="fourth_grid">
              <div className="grid">
                <p className="grid_title">our clients</p>
                <motion.div
                  onMouseEnter={() => controls.start("active")}
                  onMouseLeave={() => controls.start("hidden")}
                  variants={variants}
                  initial="hidden"
                  animate={controls}
                  className="grid_image"
                >
                  <img src={codepen} alt="dribble logo" />
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate={controlsOne}
                  onMouseEnter={() => controlsOne.start("active")}
                  onMouseLeave={() => controlsOne.start("hidden")}
                  className="grid_image"
                >
                  <img src={dribble} alt="dribble logo" />
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate={controlsTwo}
                  onMouseEnter={() => controlsTwo.start("active")}
                  onMouseLeave={() => controlsTwo.start("hidden")}
                  className="grid_image"
                >
                  <img src={dribble} alt="dribble logo" />
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate={controlsThree}
                  onMouseEnter={() => controlsThree.start("active")}
                  onMouseLeave={() => controlsThree.start("hidden")}
                  className="grid_image"
                >
                  <img src={codepen} alt="dribble logo" />
                </motion.div>
                <motion.div
                  initial="hidden"
                  variants={variants}
                  animate={controlsFour}
                  onMouseEnter={() => controlsFour.start("active")}
                  onMouseLeave={() => controlsFour.start("hidden")}
                  className="grid_image"
                >
                  <img src={codepen} alt="dribble logo" />
                </motion.div>
                <motion.div
                  initial="hidden"
                  variants={variants}
                  animate={controlsFive}
                  onMouseEnter={() => controlsFive.start("active")}
                  onMouseLeave={() => controlsFive.start("hidden")}
                  className="grid_image"
                >
                  <img src={dribble} alt="dribble logo" />
                </motion.div>
              </div>
            </div>
          </Wrapper>
        </div>
      </MainContainer>
    </>
  );
};

export default Fourth;
