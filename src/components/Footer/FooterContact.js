import mail from "../../images/footer/footer-mail.svg";
import phone from "../../images/footer/footer-phone.svg";

const FooterContact = () => {
  return (
    <div className="footer_main-contact">
      <p>Contact us</p>
      <ul>
        <li>
          <a href="/">
            <span>
              <img src={mail} alt="mail" />
            </span>
            contact@lop.com
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <img src={phone} alt="phone" />
            </span>
            856 - 693 - 456
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
