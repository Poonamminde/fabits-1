import React from "react";
import CloseIcon from "../../assets/cross.svg";
import Car from "../../assets/car1.png";
import "./index.css";

interface interf {
  setStep: React.Dispatch<React.SetStateAction<any>>; // Function prop named onClick that takes no arguments and returns void
}
const Index: React.FC<interf> = ({ setStep }) => {
  React.useEffect(() => {
    setTimeout(() => setStep(4), 6000);
  }, []);
  return (
    <div className="section-fetching">
      <div className="close">
        <img
          src={CloseIcon}
          alt="close"
          className="close-icon"
          onClick={() => setStep(0)}
        />
      </div>
      <div className="section-step-31">
        <img src={Car} alt="car" className="car-image-3" />
      </div>
    </div>
  );
};

export default Index;
