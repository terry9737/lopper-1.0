import "./styles/Subscribe/subscribe.scss";
import SubscribeInput from "./styles/Subscribe/SubscribeInput";
import MainContainer from "./components/Layout/MainContainer";
import Wrapper from "./components/Layout/Wrapper";
const Subscribe = () => {
  return (
    <MainContainer>
      <Wrapper>
        <div className="subscribe">
          <h3>Subscribe to our newsletter</h3>
          <p>Cras pulvinar mattis nunc sed blandit.</p>
          <SubscribeInput />
        </div>
      </Wrapper>
    </MainContainer>
  );
};

export default Subscribe;
