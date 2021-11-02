import fb from "../../images/footer/fb.svg";
import tw from "../../images/footer/tw.svg";
import ig from "../../images/footer/ig.svg";
import yt from "../../images/footer/yt.svg";
import mm from "../../images/footer/mm.svg";
const FooterFollow = () => {
  return (
    <div className="footer_main-follow">
      <p>Follow us</p>
      <ul>
        <li>
          <a href="/">
            <span>
              <img src={tw} alt="twitter" />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <img src={fb} alt="facebook" />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <img src={ig} alt="instagram" />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <img src={yt} alt="youtube" />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <img src={mm} alt="mm" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterFollow;
