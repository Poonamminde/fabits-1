import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Fabits from "../../assets/Logooooo.png";
import "./index.css";

interface interf {
  setStep: React.Dispatch<React.SetStateAction<any>>; // Function prop named onClick that takes no arguments and returns void
}
const index: React.FC<interf> = ({ setStep }) => {
  return (
    <div className="home-container">
      <nav className="nav-bar">
        <div className="nav-subsection">
          <MenuIcon />
          <img src={Fabits} alt="Fabits" id="fabits-logo" />
        </div>
        <div className="nav-subsection">
          <NotificationsNoneIcon />
          <AccountCircleRoundedIcon />
        </div>
      </nav>
      <div id="main">
        <div id="main-section">
          <p className="main-section-item">AT A GLANCE</p>
          <h2 className="main-section-item">
            ₹ 3,596.<h6>21</h6>
          </h2>
          <p className="main-section-item">Currency Value</p>
          <div id="currency-flex" className="main-section-item">
            <h4>
              ₹ 3,500.<h6>11</h6>
            </h4>
            <h4>
              ₹ +96.<h6>10</h6>
            </h4>
          </div>
        </div>
        <button className="start-button" onClick={() => setStep(1)}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default index;
