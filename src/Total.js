function Total({ bill, tip }) {
  let total = bill + tip;
  return (
    <div>
      You pay ${total} (${bill} + ${tip} tip)
    </div>
  );
}
export default Total;
