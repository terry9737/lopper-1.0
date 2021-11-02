import "../../styles/Header/headerText.scss";
import AnimatedArrow from "./AnimatedArrow";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
const HeaderText = () => {
  const { ref } = useContext(DataContext);
  return (
    <div className="header_text" ref={ref}>
      <div className="header_text-mission">
        <p className="header_text-mission__question">What we do?</p>
        <h1 className="header_text-mission__main">
          We grow <br /> <span>great business</span>
        </h1>
      </div>
      <div className="header_text-scroll">
        <p>Scroll to see more</p>
        <AnimatedArrow />
      </div>
    </div>
  );
};

export default HeaderText;
