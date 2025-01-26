function BillInput({ bill, setBill }) {
  return (
    <div>
      <span className="text">How much was the bill?</span>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default BillInput;
