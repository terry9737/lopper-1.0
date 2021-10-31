import "../../styles/Header/rightSlider.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
const RightSlider = () => {
  return (
    <div className="right_slider">
      <div className="right_slider-wrapper">
        <p className="right_slider-wrapper__text">
          Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
        </p>
        <span>
          <HiArrowNarrowRight />
          <HiArrowNarrowRight />
        </span>
      </div>
    </div>
  );
};

export default RightSlider;
