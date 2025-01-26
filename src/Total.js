function Total({ bill, tip }) {
  let total = bill + bill * (tip / 100);
  return (
    <div className="total">
      You pay ${total} (${bill} + ${tip} tip)
    </div>
  );
}
export default Total;
