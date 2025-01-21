import { useState } from "react";

function Bill() {
  const [price, setPrice] = useState("");

  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
    </div>
  );
}

export default Bill;
