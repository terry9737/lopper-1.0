import "../../styles/Header/rightSlider.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { HeaderSlider } from "../../animations/HeaderSliders";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
const RightSlider = () => {
  const { sliderControls } = useContext(DataContext);
  return (
    <div className="right_slider">
      <motion.div
        variants={HeaderSlider}
        initial="hidden"
        animate={sliderControls}
        className="right_slider-wrapper"
      >
        <p className="right_slider-wrapper__text">
          Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
        </p>
        <span>
          <HiArrowNarrowRight />
          <HiArrowNarrowRight />
        </span>
      </motion.div>
    </div>
  );
};

export default RightSlider;
