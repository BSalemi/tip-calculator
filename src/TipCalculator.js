import { useState } from "react";
import BillInput from "./BillInput.js";
import SelectPercentage from "./SelectPercentage.js";
import ResetButton from "./ResetButton.js";
import Total from "./Total.js";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage1, setTipPercentage1] = useState(0);
  const [tipPercentage2, setTipPercentage2] = useState(0);

  let combinedTip = (tipPercentage1 + tipPercentage2) / 2;

  function handleReset() {
    setBill("");
    setTipPercentage1(0);
    setTipPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        tipPercentage={tipPercentage1}
        setTipPercentage={setTipPercentage1}
      >
        <span className="text">How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage
        tipPercentage={tipPercentage2}
        setTipPercentage={setTipPercentage2}
      >
        <span className="text">How did your friend like the service?</span>
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Total tip={combinedTip} bill={bill} />
          <ResetButton handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default TipCalculator;
