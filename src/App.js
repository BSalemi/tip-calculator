import { useState } from "react";
import Bill from "./Bill.js";
import Service from "./Service.js";
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
      <Bill price={price} setPrice={setPrice} />
      <Service tip={tip} setTip={setTip}>
        <span>How did you like the service?</span>
      </Service>
      <Service tip={tip} setTip={setTip}>
        <span>How did your friend like the service?</span>
      </Service>
      <Total tip={tip} bill={price} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

export default App;
