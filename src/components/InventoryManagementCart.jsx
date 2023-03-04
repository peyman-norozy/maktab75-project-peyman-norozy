const InventoryManagementCart = ({ item }) => {
  return (
    <>
      <tr className="text-xs">
        <td>{item.name}</td>
        <td
          contentEditable="true"
          suppressContentEditableWarning={true}
          id={item.id}
          onBlur={(e) => {
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
