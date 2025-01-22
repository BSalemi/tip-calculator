import { useState } from "react";
import Bill from "./Bill.js";
import Service from "./Service.js";
import Reset from "./ResetButton.js";
import Total from "./Total.js";

function App() {
  const [price, setPrice] = useState("");
  const [tip, setTip] = useState(5);
  return (
    <div>
      <Bill price={price} setPrice={setPrice} />
      <Service tip={tip} setTip={setTip} />
      <Service tip={tip} setTip={setTip} />
      <Total />
      <Reset />
    </div>
  );
}

export default App;
