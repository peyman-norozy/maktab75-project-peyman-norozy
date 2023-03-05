const InventoryManagementCart = ({ item, priceData, quantityData }) => {
  return (
    <>
      <tr className="text-xs">
        <td>{item.name}</td>
        <td
          contentEditable="true"
          suppressContentEditableWarning={true}
          id={item.id}
          onBlur={(e) => {
            priceData(e.target.lastChild.data, e.target.id);

            console.log(e.target.lastChild.data);
            console.log(e.target.id);
          }}
        >
          {item.price}
        </td>
        <td
          contentEditable="true"
          suppressContentEditableWarning={true}
          id={item.id}
          onBlur={(e) => {
            quantityData(e.target.lastChild.data, e.target.id);

            console.log(e.target.lastChild.data);
            console.log(e.target.id);
          }}
        >
          {item.quantity}
        </td>
      </tr>
    </>
  );
};

export default InventoryManagementCart;
