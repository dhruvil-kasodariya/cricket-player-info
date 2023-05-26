import "./footer.style.css";
import { IonIcon } from "@ionic/react";
import { FiInstagram, FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-contener">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://github.com/iambunty45"
            >
              <FiGithub />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FiTwitter />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FiLinkedin />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FiInstagram />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://kasodariyadhruvil45@gmail.com"
            >
              <AiOutlineMail />
            </a>
          </li>
        </ul>

        <p>&copy;{currentYear} Dhruvil Kasodariya | Craete With Fun</p>
      </footer>
    </div>
  );
};

export default Footer;
