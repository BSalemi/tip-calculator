import { useState } from "react";
import BillInput from "./BillInput.js";
import SelectPercentage from "./SelectPercentage.js";
import Reset from "./ResetButton.js";
import Total from "./Total.js";

function App() {
  const [price, setPrice] = useState(0);
  const [tipPercentage1, setTipPercentage1] = useState(0);
  const [tipPercentage2, setTipPercentage2] = useState(0);

  function handleReset() {
    setPrice(0);
    setTipPercentage1(0);
    setTipPercentage2(0);
  }
  return (
    <div>
      <BillInput price={price} setPrice={setPrice} />
      <SelectPercentage
        tipPercentage={tipPercentage1}
        setTipPercentage={setTipPercentage1}
      >
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage
        tipPercentage={tipPercentage2}
        setTipPercentage={setTipPercentage2}
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>
      <Total tipPercentage={tipPercentage1} bill={price} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

export default App;
