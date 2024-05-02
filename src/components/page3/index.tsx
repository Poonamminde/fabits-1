import React from "react";
import CloseIcon from "../../assets/cross.svg";
import Car from "../../assets/car1.png";
import "./index.css";

interface interf {
  setStep: React.Dispatch<React.SetStateAction<any>>; // Function prop named onClick that takes no arguments and returns void
}
const Index: React.FC<interf> = ({ setStep }) => {
  let timer: any = React.useRef(null);
  React.useEffect(() => {
    timer.current = setTimeout(() => setStep(4), 5000);
  });
  return (
    <div className="section-fetching">
      <div className="close">
        <img
          src={CloseIcon}
          alt="close"
          className="close-icon"
          onClick={() => {
            setStep(0);
            clearTimeout(timer.current);
          }}
        />
      </div>
      <div className="section-step-31">
        <img src={Car} alt="car" className="car-image-3" />
      </div>
    </div>
  );
};

export default Index;
