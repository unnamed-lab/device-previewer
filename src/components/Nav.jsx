import "../styling/css/index.css";
import mobileImg from "../assets/logo-white.png";

const Nav = ({ name }) => (
  <div className="nav-brand">
    <img src={mobileImg} alt={name} />
  </div>
);

export default Nav;
