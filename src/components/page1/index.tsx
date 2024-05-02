import React from "react";

import RightArrow from "../../assets/arrow_right_alt.svg";
import CloseIcon from "../../assets/cross.svg";
import Car from "../../assets/car1.png";
import "./index.css";

interface interf {
  setStep: React.Dispatch<React.SetStateAction<any>>; // Function prop named onClick that takes no arguments and returns void
}
const Index: React.FC<interf> = ({ setStep }) => {
  const [option, setOption] = React.useState(0);
  return (
    <div className="section">
      <div className="close">
        <img
          src={CloseIcon}
          alt="cross"
          className="close-icon"
          onClick={() => setStep(0)}
        />
      </div>
      <div>
        <div className="section-step-11">
          {/*<img src={Image} alt="background" />*/}
          <div className="section-heading">
            <h2>Get started with Fabits</h2>
            <p>Answer a few questions to begin onboarding</p>
          </div>
          <img src={Car} alt="car" className="car-image-step-1" />
        </div>
        <div className="section-step-12">
          <div className="step-heading">
            <h3>How much trading experience do you have?</h3>
            <div className="pagination">1/2</div>
          </div>
          <div className="option-container">
            <div
              className={
                option !== 1
                  ? `option-item`
                  : `option-item option-item-selected`
              }
              onClick={() => setOption(1)}
            >
              <h4>None</h4>
              <p>{"<1Y"}</p>
            </div>
            <div
              className={
                option !== 2
                  ? `option-item`
                  : `option-item option-item-selected`
              }
              onClick={() => setOption(2)}
            >
              <h4>Beginner</h4>
              <p>1Y-3Y</p>
            </div>
            <div
              className={
                option !== 3
                  ? `option-item`
                  : `option-item option-item-selected`
              }
              onClick={() => setOption(3)}
            >
              <h4>Mid</h4>
              <p>3Y-5Y</p>
            </div>
            <div
              className={
                option !== 4
                  ? `option-item`
                  : `option-item option-item-selected`
              }
              onClick={() => setOption(4)}
            >
              <h4>Pro</h4>
              <p>{">5Y"}</p>
            </div>
          </div>
          <div className="button" onClick={() => setStep(2)}>
            <h3>Next</h3>
            <img src={RightArrow} alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
