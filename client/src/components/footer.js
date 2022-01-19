import "./footer.css";
import logoGray from "../assets/logo-gray.svg";
import {
  FaLinkedin,
  FaYoutube,
  FaFacebookSquare,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-item footer-leftbar">
          <h4 className="footer-leftbar-title footer-title">nomad coders</h4>
          <p className="footer-leftbar-desc">
            <span>Nomad Company Co. , Ltd.</span>
            <span>CEO: In Park </span>
            <span>Personal Information Manager: In Park</span>
            <span>Business Number: 301-88-01666</span>
            <span>
              Address: Room 141, 6th floor, 17-28, Yanghwa-ro 8-gil, Mapo-gu,
              Seoul
            </span>
            -
            <span>
              Distance Continuing Education Center: Seobu Educational Support
            </span>
            <span>Office of Seoul (No. 2020) -13)</span>
            <span>Mail-order business report number: 2020-Seoul Mapo-1987</span>
            <span>Email: help [@] nomadcoders.co</span>
          </p>
        </div>

        <div className="footer-item footer-middlebar">
          <div className="footer-middlebar-navigation">
            <h4 className="footer-title">navigation</h4>
            <ul className="middlebar-menu-list">
              <li className="middlebar-menu-item">
                <a href="#">Courses</a>
              </li>
              <li className="middlebar-menu-item">
                <a href="#">Challenges</a>
              </li>
              <li className="middlebar-menu-item">
                <a href="#">Community</a>
              </li>
              <li className="middlebar-menu-item">
                <a href="#">FAQ</a>
              </li>
              <li className="middlebar-menu-item">
                <a href="#">roadmap</a>
              </li>
            </ul>
          </div>
          <div className="footer-middlebar-legal">
            <h4 className="footer-title">legal</h4>
            <ul className="middlebar-menu-list">
              <li className="middlebar-menu-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="middlebar-menu-item">
                <a href="#">Privacy Statement</a>
              </li>
              <li className="middlebar-menu-item">
                <a href="#">Cancellation and Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-item footer-rightbar">
          <div className="footer-rightbar-logo">
            <img src={logoGray} />
          </div>
          <span className="footer-rightbar-quote">
            Clone Startsup. Learn to Code.
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-rightbar">
          © 2017- 2022 Nomad Coders. All rights reserved.
        </div>
        <div className="footer-bottom-leftbar">
          <FaLinkedin className="icon" />
          <FaYoutube className="icon" />
          <FaFacebookSquare className="icon" />
          <FaGithub className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
