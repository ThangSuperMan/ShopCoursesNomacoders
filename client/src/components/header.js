import "./header.css";
import Logo from "./logo";

const Header = () => {
  console.log("hello");

  return (
    <div className="header-container">
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
