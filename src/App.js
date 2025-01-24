import { useState } from "react";
import BillInput from "./BillInput.js";
import SelectPercentage from "./SelectPercentage.js";
import Reset from "./ResetButton.js";
import Total from "./Total.js";

function App() {
  const [price, setPrice] = useState(0);
  const [tip, setTip] = useState(0);

  function handleReset() {
    setPrice(0);
    setTip(0);
  }
  return (
    <div>
      <BillInput price={price} setPrice={setPrice} />
      <SelectPercentage tip={tip} setTip={setTip}>
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage tip={tip} setTip={setTip}>
        <span>How did your friend like the service?</span>
      </SelectPercentage>
      <Total tip={tip} bill={price} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

export default App;
