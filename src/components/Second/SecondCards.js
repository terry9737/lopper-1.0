import Wrapper from "../Layout/Wrapper";
import "../../styles/Second/second.scss";
const SecondCards = () => {
  return (
    <div className="second_cards">
      <div className="second_cards-wrapper">
        <div className="card_one">
          <Wrapper>
            <div className="inner_card">
              <h5>
                We build great <br /> business
              </h5>
              <p>
                Id consectetur purus ut faucibus pulvinar elementum integer
                enim. A arcu cursus vitae congue mauris rhoncus aenean.
              </p>
            </div>
          </Wrapper>
        </div>
        <div className="card_two">
          <Wrapper>
            <div className="inner_card">
              <h5>
                We build great <br /> business
              </h5>
              <p>
                Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus
                commodo viverra maecenas accumsan lacus vel.
              </p>
            </div>
          </Wrapper>
        </div>
        <div className="card_three">
          <Wrapper>
            <div className="inner_card">
              <h5>
                We build great <br /> business
              </h5>
              <p>
                Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
                dignissim cras. Eleifend donec pretium vulputate sapien nec
                sagittis.
              </p>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="second_image"></div>
    </div>
  );
};

export default SecondCards;
