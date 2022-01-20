import logo from "../assets/logo.svg";

const styleLogo = {
  height: "32px",
};

const styleLink = {
  textDecoration: "none",
};

const Logo = () => {
  return (
    <a className="logoDesktop logoMobile" style={styleLink} href="/">
      <img style={styleLogo} src={logo} />
    </a>
  );
};

export default Logo;
