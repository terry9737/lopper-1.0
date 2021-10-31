import MainContainer from "./components/Layout/MainContainer";
import "./styles/Fourth/fourth.scss";
import codepen from "./images/codepen.svg";
import dribble from "./images/dribble.svg";
import Wrapper from "./components/Layout/Wrapper";

const Fourth = () => {
  return (
    <>
      <MainContainer>
        <div className="fourth">
          <Wrapper>
            <div className="fourth_grid">
              <div className="grid">
                <p className="grid_title">our clients</p>
                <div className="grid_image">
                  <img src={codepen} alt="dribble logo" />
                </div>
                <div className="grid_image">
                  <img src={dribble} alt="dribble logo" />
                </div>
                <div className="grid_image">
                  <img src={dribble} alt="dribble logo" />
                </div>
                <div className="grid_image">
                  <img src={codepen} alt="dribble logo" />
                </div>
                <div className="grid_image">
                  <img src={codepen} alt="dribble logo" />
                </div>
                <div className="grid_image">
                  <img src={dribble} alt="dribble logo" />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </MainContainer>
    </>
  );
};

export default Fourth;
