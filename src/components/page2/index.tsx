import React from "react";
import Car from "../../assets/car1.png";
import RightArrow from "../../assets/arrow_right_alt.svg";
import LeftArrow from "../../assets/keyboard_backspace.png";
import CloseIcon from "../../assets/cross.svg";
import "./index.css";

interface interf {
  setStep: React.Dispatch<React.SetStateAction<any>>; // Function prop named onClick that takes no arguments and returns void
}
const Index: React.FC<interf> = ({ setStep }) => {
  const [option, setOption] = React.useState(0);
  const [pan, setPan] = React.useState("");
  const [error, setError] = React.useState(0);
  const handleSubmit = (e: any) => {
    console.log(pan.length);
    if (pan.trim().length === 10 && option !== 0) {
      console.log("error");
      setStep(3);
    }
    setError(1);
    e.preventDefault();
  };
  return (
    <div className="section">
      <div className="close">
        <img
          src={CloseIcon}
          alt="close"
          className="close-icon"
          onClick={() => setStep(0)}
        />
      </div>
      <div>
        <div className="section-1">
          {/*<img src={Image} alt="background" />*/}
          <div className="section-heading">
            <h2>Get started with Fabits</h2>
            <p>Answer a few questions to begin onboarding</p>
          </div>
          <img src={Car} alt="car" className="car-image" />
        </div>
        <div className="section-2">
          <div className="step-heading">
            <h3>Please enter your PAN details to complete verification</h3>
            <div className="pagination">2/2</div>
          </div>
          <p>Verification method</p>
          <div className="option-container">
            <div
              className={option === 1 ? "option-selected" : ""}
              onClick={() => setOption(1)}
            >
              Manual
            </div>
            <div
              className={option === 2 ? "option-selected" : ""}
              onClick={() => setOption(2)}
            >
              Automatic
            </div>
          </div>
          <form>
            <div className="option-container">
              <span>PAN card Number</span>
              <input
                type="text"
                placeholder="pan number"
                onChange={(e) => setPan(e.target.value)}
                required
              />
            </div>
            {error === 1 && (
              <div id="error">
                select verification method and enter PAN number which 10
                character.
              </div>
            )}
            <div className="option-container">
              <div id="prev" onClick={() => setStep(1)}>
                <img src={LeftArrow} alt="" />
              </div>
              <button type="submit" id="next" onClick={(e) => handleSubmit(e)}>
                <h3>Complete</h3>
                <img src={RightArrow} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
