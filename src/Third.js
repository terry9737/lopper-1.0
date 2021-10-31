import MainContainer from "./components/Layout/MainContainer";
import Wrapper from "./components/Layout/Wrapper";
import Numbers from "./components/Third/Numbers";
import Intro from "./components/UI/Intro";
import "./styles/Third/third.scss";
const Third = () => {
  return (
    <MainContainer>
      <Wrapper>
        <div className="third">
          <Intro
            intro={"What we do"}
            content={"What we  do more than you can  imangine, belive us."}
            centered
          />
          <Numbers />
        </div>
      </Wrapper>
    </MainContainer>
  );
};

export default Third;
