import { useState } from "react";
import Bill from "./Bill.js";
import Service from "./Service.js";
import Reset from "./ResetButton.js";
import Total from "./Total.js";

function App() {
  const [price, setPrice] = useState("");
  return (
    <div>
      <Bill price={price} setPrice={setPrice} />
      <Service />
      <Service />
      <Total />
      <Reset />
    </div>
  );
}

export default App;
