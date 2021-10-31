import HeaderText from "./components/Header/HeaderText";
import RightSlider from "./components/Header/RightSlider";
import MainContainer from "./components/Layout/MainContainer";
import Wrapper from "./components/Layout/Wrapper";
import Navbar from "./components/navbar/navbar";

const Header = () => {
  return (
    <>
      <MainContainer color={"pink"}>
        <Wrapper>
          <Navbar />
          <HeaderText />
        </Wrapper>
        <Wrapper full>
          <RightSlider />
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default Header;
