import logo from "../assets/logo.svg";

const styleLogo = {
  height: "32px",
  marginRight: "15px",
};

const styleLink = {
  textDecoration: "none",
};

const Logo = () => {
  return (
    <a style={styleLink} href="/">
      <img style={styleLogo} src={logo} />
    </a>
  );
};

export default Logo;
