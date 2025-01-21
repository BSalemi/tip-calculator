import { useState } from "react";

function Service() {
  return (
    <div>
      <span>How did you like your service?</span>
      <select>
        <option> Dissatisfied (0%)</option>
        <option> It was okay (5%)</option>
        <option> It was good (10%)</option>
        <option> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Service;
