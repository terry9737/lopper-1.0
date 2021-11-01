import FooterContact from "./components/Footer/FooterContact";
import FooterFollow from "./components/Footer/FooterFollow";
import FooterMenu from "./components/Footer/FooterMenu";
import FooterPrime from "./components/Footer/FooterPrime";
import FooterServices from "./components/Footer/FooterServices";
import MainContainer from "./components/Layout/MainContainer";
import Wrapper from "./components/Layout/Wrapper";
import "./styles/Footer/footer.scss";

const Footer = () => {
  return (
    <MainContainer footer>
      <Wrapper>
        <footer>
          <div className="footer_main">
            <FooterPrime />
            <FooterMenu />
            <FooterServices />
            <FooterContact />
            <FooterFollow />
          </div>
          <div className="footer_copy"></div>
        </footer>
      </Wrapper>
    </MainContainer>
  );
};

export default Footer;
