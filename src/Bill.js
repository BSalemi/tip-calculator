function Bill({ price, setPrice }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default Bill;
