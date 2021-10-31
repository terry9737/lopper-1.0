import FirstGrid from "./components/First/FirstGrid";
import MainContainer from "./components/Layout/MainContainer";
import Wrapper from "./components/Layout/Wrapper";
import Intro from "./components/UI/Intro";
import "./styles/First/first.scss";
const First = () => {
  return (
    <MainContainer>
      <Wrapper>
        <div className="padded_cont">
          <Intro intro="intro" content="What we do" />
          <p className="first_text">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <FirstGrid />
          <Intro intro="What we do" content="Make it easy with us" />
        </div>
      </Wrapper>
    </MainContainer>
  );
};

export default First;
