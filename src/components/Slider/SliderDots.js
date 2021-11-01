import { Dotsdata } from "./SliderData";
const SliderDots = () => {
  return (
    <>
      <div className="dots_wrapper">
        {Dotsdata.map((item) => {
          return (
            <span key={item.id} className="dot">
              <img src={item.pic} alt="dot" />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default SliderDots;
