import "../../styles/UI/intro.scss";

const Intro = ({ intro, content, centered }) => {
  return (
    <div className={`intro ${centered && "centered"}`}>
      <p>{intro}</p>
      <h3>{content}</h3>
    </div>
  );
};

export default Intro;
