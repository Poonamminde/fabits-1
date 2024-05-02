import React from "react";
import First from "./components/page1";
import Home from "./components/home";
import "./App.css";

function App() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (step > 0) {
      document
        .getElementsByClassName("home-container")[0]
        .classList.add("blur");
    } else {
      document
        .getElementsByClassName("home-container")[0]
        .classList.remove("blur");
    }

    // Cleanup function to remove the blur class when the component unmounts
    return () => {
      document
        .getElementsByClassName("home-container")[0]
        .classList.remove("blur");
    };
  }, [step]);
  return (
    <div style={{ position: "relative" }}>
      <Home setStep={setStep} />
      {step === 1 && <First setStep={setStep} />}
    </div>
  );
}

export default App;
