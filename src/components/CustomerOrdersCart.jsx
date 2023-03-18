const CustomerOrderSCart = (props) => {
  const { modalCartData } = props;
  console.log(modalCartData);
  return (
    <>
      <tr>
        <td>{modalCartData.name}</td>
        <td>{modalCartData.price}</td>
        <td>{modalCartData.quantity}</td>
      </tr>
    </>
  );
};

export default CustomerOrderSCart;
