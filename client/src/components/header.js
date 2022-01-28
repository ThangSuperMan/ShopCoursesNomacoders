import "./header.css";
import logoSvg from "../assets/logo.svg";
import Logo from "./logo";
import { BsList, BsX } from "react-icons/bs";
import { useRef, useState } from "react";

const Header = () => {
  const [iconMenuActive, setIconMenuActive] = useState(true);
  const menuMobileRef = useRef();

  function toggleMenuMobile() {
    if (menuMobileRef.current.style.display === "none") {
      menuMobileRef.current.style.display = "block";
      setIconMenuActive(false);
    } else {
      menuMobileRef.current.style.display = "none";
      setIconMenuActive(true);
    }
  }

  return (
    <div className="header-container">
      <div className="header-mobile">
        <div onClick={toggleMenuMobile} className="header-mobile-menubar">
          {iconMenuActive ? (
            <BsList className="icon" />
          ) : (
            <BsX className="icon" />
          )}
        </div>

        <ul ref={menuMobileRef} className="header-mobile-list">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Challenges</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">roadmap</a>
          </li>
        </ul>

        <div className="header-mobile-logo">
          <a href="/">
            <img src={logoSvg} />
          </a>
        </div>

        <div className="btn btn-primary btn-mobile">
          <a href="/">Join</a>
        </div>
      </div>
      <div className="header-inner">
        <div className="header-inner-right">
          <Logo />
          <div className="inner-menu-list">
            <a href="/" className="inner-menu-item">
              Courses
            </a>
            <a href="/" className="inner-menu-item">
              Challenges
            </a>
            <a href="/" className="inner-menu-item">
              Community
            </a>
            <a href="/" className="inner-menu-item">
              FAQ
            </a>
            <a href="/" className="inner-menu-item">
              roadmap
            </a>
          </div>
        </div>

        <div className="header-inner-left">
          <div className="btn btn-secondary">
            <a href="/">Login</a>
          </div>
          <div className="btn btn-primary">
            <a href="/">Join</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
