import { useState } from "react";

function Service() {
  const [tip, setTip] = useState(5);

  return (
    <div>
      <span>How did you like your service?</span>
      <select value={tip} onChange={(e) => setTip(e.target.value)}>
        <option value={0}> Dissatisfied (0%)</option>
        <option value={5}> It was okay (5%)</option>
        <option value={10}> It was good (10%)</option>
        <option value={20}> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Service;
