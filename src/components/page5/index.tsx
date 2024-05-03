import React from "react";
import CloseIcon from "../../assets/cross.svg";
import Profile from "../../assets/profileIcon.png";
import "./index.css";

interface interf {
  setStep: React.Dispatch<React.SetStateAction<any>>; // Function prop named onClick that takes no arguments and returns void
}
const index: React.FC<interf> = ({ setStep }) => {
  return (
    <div className="section-result">
      <div className="close">
        <img
          src={CloseIcon}
          alt="close"
          className="close-icon"
          onClick={() => {
            setStep(0);
          }}
        />
      </div>
      <div className="section-step-51">
        <div className="section-step-52"></div>
        <div className="section-heading" style={{ marginTop: "30px" }}>
          <h2>Verify your details</h2>
          <p>Aadhaar link found</p>
        </div>
        <div id="section-step-53">
          <div className="card-container">
            <div className="card-section">
              <img src={Profile} alt="profile" />
              <div>
                <h1>CMRPMXXXXF</h1>
                <h3>ASHAR RAI MUJEEB</h3>
              </div>
            </div>
            <div className="card-section">
              <div>
                <p>Fetched Via</p>
                <h4>NSDL</h4>
              </div>
              <div>
                <p>Last Updated</p>
                <h4>24/04/2024</h4>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-section">
              <img src={Profile} alt="profile" />
              <div>
                <h1>CMRPMXXXXF</h1>
                <h3>ASHAR RAI MUJEEB</h3>
              </div>
            </div>
            <div className="card-section">
              <div>
                <p>Fetched Via</p>
                <h4>NSDL</h4>
              </div>
              <div>
                <p>Last Updated</p>
                <h4>24/04/2024</h4>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-section">
              <img src={Profile} alt="profile" />
              <div>
                <h1>CMRPM</h1>
                <h3>ASHAR RAI MUJEEB</h3>
              </div>
            </div>
            <div className="card-section">
              <div>
                <p>Fetched Via</p>
                <h4>NSDL</h4>
              </div>
              <div>
                <p>Last Updated</p>
                <h4>24/04/2024</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
